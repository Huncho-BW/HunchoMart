import React from "react";
import Address from "./Address";
import Delivery from "./Delivery";
import ComfirmationPage from "./comfiremationPage";
const secureCheckout = [
  { id: 1, name: "Shipping" },
  { id: 2, name: "Delivery" },
  { id: 3, name: "Payment" },
  { id: 4, name: "comfirmation" },
];
export default function CheckOutLeft() {
  return (
    <div className="bg-[white]">
      <Address />
      <Delivery />

      <ComfirmationPage />
    </div>
  );
}
