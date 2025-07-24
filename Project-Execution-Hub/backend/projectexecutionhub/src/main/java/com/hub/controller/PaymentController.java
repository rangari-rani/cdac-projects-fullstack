package com.hub.controller;

import com.razorpay.PaymentLink;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.zosh.exception.ProjectException;
import com.zosh.model.User;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;


import com.zosh.exception.UserException;


import com.zosh.response.ApiResponse;
import com.zosh.response.PaymentLinkResponse;

import com.zosh.service.UserService;


@RestController
@RequestMapping("/api")
public class PaymentController {
	
	@Value("${razorpay.api.key}")
	private String apiKey;

	@Value("${razorpay.api.secret}")
	private String apiSecret;
	
	@Autowired
	private UserService userService;

	

	
	@PostMapping("/payments/{planType}")
	public ResponseEntity<PaymentLinkResponse>createPaymentLink(@PathVariable String planType,
			@RequestHeader("Authorization")String jwt)
			throws RazorpayException, UserException, ProjectException {
		User user=userService.findUserProfileByJwt(jwt);
		int amount = 799 * 100;

		
		if (planType.equals("ANNUALLY")) {
			
			amount = (int) (amount * 0.7 * 12);
		}

		 try {
		 
		      RazorpayClient razorpay = new RazorpayClient(apiKey, apiSecret);

		      JSONObject paymentLinkRequest = new JSONObject();
		      paymentLinkRequest.put("amount",amount);
		      paymentLinkRequest.put("currency","INR");    

		     

		    
		      JSONObject customer = new JSONObject();
		      customer.put("name",user.getFullName());

		      customer.put("email",user.getEmail());
		      paymentLinkRequest.put("customer",customer);

		      
		      JSONObject notify = new JSONObject();
		      notify.put("email",true);
		      paymentLinkRequest.put("notify",notify);

		  
		      paymentLinkRequest.put("reminder_enable",true);

		     
		      paymentLinkRequest.put("callback_url","http://localhost:5173/upgrade_plan/success?planType="+planType);
		      paymentLinkRequest.put("callback_method","get");

		      
		      PaymentLink payment = razorpay.paymentLink.create(paymentLinkRequest);
		      
		      String paymentLinkId = payment.get("id");
		      String paymentLinkUrl = payment.get("short_url");
		      
		      PaymentLinkResponse res=new PaymentLinkResponse(paymentLinkUrl,paymentLinkId);
		      
		      return new ResponseEntity<PaymentLinkResponse>(res,HttpStatus.ACCEPTED);
		      
		    } catch (RazorpayException e) {
		    	
		      System.out.println("Error creating payment link: " + e.getMessage());
		      throw new RazorpayException(e.getMessage());
		    }
		
		

	}
	
}
