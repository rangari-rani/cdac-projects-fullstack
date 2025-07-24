/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { createPayment } from "@/redux/Payment/Action";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { useDispatch } from "react-redux";

const SubscriptionCard = ({ data }) => {
  const dispatch = useDispatch();

  const handleUpgrade = () => {
    dispatch(
      createPayment({
        planType: data.planType,
        jwt: localStorage.getItem("jwt"),
      })
    );
  };

  return (
    <div className="rounded-xl border border-blue-200 bg-blue-50 shadow-md p-5 space-y-5 w-[18rem]">
      <p className="text-lg font-semibold text-blue-900">{data.planName}</p>

      <p>
        <span className="text-xl font-bold text-blue-900">₹{data.price}/</span>
        <span className="text-blue-800"> {data.planType}</span>
      </p>

      {data.planType === "ANNUALLY" && (
        <p className="text-sm text-green-600 font-medium">30% off</p>
      )}

      <Button
        disabled={data.planName === "Free"}
        className="w-full"
        onClick={handleUpgrade}
      >
        {data.buttonName}
      </Button>

      <div className="space-y-2">
        {data.features.map((item, index) => (
          <div key={index} className="flex items-center gap-2 text-blue-800">
            <CheckCircledIcon className="text-green-600" />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionCard;
