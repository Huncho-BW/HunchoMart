import React from "react";

export default function UserAdrees() {
  return (
    <div>
      <div className="flex justify-between">
        <h1>Address</h1>
        <div>
          <button>+ Add Address</button>
        </div>
      </div>

      <div>
        <div className="flex justify-between">
          <div className="flex gap-5">
            <h1>Home</h1> <span>Default</span>
          </div>

          <h1>Edit</h1>
        </div>
        <div className="flex flex-col">
          <h1>adenuga</h1>
          <span>
            123 Main Street,
            <br /> Apt 4B New York, NY 10001
          </span>
        </div>
      </div>
    </div>
  );
}
