import React from "react";

export default function ApplePay() {
  return (
    <div className="apple-pay">
      <div className="apple-pay-box">
        <h1>
          <span className="apple-logo"></span> Pay
        </h1>
        <p>Use Face ID or Touch ID to complete payment</p>
      </div>

      <div className="secure-payment">
        <span>logo guide</span>
        <p>Your payment information is encrypted and secure</p>
      </div>
    </div>
  );
}
