import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function CheckOutSecurity({ id }) {
  const secureCheckout = [
    { id: 1, name: "Shipping", path: "Shipping" },
    { id: 2, name: "Delivery", path: "Delivery" },
    { id: 3, name: "Payment", path: "checkoutPayment" },
    { id: 4, name: "comfirmation" },
  ];
  return (
    <>
      <div className="checkoutProgress">
        {secureCheckout.map((item, index) => (
          <NavLink to={item.path} className="progressItem" key={item.id}>
            <div className="progressTop">
              <span
                className={`progressCircle ${item.active ? "activeCircle" : ""}`}
              >
                {item.id}
              </span>

              {index !== secureCheckout.length - 1 && (
                <span className="progressLine"></span>
              )}
            </div>

            <h2 className={`progressTitle ${item.active ? "activeTitle" : ""}`}>
              {item.name}
            </h2>
          </NavLink>
        ))}
      </div>
    </>
  );
}
