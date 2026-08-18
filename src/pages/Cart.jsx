import React, { useState, useContext, useEffect } from "react";
import CartLeft from "./CartLeft";
import CartRight from "./CartRight";
import { CartContext } from "../context/CartContext";
import { useLocation } from "react-router-dom";
export default function Cart() {
  const { cartItems, setCheckoutItems } = useContext(CartContext);

  const lenghtofCart = cartItems.length;

  const location = useLocation();
  console.log("log cart location ", location.pathname);

  console.log("cart inside Cart page:", cartItems);
  return (
    <div className="cartContainer">
      <header className="flex justify-between items-center cartHeader">
        <div>
          <h1 className="cartTitle">Shopping Cart</h1>
          <span className="cartItems">{lenghtofCart} Items</span>
        </div>

        <div>
          <a href="#">Continue Shopping</a>
        </div>
      </header>

      <div className="cartGrid">
        <div className="cartLeftWrapper">
          <CartLeft />
        </div>

        <div className="cartRightWrapper">
          <CartRight />
        </div>
      </div>
    </div>
  );
}
