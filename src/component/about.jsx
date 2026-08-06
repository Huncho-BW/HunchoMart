import React from "react";
import FilterSide from "../pages/Filter";
import ProductCard from "../pages/ProductCard";
import { product } from "../data/product";
import BrandCard from "../pages/BrandCard";
export default function Fashion() {
  const fashionData = product.productFashion;
  return (
    <div className="CatLayout">
      <div>
        <FilterSide filterData={fashionData} />
      </div>

      <div>
        {fashionData.map((item) => (
          <BrandCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
