import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function CheckOutPayment() {
  return (
    <div>
      <div>
        <h1>logo</h1>
        <h1>Payment Method</h1>
      </div>
      <div>
        <div>
          <NavLink to="credit">credit card</NavLink>
          <NavLink to="paypal">paypal</NavLink>{" "}
          <NavLink to={"applePay"}>Apple pay</NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
