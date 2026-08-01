import React from "react";
import { NavLink } from "react-router-dom";
export default function Overview() {
  return (
    <div>
      <div>
        <h1>Good Morning, Michael</h1>
        <h2>Here's what's happening with your account</h2>
      </div>

      <div className="border">
        <h1>Total Order</h1>
        <h2>$30</h2>
        <h3>+3 this month</h3>
      </div>

      <div>
        <div>
          <h1>Recent Order </h1>
          <span>View all </span>
        </div>
        <div>
          <div>
            <img src="" alt="" />
            <div className="">
              <h1>package number</h1>
              <h2>3 items</h2>
              <h3>Dec 12 2025</h3>
            </div>
          </div>
          <div>
            <span>Delivered</span>
            <h1>$400</h1>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h1>WishList </h1>
          <span>veiw all</span>
        </div>
        <div className="flashDeal">
          <img src="" alt="" />
          <div className="flex flex-col gap-[15px] px-[20px] py-[10px]">
            <h1 className="text-[14px] font-[300]">Brand</h1>
            <div className="flex gap-2">
              <div>
                <h1 className="text-[14px] font-[400]">$230</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
