import React from "react";
import CartLeft from "./CartLeft";
import CartRight from "./CartRight";

export default function Cart() {
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
