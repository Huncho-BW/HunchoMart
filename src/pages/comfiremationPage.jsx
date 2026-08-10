import React from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";

export default function ComfirmationPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const handleNextStage = () => {
    if (location.pathname === `/checkOut/${id}/Shipping`) {
      navigate("Delivery");
    } else if (location.pathname === `/checkOut/${id}/Delivery`) {
      navigate("checkoutPayment");
    } else if (location.pathname === `/checkOut/${id}/checkoutPayment`) {
      navigate("/Comfirmation");
    }
  };

  const buttonText =
    location.pathname === `/checkOut/${id}/Shipping`
      ? "Continue to Delivery"
      : location.pathname === `/checkOut/${id}/Delivery`
        ? "Continue to Payment"
        : location.pathname === `/checkOut/${id}/checkoutPayment`
          ? "Submit Payment"
          : "";

  return (
    <div>
      <div className="border border-w-[100%] h-[1px] mt-[24px] "></div>
      <div className="checkoutActions">
        <button className="backCart">← Return to cart</button>

        <button onClick={handleNextStage} className="continueBtn ">
          {buttonText}{" "}
        </button>
      </div>
    </div>
  );
}
