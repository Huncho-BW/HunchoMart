import React from "react";
import BrandCard from "./BrandCard";
import { product } from "../data/product";
import { Snail } from "lucide-react";
export default function HomeSneankers() {
  const sneakers = product.productSneakers;
  return (
    <div className=" p-[40px] mt-[20px]">
      <h1 className="text-[32px] font-[600] mb-[20px]">Sneakers</h1>
      <div className="flex gap-[20px] overflow-hidden overflow-x-auto scrollbar-hide">
        {sneakers.map((item) => (
          <BrandCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
