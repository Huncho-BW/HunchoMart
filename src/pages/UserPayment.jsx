import React from "react";

export default function UserPayment() {
  return (
    <div>
      <div className="flex justify-between">
        <h1>Payment Methods</h1>
        <div>
          <button>+ Add Card</button>
        </div>
      </div>

      <div className="flex flex-col  justify-between">
        <div className="flex justify-between">
          <h1>Visa</h1>
          <h1>Default</h1>
        </div>
        <div>
          <h1>... ... ... 0987</h1>{" "}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-5">
            <span>expired</span>
            <h1>09/26</h1>
          </div>
          <div className="flex gap-5">
            <h1>Edit</h1>
            <h1>Remove</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
