import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { CreditCard } from "lucide-react";
export default function CheckOutPayment() {
  return (
    <div className="p-[20px] flex flex-col gap-[20px]">
      <div className="flex gap-2">
        <CreditCard />
        <h1>Payment Method</h1>
      </div>
      <div className="  ">
        <div className="flex gap-3 ">
          <div className="border  px-[18px] py-[4px]  ">
            {" "}
            <NavLink to="credit">credit card</NavLink>
          </div>
          <div className="border px-[18px] py-[4px] ">
            <NavLink to="paypal">paypal</NavLink>
          </div>
          <div className="border  px-[18px] py-[4px]  ">
            {" "}
            <NavLink to={"applePay"}>Apple pay</NavLink>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
