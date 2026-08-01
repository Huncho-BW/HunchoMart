import React from "react";

export default function Delivery() {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="de-border">
        <input type="radio" name="delivery" />

        <div className="delivery-content">
          <span className="delivery-logo">logo</span>

          <div className="delivery-text">
            <h1>Standard delivery</h1>
            <span>3-5 business days</span>
          </div>
        </div>

        <div className="delivery-price">
          <h1>FREE</h1>
        </div>
      </div>

      <div className="de-border">
        <input type="radio" name="delivery" />

        <div className="delivery-content">
          <span className="delivery-logo">logo</span>

          <div className="delivery-text">
            <h1>Express Delivery </h1>
            <span>1-2 business days</span>
          </div>
        </div>

        <div className="delivery-price">
          <h1>$400</h1>
        </div>
      </div>

      <div className="de-border">
        <input type="radio" name="delivery" />

        <div className="delivery-content">
          <span className="delivery-logo">logo</span>

          <div className="delivery-text">
            <h1>Overnight delivery</h1>
            <span>Next day business days</span>
          </div>
        </div>

        <div className="delivery-price">
          <h1>$300</h1>
        </div>
      </div>
    </div>
  );
}
