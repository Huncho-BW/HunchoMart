import React from "react";
import BrandCard from "./BrandCard";
import { product } from "../data/product";
export default function Trading() {
  const trendData = product.productBeauty;

  return (
    <div className=" p-[40px] mt-[20px]">
      <h1 className="text-[32px] font-[600] mb-[20px]">Trading</h1>
      <div className="flex gap-[20px]">
        {trendData.map((item) => (
          <BrandCard />
        ))}
      </div>
    </div>
  );
}
