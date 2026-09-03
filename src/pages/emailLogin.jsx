import React from "react";

export default function EmailLongin() {
  return (
    <div className="emailBorder bg-[#0C0C0C] ">
      <div>
        <h1 className="text-[10px] text-[#B8965A] tracking-[0.2em]">
          Huncho Mart
        </h1>
      </div>
      <div>
        <h1 className="text-[36px] font-[700] text-[#FAF8F5] topHeader ">
          Join the inner circle.
        </h1>
      </div>
      <div>
        <span className="text-[14px] text-[#8A8580]">
          Early access to drops, exclusive member pricing, and curated
          selections — all for free.
        </span>
      </div>
      <div className="emBt">
        <div className="emailInput">
          <input
            type="email"
            className="text-white"
            name=""
            id=""
            placeholder="Enter Email"
          />
        </div>
        <div className="eamilBut">
          <button className="topHeader text-[16px]">Join </button>
        </div>
      </div>
    </div>
  );
}
