import React from "react";

export default function Credit() {
  return (
    <>
      <div className="credit">
        <label>Card</label>
        <div className="input-box">
          <input type="number" placeholder="123456789" />
        </div>

        <label>Name of Card</label>
        <div className="input-box">
          <input type="text" />
        </div>

        <div className="card-details">
          <div className="field">
            <label>Expireing date</label>
            <div className="input-box">
              <input type="text" />
            </div>
          </div>

          <div className="field">
            <label>Cvv</label>
            <div className="input-box">
              <input type="text" />
            </div>
          </div>
        </div>

        <div className="save-card">
          <input type="checkbox" />
          <h1>Save card for future purchases</h1>
        </div>

        <div className="secure-payment">
          <span>logo guide</span>
          <p>Your payment information is encrypted and secure</p>
        </div>
      </div>
      ;
    </>
  );
}
