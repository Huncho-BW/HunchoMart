import React from "react";
import BrandCard from "./BrandCard";
import { product } from "../data/product";
export default function Trading() {
  const trendData = product.productFashion;

  return (
    <div className=" p-[40px] mt-[20px]">
      <span className="text-[10px] text-[#B8965A] text-[DM Mono] tracking-[0.2em] font-[500]">
        What's hot
      </span>
      <h1 className="text-[32px] topHeader text-[#0C0C0C] font-[600] mb-[20px]">
        Trading
      </h1>
      <div className="flex gap-[20px] overflow-hidden overflow-x-auto scrollbar-hide">
        {trendData.map((item) => (
          <BrandCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
