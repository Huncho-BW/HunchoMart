import React, { useEffect, useState } from "react";
import ComfirmationPage from "./comfiremationPage";
import CheckOutSecurity from "./CheckOutSecurity";
import { Outlet } from "react-router-dom";
import CheckOutLeft from "./CheckoutLeft";
import CheckOutRight from "./CheckOutRight";

import { CartContext } from "../context/CartContext";
import { useContext } from "react";

import { useParams } from "react-router-dom";

export default function CheckOut() {
  const { id } = useParams();
  const { cartItems, checkoutItems, setCheckoutItems, productDetailsData } =
    useContext(CartContext);
  const checkId = Number(id);
  useEffect(() => {
    if (id) {
      setCheckoutItems([
        {
          id: checkId,
          quantity: productDetailsData.count,
          size: productDetailsData.size,
          color: productDetailsData.color,
        },
      ]);
    } else {
      setCheckoutItems(cartItems);
    }
  }, [id, cartItems]);

  console.log("log out checkOutItem", checkoutItems);

  return (
    <div className="checkoutContainer">
      <header className="checkoutHeader ">
        <div className="flex gap-2">
          <h1>HunchoMart </h1>

          <h1 className="">Security Checkout</h1>
        </div>
        <div>
          <CheckOutSecurity />
        </div>
      </header>

      <div className="checkoutGrid">
        <div className="checkoutLeftWrapper">
          <Outlet />
          <ComfirmationPage />
        </div>

        <div className="checkoutRightWrapper">
          <CheckOutRight />
        </div>
      </div>
    </div>
  );
}
