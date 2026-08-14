import React, { useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function ComfirmationPage() {
  const { fillDetails, chooseinput, errors, setErrors } =
    useContext(CartContext);

  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const handleNextStage = () => {
    // SHIPPING
    if (location.pathname === `/checkOut/${id}/Shipping`) {
      const details = fillDetails[0];

      const newErrors = {};

      if (!details.firstname.trim()) {
        newErrors.firstname = "First name is required";
      }

      if (!details.lastname.trim()) {
        newErrors.lastname = "Last name is required";
      }

      if (!details.email.trim()) {
        newErrors.email = "Email is required";
      }

      if (!details.phone.trim()) {
        newErrors.phone = "Phone is required";
      }

      if (!details.addressLine1.trim()) {
        newErrors.addressLine1 = "Address is required";
      }

      if (!details.city.trim()) {
        newErrors.city = "City is required";
      }

      if (!details.state.trim()) {
        newErrors.state = "State is required";
      }

      if (!details.zipCode.trim()) {
        newErrors.zipCode = "ZIP code is required";
      }

      if (!details.country.trim()) {
        newErrors.country = "Country is required";
      }

      setErrors(newErrors);

      // Don't navigate if there are errors
      if (Object.keys(newErrors).length > 0) {
        return;
      }

      navigate("Delivery");
    }

    // DELIVERY
    else if (location.pathname === `/checkOut/${id}/Delivery`) {
      const newErrors = {};

      if (!chooseinput.type) {
        newErrors.delivery = "Please choose a delivery method";
      }

      setErrors(newErrors);

      // Don't navigate if no delivery was selected
      if (Object.keys(newErrors).length > 0) {
        return;
      }

      // Delivery selected → continue
      navigate("checkoutPayment");
    }

    // PAYMENT
    else if (location.pathname === `/checkOut/${id}/checkoutPayment`) {
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
      <div className="border border-w-[100%] h-[1px] mt-[24px]"></div>

      <div className="checkoutActions">
        <button className="backCart">← Return to cart</button>

        <button onClick={handleNextStage} className="continueBtn">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
