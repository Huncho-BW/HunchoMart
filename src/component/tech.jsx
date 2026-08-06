import React from "react";
import FilterSide from "../pages/Filter";
import BrandCard from "../pages/BrandCard";
import { product } from "../data/product";
export default function Tech() {
  const techData = product.productTech;
  return (
    <div className="CatLayout">
      <div>
        <FilterSide filterData={techData} />
      </div>
      <div>
        {techData.map((item) => (
          <BrandCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
