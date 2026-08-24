import React from "react";
import { AuthenticatonContext } from "../context/AuthenticatonContext";
import { useContext } from "react";

export default function UserAdrees() {
  const { details } = useContext(AuthenticatonContext);

  return (
    <div className="flex flex-col gap-[20px]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-[26px] font-[700] text-gray-900">Address</h1>

        <div>
          <button className="cursor-pointer rounded-[8px] bg-black px-[16px] py-[9px] text-[13px] font-[500] text-white transition hover:bg-gray-800">
            + Add Address
          </button>
        </div>
      </div>

      {/* Address Card */}
      <div className="rounded-[14px] border border-gray-200 bg-white p-[20px]">
        <div className="flex items-center justify-between border-b border-gray-100 pb-[15px]">
          <div className="flex items-center gap-5">
            <h1 className="text-[15px] font-[600] text-gray-900">Home</h1>

            <span className="rounded-full bg-green-50 px-[10px] py-[4px] text-[11px] font-[500] text-green-600">
              Default
            </span>
          </div>

          <h1 className="cursor-pointer text-[13px] font-[500] text-gray-600 transition hover:text-black hover:underline">
            Edit
          </h1>
        </div>

        <div className="flex flex-col gap-[5px] pt-[15px]">
          <h1 className="text-[14px] font-[600] text-gray-900">
            {details.firstName.toUpperCase()}
          </h1>

          <span className="max-w-[500px] text-[13px] leading-[20px] text-gray-500">
            {details.address}
          </span>
        </div>
      </div>
    </div>
  );
}
