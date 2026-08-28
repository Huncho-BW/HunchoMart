import React from "react";

export default function FLSk() {
  return (
    <div className="bg-[#0C0C0C] home">
      {/* Header Skeleton */}
      <div className="flex gap-[20px] mb-[20px]">
        {/* Flash icon + title */}
        <div className="flex items-center gap-2">
          <div className="h-[30px] w-[30px] rounded-full bg-[#22201E] animate-pulse"></div>

          <div className="flex flex-col gap-[5px]">
            {/* Limited Time */}
            <div className="h-[10px] w-[65px] rounded bg-[#22201E] animate-pulse"></div>

            {/* Flash Deal */}
            <div className="h-[24px] w-[105px] rounded bg-[#22201E] animate-pulse"></div>
          </div>
        </div>

        {/* Timer */}
        <div className="flex items-center">
          <div className="h-[16px] w-[100px] rounded bg-[#22201E] animate-pulse"></div>
        </div>
      </div>

      {/* Products Skeleton */}
      <div className="flex gap-[20px] overflow-hidden overflow-x-auto scrollbar-hide pb-[5px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="flashDeal shrink-0 overflow-hidden rounded-[14px] border border-[#2A2927] bg-[#181716]"
          >
            {/* Image Skeleton */}
            <div className="relative h-[220px] w-full bg-[#22201E] animate-pulse">
              {/* Flash Badge */}
              <div className="absolute left-[10px] top-[10px] h-[20px] w-[65px] rounded-full bg-[#2A2927] animate-pulse"></div>
            </div>

            {/* Product Info Skeleton */}
            <div className="flex flex-col gap-[8px] px-[20px] py-[12px]">
              {/* Product title */}
              <div className="h-[10px] w-[80px] rounded bg-[#2A2927] animate-pulse"></div>

              {/* Brand */}
              <div className="h-[14px] w-[110px] rounded bg-[#2A2927] animate-pulse"></div>

              {/* Price section */}
              <div className="flex items-center gap-2">
                {/* Price */}
                <div className="h-[16px] w-[55px] rounded bg-[#2A2927] animate-pulse"></div>

                {/* Old price */}
                <div className="h-[12px] w-[40px] rounded bg-[#2A2927] animate-pulse"></div>

                {/* Discount */}
                <div className="ml-auto h-[20px] w-[38px] rounded-[5px] bg-[#2A2927] animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
