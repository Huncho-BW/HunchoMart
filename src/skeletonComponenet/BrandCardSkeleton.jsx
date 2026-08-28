import React from "react";

export default function BrandSke() {
  return (
    <div className="tranding overflow-hidden">
      {/* Image */}
      <div className="h-[250px] w-full animate-pulse bg-[#E5E5E5]" />

      {/* Content */}
      <div className="flex flex-col gap-1 bg-[#fff] p-3">
        {/* Product title */}
        <div className="h-[10px] w-[45%] animate-pulse rounded bg-[#E5E5E5]" />

        {/* Brand */}
        <div className="h-[14px] w-[60%] animate-pulse rounded bg-[#E5E5E5]" />

        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="h-[10px] w-[55px] animate-pulse rounded bg-[#E5E5E5]" />
          <div className="h-[10px] w-[25px] animate-pulse rounded bg-[#E5E5E5]" />
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <div className="h-[16px] w-[55px] animate-pulse rounded bg-[#E5E5E5]" />
          <div className="h-[12px] w-[45px] animate-pulse rounded bg-[#E5E5E5]" />
          <div className="ml-auto h-[10px] w-[35px] animate-pulse rounded bg-[#E5E5E5]" />
        </div>
      </div>
    </div>
  );
}
