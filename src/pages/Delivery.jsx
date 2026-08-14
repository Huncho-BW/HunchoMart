import React from "react";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export default function Delivery() {
  const { chooseinput, setchooseinput, errors } = useContext(CartContext);

  const handleDeliveryChange = (type, price) => {
    setchooseinput({
      type,
      price,
    });
  };

  return (
    <div className="flex flex-col gap-[20px]">
      {/* Pickup Station */}
      <div className="de-border">
        <input
          type="radio"
          name="delivery"
          checked={chooseinput.type === "pickup"}
          onChange={() => handleDeliveryChange("pickup", 800)}
        />

        <div className="delivery-content">
          <span className="delivery-logo">logo</span>

          <div className="delivery-text">
            <h1>Pickup Station</h1>
            <span>3-5 business days</span>
          </div>
        </div>

        <div className="delivery-price">
          <h1>₦800</h1>
        </div>
      </div>

      {/* Doorstep */}
      <div className="de-border">
        <input
          type="radio"
          name="delivery"
          checked={chooseinput.type === "doorstep"}
          onChange={() => handleDeliveryChange("doorstep", 1000)}
        />

        <div className="delivery-content">
          <span className="delivery-logo">logo</span>

          <div className="delivery-text">
            <h1>Doorstep Delivery</h1>
            <span>2-4 business days</span>
          </div>
        </div>

        <div className="delivery-price">
          <h1>₦1,000</h1>
        </div>
      </div>

      {/* Express */}
      <div className="de-border">
        <input
          type="radio"
          name="delivery"
          checked={chooseinput.type === "express"}
          onChange={() => handleDeliveryChange("express", 1500)}
        />

        <div className="delivery-content">
          <span className="delivery-logo">logo</span>

          <div className="delivery-text">
            <h1>Express Doorstep</h1>
            <span>1-2 business days</span>
          </div>
        </div>

        <div className="delivery-price">
          <h1>₦1,500</h1>
        </div>
      </div>

      {/* Delivery error */}
      {errors.delivery && (
        <div className="deliveryError">{errors.delivery}</div>
      )}
    </div>
  );
}
