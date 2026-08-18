import React from "react";
import BrandCard from "./BrandCard";
import { product } from "../data/product";
export default function HomeTech() {
  const techData = product.productTech;
  return (
    <div className=" ">
      <h1 className="text-[32px] font-[600] mb-[20px]">Tech</h1>

      <div className="flex gap-[20px] overflow-hidden overflow-x-auto scrollbar-hide">
        {techData.map((item) => (
          <BrandCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
