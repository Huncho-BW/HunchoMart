import React from "react";
import Address from "./Address";
import Delivery from "./Delivery";
import ComfirmationPage from "./comfiremationPage";
import CheckOutSecurity from "./CheckOutSecurity";
import { Outlet } from "react-router-dom";
export default function CheckOutLeft({ id }) {
  return (
    <div className="bg-[white]">
      <CheckOutSecurity />

      <div>
        <Outlet />
        <ComfirmationPage />
      </div>
    </div>
  );
}
