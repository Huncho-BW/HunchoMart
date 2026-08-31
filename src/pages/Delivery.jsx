import React, { useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Truck } from "lucide-react";

export default function Delivery() {
  const { chooseinput, setchooseinput, errors } = useContext(CartContext);

  const deliveryOptions = [
    {
      type: "pickup",
      title: "Pickup Station",
      duration: "3-5 business days",
      price: 800,
      icon: <Truck />,
    },
    {
      type: "doorstep",
      title: "Doorstep Delivery",
      duration: "2-4 business days",
      price: 1000,
      icon: <Truck />,
    },
    {
      type: "express",
      title: "Express Doorstep",
      duration: "1-2 business days",
      price: 1500,
      icon: <Truck />,
    },
  ];

  const handleDeliveryChange = (type, price) => {
    setchooseinput({
      type,
      price,
    });
  };

  useEffect(() => {
    setchooseinput({
      type: "",
      price: "",
    });
  }, []);

  return (
    <div className="flex flex-col gap-[20px]">
      {deliveryOptions.map((item) => (
        <div
          key={item.type}
          className={`de-border ${
            chooseinput.type === item.type ? "delivery-selected" : ""
          }`}
          onClick={() => handleDeliveryChange(item.type, item.price)}
        >
          <input
            type="radio"
            name="delivery"
            checked={chooseinput.type === item.type}
            onChange={() => handleDeliveryChange(item.type, item.price)}
          />

          <div className="delivery-content">
            <span className="delivery-logo ">{item.icon}</span>

            <div className="delivery-text">
              <h1>{item.title}</h1>
              <span>{item.duration}</span>
            </div>
          </div>

          <div className="delivery-price">
            <h1>₦{item.price.toLocaleString()}</h1>
          </div>
        </div>
      ))}

      {errors.delivery && (
        <div className="deliveryError">{errors.delivery}</div>
      )}
    </div>
  );
}
