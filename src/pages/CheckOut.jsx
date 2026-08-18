import React, { useEffect, useState } from "react";
import CheckOutLeft from "./CheckoutLeft";
import CheckOutRight from "./CheckOutRight";
import CheckOutSecurity from "./CheckOutSecurity";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

import { useParams } from "react-router-dom";

export default function CheckOut() {
  const { id } = useParams();
  const { cartItems, checkoutItems, setCheckoutItems, count } =
    useContext(CartContext);
  const checkId = Number(id);
  useEffect(() => {
    if (id) {
      setCheckoutItems([
        {
          id: checkId,
          quantity: count,
        },
      ]);
    } else {
      setCheckoutItems(cartItems);
    }
  }, [id, count, cartItems]);

  console.log("log out checkOutItem", checkoutItems);

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
          <CheckOutLeft />
        </div>

        <div className="checkoutRightWrapper">
          <CheckOutRight />
        </div>
      </div>
    </div>
  );
}
