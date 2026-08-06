import React from "react";

export default function PayPal() {
  return (
    <div className="paypal">
      <div className="paypal-box">
        <h1>
          Pay<span>Pal</span>
        </h1>
        <p>You'll be redirected to PayPal to complete payment</p>
      </div>

      <div className="secure-payment">
        <span>logo guide</span>
        <p>Your payment information is encrypted and secure</p>
      </div>
    </div>
  );
}
