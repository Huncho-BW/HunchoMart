import React from "react";
import { AuthenticatonContext } from "../context/AuthenticatonContext";
import { useContext } from "react";

export default function UserPayment() {
  const { details } = useContext(AuthenticatonContext);

  return (
    <div className="flex flex-col gap-[20px]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-[26px] font-[700] text-gray-900">
          Payment Methods
        </h1>

        <div>
          <button className="cursor-pointer rounded-[8px] bg-black px-[16px] py-[9px] text-[13px] font-[500] text-white transition hover:bg-gray-800">
            + Add Card
          </button>
        </div>
      </div>

      {/* Payment Card */}
      <div className="flex flex-col justify-between gap-[20px] rounded-[14px] border border-gray-200 bg-white p-[20px]">
        <div className="flex items-center justify-between">
          <h1 className="text-[15px] font-[600] text-gray-900">Visa</h1>

          <h1 className="rounded-full bg-green-50 px-[10px] py-[4px] text-[11px] font-[500] text-green-600">
            Default
          </h1>
        </div>

        <div>
          <h1 className="text-[18px] font-[600] tracking-[2px] text-gray-800">
            {details.card.slice(0, -4).replace(/\d/g, "*") +
              details.card.slice(-4)}
          </h1>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="text-[12px] text-gray-400">Expired</span>

            <h1 className="text-[13px] font-[500] text-gray-700">
              {details.exp}
            </h1>
          </div>

          <div className="flex items-center gap-5">
            <h1 className="cursor-pointer text-[13px] font-[500] text-gray-600 transition hover:text-black hover:underline">
              Edit
            </h1>

            <h1 className="cursor-pointer text-[13px] font-[500] text-red-500 transition hover:text-red-600 hover:underline">
              Remove
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
