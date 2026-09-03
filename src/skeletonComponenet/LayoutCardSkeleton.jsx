import React from "react";

export default function LayoutSke() {
  return (
    <div className="border border-gray-200 bg-[#fff] p-4 overflow-hidden">
      <div className="flex gap-5">
        {/* Image */}
        <div className="w-[200px] h-[200px] shrink-0 bg-gray-200 animate-pulse" />

        {/* Product Info */}
        <div className="flex flex-1 flex-col justify-center gap-3">
          {/* Title */}
          <div className="w-[120px] h-[10px] bg-gray-200 animate-pulse rounded" />

          {/* Brand */}
          <div className="w-[180px] h-[14px] bg-gray-200 animate-pulse rounded" />

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <div
                  key={star}
                  className="w-[10px] h-[10px] bg-gray-200 animate-pulse rounded"
                />
              ))}
            </div>

            <div className="w-[70px] h-[10px] bg-gray-200 animate-pulse rounded" />
          </div>
        </div>

        {/* Price / Discount / Cart */}
        <div className="w-[220px] flex flex-col justify-center gap-3">
          {/* Prices */}
          <div className="flex items-center gap-2">
            <div className="w-[60px] h-[16px] bg-gray-200 animate-pulse rounded" />
            <div className="w-[55px] h-[12px] bg-gray-200 animate-pulse rounded" />
            <div className="w-[35px] h-[12px] bg-gray-200 animate-pulse rounded" />
          </div>

          {/* Add To Cart */}
          <div className="px-4 py-2 flex justify-center">
            <div className="w-[70px] h-[14px] bg-gray-200 animate-pulse rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
