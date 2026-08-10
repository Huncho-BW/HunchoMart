import React from "react";
import FilterSide from "../pages/Filter";
import ProductCard from "../pages/ProductCard";
import { product } from "../data/product";
import { useState } from "react";
import BrandCard from "../pages/BrandCard";
export default function Fashion() {
  const [selectedValue, setSelectionValue] = useState({
    brand: [],
    price: { min: null, max: null },
    color: [],
    size: [],
  });
  const fashionData = product.productFashion;
  return (
    <div className="CatLayout">
      <div>
        <FilterSide
          setSelectionValue={setSelectionValue}
          selectedValue={selectedValue}
          filterData={fashionData}
        />
      </div>

      <div>
        {fashionData.map((item) => (
          <BrandCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
