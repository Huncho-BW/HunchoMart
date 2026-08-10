import React, { useState, useContext } from "react";
import CartLeft from "./CartLeft";
import CartRight from "./CartRight";
import { CartContext } from "../context/CartContext";
export default function Cart() {
  const { cart } = useContext(CartContext);

  console.log("cart inside Cart page:", cart);
  return (
    <div className="cartContainer">
      <header className="flex justify-between items-center cartHeader">
        <div>
          <h1 className="cartTitle">Shopping Cart</h1>
          <span className="cartItems">3 Items</span>
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
