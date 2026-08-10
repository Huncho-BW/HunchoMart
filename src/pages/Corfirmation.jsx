import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Comfirmation() {
  return (
    <div className="confirmation-container">
      <div className="confirmation-icon">
        <FaCheckCircle />
      </div>

      <div className="confirmation-title">
        <p>Order Confirmed</p>
      </div>

      <div className="confirmation-message">
        <h1>Thank you Huncho</h1>

        <h1>
          Your order <span>#VLT-29471</span> has been confirmed.
        </h1>

        <h1>
          A confirmation has been sent to <span>alex@email.com</span>
        </h1>
      </div>

      <div className="order-info">
        <div>
          <p>Order number</p>
          <h2>#VLT-29471</h2>
        </div>

        <div>
          <p>Estimated delivery</p>
          <h2>Dec 18–20</h2>
        </div>

        <div>
          <p>Payment</p>
          <h2>•••• 4242</h2>
        </div>
      </div>

      <div className="confirmation-buttons">
        <NavLink className="active" to="/userDash">
          <button>Track Order</button>
        </NavLink>

        <NavLink className="active" to="/">
          <button>Continue Shopping</button>
        </NavLink>
      </div>
    </div>
  );
}
