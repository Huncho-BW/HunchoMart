import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Box } from "lucide-react";
export default function Notification() {
  const { notification } = useContext(CartContext);

  console.log("log our notification orde , ", notification);
  return (
    <div>
      <div>
        <h1>Notification</h1>
      </div>
      <>
        {notification?.map((item) => (
          <div className=" flex justify-between">
            <div className="flex gap-5">
              <span>
                <Box />
              </span>
              <div className="flex flex-col gap-1">
                <h1>
                  Order <span>{item.packageNumber}</span> is in transit
                </h1>
                <h2>Your order is on its way — estimated delivery Dec 18.</h2>
                <h3>Status: {item.processing}</h3>
              </div>
            </div>
            <div>
              <span></span>
            </div>
          </div>
        ))}
      </>
    </div>
  );
}
