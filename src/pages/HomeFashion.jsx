import React from "react";
import BrandCard from "./BrandCard";
import { product } from "../data/product";
export default function HomeFashion() {
  const fashionData = product.productFashion;
  return (
    <div className=" ">
      <h1 className="text-[32px] font-[600] mb-[20px]">Fashion</h1>
      <div className="flex gap-[20px] overflow-hidden overflow-x-auto scrollbar-hide">
        {fashionData.map((item) => (
          <BrandCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
