import React from "react";

export default function Orders() {
  return (
    <div>
      <div>
        <h1>Order</h1>
      </div>

      <div className="flex flex-col gap-[30px]">
        <div className="flex justify-between items-center">
          <div>
            <h1>package name</h1>
            <h1>Dec 24 2024 .3 items </h1>
          </div>
          <div>
            <span>
              <h1>Delivered</h1>
            </span>
            <h1>$400</h1>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-[20px] items-center">
            <img src="" className="w-[60px] h-[60px]" alt="" />
            <div>
              <h1>Name </h1>
              <h1>Brand</h1>
            </div>
          </div>
          <div className="flex gap-[20px]">
            <span>
              <h1>Reorder</h1>
            </span>
            <span>
              <h1>Review</h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
