import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { CreditCard } from "lucide-react";
export default function CheckOutPayment() {
  const paymentMethods = [
    { name: "Credit Card", path: "credit" },
    { name: "PayPal", path: "paypal" },
    { name: "Apple Pay", path: "applePay" },
  ];
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex gap-3">
        {paymentMethods.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `border px-[18px] py-[8px] rounded-lg transition-all duration-200
        ${
          isActive
            ? "border-[#B8965A] bg-[#08090B] text-[white]"
            : "border-gray-200 hover:border-[#B8965A] hover:bg-gray-50"
        }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
