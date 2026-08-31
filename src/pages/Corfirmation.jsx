import React, { useContext } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AuthenticatonContext } from "../context/AuthenticatonContext";
export default function Comfirmation() {
  const { order, createNotification } = useContext(CartContext);
  const { details } = useContext(AuthenticatonContext);

  const currentDay = new Date();

  const estimatedDate = new Date(currentDay);
  estimatedDate.setDate(estimatedDate.getDate() + 3);

  const formattedDate = estimatedDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "2-digit",
  });

  return (
    <div>
      {order?.map((item) => {
        return (
          <div className="confirmation-container" key={item.orderId}>
            <div className="confirmation-icon">
              <FaCheckCircle />
            </div>

            <div className="confirmation-title">
              <p>Order Confirmed</p>
            </div>

            <div className="confirmation-message">
              <h1>Thank you {details.firstName}</h1>

              <h1>
                Your order <span>#{item.orderId}</span> has been confirmed.
              </h1>

              <h1>
                A confirmation has been sent to{" "}
                <span>{item.customer?.email}</span>
              </h1>
            </div>

            <div className="order-info">
              <div>
                <p>Order number</p>
                <h2>#{item.orderId}</h2>
              </div>

              <div>
                <p>Estimated delivery</p>
                <h2>{formattedDate}</h2>
              </div>

              <div>
                <p>Payment</p>
                <h2>•••• 4242</h2>
              </div>
            </div>

            <div className="confirmation-buttons">
              <NavLink className="active" to="/userDash">
                <button
                  onClick={() => createNotification(item.orderId, item.status)}
                >
                  Track Order
                </button>
              </NavLink>

              <NavLink className="active" to="/">
                <button>Continue Shopping</button>
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
}
