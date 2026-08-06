import React from "react";
import CheckOutLeft from "./CheckoutLeft";
import CheckOutRight from "./CheckOutRight";
import CheckOutSecurity from "./CheckOutSecurity";

import { useParams } from "react-router-dom";

export default function CheckOut() {
  const { id } = useParams();
  const checkId = Number(id);
  console.log("check id", checkId);

  return (
    <div className="checkoutContainer">
      <header className="checkoutHeader ">
        <div className="flex gap-2">
          <h1>HunchoMart </h1>

          <h1 className="">Security Checkout</h1>
        </div>
      </header>

      <div className="checkoutGrid">
        <div className="checkoutLeftWrapper">
          <CheckOutLeft id={checkId} />
        </div>

        <div className="checkoutRightWrapper">
          <CheckOutRight id={checkId} />
        </div>
      </div>
    </div>
  );
}
