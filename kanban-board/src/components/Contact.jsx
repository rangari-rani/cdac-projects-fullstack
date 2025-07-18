import React from 'react'
import './Contact.css'
import Swal from 'sweetalert2'
const Contact = () => {

  const onSubmit = async (event) => {

    event.preventDefault();
    // setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7a988cc2-2986-42dd-a169-fd422701eee6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
        // setResult("Form Submitted Successfully");
        Swal.fire({
          title: "Success",
          text: "Message sent successfully",
          icon: "success"
        });
        event.target.reset();
     } else {
        console.log("Error", data); // Check the error message
        // setResult(data.message);
     }
     
  };

  return (
    <section className='contact'>
        <form className='first' onSubmit={onSubmit}>
            <h2>Contact form </h2>
            <div className='input-boxes'>
                <label className='lab'>Full Name </label>
                <input type="text" className='fieldss' placeholder='Enter your name' name='name' required />
            </div>
            <div className='input-boxes'>
                <label className='lab'>Email Address  </label>
                <input type="email" className='fieldss' placeholder='Enter your email' name='email' required />
            </div>
            <div className='input-boxes'>
                <label className='lab'>Your message  </label>
               <textarea name='message' className='fieldss mess' placeholder='Enter your message ' required></textarea>
            </div>
            <button type='submit '>Send Message </button>
        </form>
    </section>
  )
}

export default Contact