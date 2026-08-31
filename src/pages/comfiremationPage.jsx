import React, { useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function ComfirmationPage() {
  const {
    fillDetails,
    chooseinput,
    errors,
    setErrors,
    createOder,
    createNotification,
  } = useContext(CartContext);

  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const isShipping = location.pathname.endsWith("/Shipping");

  const isDelivery = location.pathname.endsWith("/Delivery");

  const isPayment = location.pathname.includes("/checkoutPayment");

  const handleBack = () => {
    // Shipping → back to cart
    if (isShipping) {
      navigate("/cart");
      return;
    }

    // Delivery → back to Shipping
    if (isDelivery) {
      navigate("Shipping");
      return;
    }

    // Payment → back to Delivery
    if (isPayment) {
      navigate("Delivery");
    }
  };

  const handleNextStage = () => {
    // SHIPPING
    if (isShipping) {
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

      if (Object.keys(newErrors).length > 0) {
        return;
      }

      navigate("Delivery");
    }

    // DELIVERY
    else if (isDelivery) {
      const newErrors = {};

      if (!chooseinput.type) {
        newErrors.delivery = "Please choose a delivery method";
      }

      setErrors(newErrors);

      if (Object.keys(newErrors).length > 0) {
        return;
      }

      navigate("checkoutPayment");
    }

    // PAYMENT
    else if (isPayment) {
      createOder();

      navigate("/Comfirmation");
    }
  };

  const buttonText = isShipping
    ? "Continue to Delivery"
    : isDelivery
      ? "Continue to Payment"
      : isPayment
        ? "Place Order"
        : "";
  return (
    <div>
      <div className="border border-w-[100%] h-[1px] mt-[24px]"></div>

      <div className="checkoutActions">
        <button onClick={handleBack} className="backCart">
          {isShipping ? "Return to cart" : "Back"}
        </button>

        <button onClick={handleNextStage} className="continueBtn">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
