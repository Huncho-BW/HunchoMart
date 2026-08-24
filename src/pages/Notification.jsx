import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Box } from "lucide-react";

export default function Notification() {
  const { notification } = useContext(CartContext);

  console.log("log our notification orde , ", notification);

  return (
    <div className="flex flex-col gap-[20px]">
      <div>
        <h1 className="text-[26px] font-[700] text-gray-900">Notification</h1>
        <p className="mt-[5px] text-[13px] text-gray-500">
          Stay updated with your orders and activities
        </p>
      </div>

      <>
        {notification?.map((item) => (
          <div className="flex items-center justify-between rounded-[14px] border border-gray-200 bg-white p-[18px] transition hover:shadow-sm">
            <div className="flex gap-5">
              <span className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-full bg-gray-100">
                <Box size={20} className="text-gray-700" />
              </span>

              <div className="flex flex-col gap-1">
                <h1 className="text-[14px] font-[600] text-gray-900">
                  Order{" "}
                  <span className="text-gray-500">{item.packageNumber}</span> is
                  in transit
                </h1>

                <h2 className="text-[13px] leading-[20px] text-gray-500">
                  Your order is on its way — estimated delivery Dec 18.
                </h2>

                <h3 className="mt-[3px] text-[12px] font-[500] text-blue-600">
                  Status: {item.processing}
                </h3>
              </div>
            </div>

            <div>
              <span className="block h-[8px] w-[8px] rounded-full bg-blue-500"></span>
            </div>
          </div>
        ))}
      </>
    </div>
  );
}
