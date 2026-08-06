import React from "react";
import { NavLink } from "react-router-dom";
export default function ComfirmationPage() {
  return (
    <div>
      <div className="border border-w-[100%] h-[1px] mt-[24px] "></div>
      <div className="checkoutActions">
        <button className="backCart">← Return to cart</button>
        <NavLink to="/Comfirmation">
          <button className="continueBtn ">Continue to Delivery</button>
        </NavLink>
      </div>
    </div>
  );
}
