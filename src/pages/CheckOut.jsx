import React from "react";
import CheckOutLeft from "./CheckoutLeft";
import CheckOutRight from "./CheckOutRight";
import CheckOutSecurity from "./CheckOutSecurity";

export default function CheckOut() {
  return (
    <div className="checkoutContainer">
      <header className="checkoutHeader ">
        <div className="flex gap-2">
          <h1>HunchoMart </h1>

          <h1 className="">Security Checkout</h1>
        </div>
      </header>
      <div>
        <CheckOutSecurity />
      </div>

      <div className="checkoutGrid">
        <div className="checkoutLeftWrapper">
          <CheckOutLeft />
        </div>

        <div className="checkoutRightWrapper">
          <CheckOutRight />
        </div>
      </div>
    </div>
  );
}
