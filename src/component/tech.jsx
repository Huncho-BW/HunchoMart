import React from "react";
import FilterSide from "../pages/Filter";
import BrandCard from "../pages/BrandCard";
import { product } from "../data/product";
import { useState } from "react";
export default function Tech() {
  const techData = product.productTech;
  const [selectedValue, setSelectionValue] = useState({
    brand: [],
    price: { min: null, max: null },
    color: [],
    size: [],
  });
  return (
    <div className="flex flex-col px-[24px] py-[40px]">
      <div className="flex gap-2">
        <h1 className="text-[10px] text-[#8A8580]">Home</h1>
        <h1 className="text-[12px] text-[#0C0C0C]"> TECH </h1>
      </div>

      <div className="flex justify-between">
        <div>
          <h1 className="text-[30px topHeader] text-[#0C0C0C] ">ALL Product</h1>
          <span className="text-[14px] text-[#8A8580]">200 item</span>
        </div>
      </div>

      <div className="CatLayout  flex-col">
        <div>
          <FilterSide
            filterData={techData}
            setSelectionValue={setSelectionValue}
            selectedValue={selectedValue}
          />
        </div>
        <div className="catDisplay">
          {techData.map((item) => (
            <BrandCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
