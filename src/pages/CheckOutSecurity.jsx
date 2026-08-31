import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Check } from "lucide-react";

export default function CheckOutSecurity({ id }) {
  const secureCheckout = [
    { id: 1, name: "Shipping", path: "Shipping" },
    { id: 2, name: "Delivery", path: "Delivery" },
    { id: 3, name: "Payment", path: "checkoutPayment" },
    { id: 4, name: "Confirmation", path: "comfirmation" },
  ];

  const location = useLocation();

  const currentIndex = secureCheckout.findIndex((item) =>
    location.pathname.toLowerCase().includes(item.path.toLowerCase()),
  );

  return (
    <div className="checkoutProgress">
      {secureCheckout.map((item, index) => {
        const isCurrent = index === currentIndex;
        const isPrevious = index < currentIndex;
        const isCompleted = isCurrent || isPrevious;

        return (
          <NavLink to={item.path} className="progressItem" key={item.id}>
            <div className="progressTop">
              <span
                className={`progressCircle ${
                  isCompleted ? "activeCircle" : ""
                }`}
              >
                {isCompleted ? <Check size={14} /> : item.id}
              </span>

              {index !== secureCheckout.length - 1 && (
                <span className="progressLine"></span>
              )}
            </div>

            <h2 className={`progressTitle ${isCompleted ? "activeTitle" : ""}`}>
              {item.name}
            </h2>
          </NavLink>
        );
      })}
    </div>
  );
}
