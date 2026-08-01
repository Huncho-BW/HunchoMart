import React from "react";

export default function UserPayment() {
  return (
    <div>
      <div>
        <h1>Payment Methods</h1>
        <div>
          <button>+ Add Card</button>
        </div>
      </div>

      <div>
        <div>
          <h1>Visa</h1>
          <h1>Default</h1>
        </div>
        <div>
          <h1>... ... ... 0987</h1>{" "}
        </div>
        <div>
          <div>
            <span>expired</span>
            <h1>09/26</h1>
          </div>
          <div>
            <h1>Edit</h1>
            <h1>Remove</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
