import React from "react";

export default function Notification() {
  return (
    <div>
      <div>
        <h1>Notification</h1>
      </div>

      <div className=" flex justify-between">
        <div className="flex gap-5">
          <span>logo</span>
          <div className="flex flex-col gap-1">
            <h1>Order VLT-28903 is in transit</h1>
            <h2>Your order is on its way — estimated delivery Dec 18.</h2>
            <h3>2 hours ago</h3>
          </div>
        </div>
        <div>
          <span></span>
        </div>
      </div>
    </div>
  );
}
