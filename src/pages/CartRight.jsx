import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { product } from "../data/product";
export default function CartRight({ productData }) {
  const lenghtofCart = productData.length;

  const price = productData.map((item) => {
    return item.price;
  });

  const actualTotalPrice = productData.reduce(
    (acc, item) => acc + item.actualPrice * item.quantity,
    0,
  );

  const totalPrice = productData.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const savingPrice = Math.round(actualTotalPrice - totalPrice);

  console.log("log out total", actualTotalPrice, totalPrice, savingPrice);

  return (
    <div className="orderSummary">
      <h1 className="summaryTitle">Order Summary</h1>

      <div className="promoWrapper">
        <div className="promoInput">
          <input type="text" placeholder="Promo code" />
        </div>

        <div className="promoButton">
          <button>Apply</button>
        </div>
      </div>

      <div className="summaryRow">
        <h1>
          Subtotal <span>( {lenghtofCart} items)</span>
        </h1>

        <h1>${totalPrice}</h1>
      </div>

      <div className="summaryRow">
        <h1>Shipping</h1>

        <h1 className="freeShipping">0</h1>
      </div>

      <div className="summaryRow">
        <h1>Sale savings</h1>

        <h1 className="saleSaving">-${savingPrice}</h1>
      </div>

      <span className="divider"></span>

      <div className="totalWrapper">
        <div>
          <h1 className="totalTitle">Total</h1>

          <span className="taxText">Taxes calculated at checkout</span>
        </div>

        <h1 className="totalPrice">${totalPrice}</h1>
      </div>

      <NavLink to="/checkOut/cart" className="checkoutButton">
        <button>Proceed to Checkout</button>
      </NavLink>

      <div className="securityBox">
        <span className="securityIcon"></span>

        <h1>Secure 256-bit SSL checkout</h1>
      </div>

      <div className="paymentMethods">
        <div className="paymentCard">
          <h1>Visa</h1>
        </div>

        <div className="paymentCard">
          <h1>Paypal</h1>
        </div>

        <div className="paymentCard">
          <h1>Amex</h1>
        </div>

        <div className="paymentCard">
          <h1>MC</h1>
        </div>
      </div>
    </div>
  );
}
