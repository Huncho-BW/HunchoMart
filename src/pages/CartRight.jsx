import React from "react";
import { NavLink } from "react-router-dom";

export default function CartRight() {
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
          Subtotal <span>(4 items)</span>
        </h1>

        <h1>$2277</h1>
      </div>

      <div className="summaryRow">
        <h1>Shipping</h1>

        <h1 className="freeShipping">FREE</h1>
      </div>

      <div className="summaryRow">
        <h1>Sale savings</h1>

        <h1 className="saleSaving">-$551</h1>
      </div>

      <span className="divider"></span>

      <div className="totalWrapper">
        <div>
          <h1 className="totalTitle">Total</h1>

          <span className="taxText">Taxes calculated at checkout</span>
        </div>

        <h1 className="totalPrice">$2277</h1>
      </div>

      <NavLink to="/checkOut/:id" className="checkoutButton">
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
