import React from "react";
import BrandCard from "./BrandCard";
import { product } from "../data/product";
export default function HomeFashion() {
  const fashionData = product.productFashion;
  return (
    <div className=" p-[40px] mt-[20px]">
      <h1 className="text-[32px] font-[600] mb-[20px]">Fashion</h1>
      <div className="flex gap-[20px]">
        {fashionData.map((item) => (
          <BrandCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
