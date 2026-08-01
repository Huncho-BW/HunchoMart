import React from "react";

export default function CheckOutSecurity() {
  const secureCheckout = [
    { id: 1, name: "Shipping" },
    { id: 2, name: "Delivery" },
    { id: 3, name: "Payment" },
    { id: 4, name: "comfirmation" },
  ];
  return (
    <div className="checkoutProgress">
      {secureCheckout.map((item, index) => (
        <div className="progressItem" key={item.id}>
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
        </div>
      ))}
    </div>
  );
}
