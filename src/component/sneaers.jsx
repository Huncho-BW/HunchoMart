import React from "react";
import FilterSide from "../pages/Filter";
import BrandCard from "../pages/BrandCard";
import { product } from "../data/product";
import { useState } from "react";
export default function Sneaker() {
  const sneakerData = product.productSneakers;

  const [selectedValue, setSelectionValue] = useState({
    brand: [],
    price: { min: null, max: null },
    color: [],
    size: [],
  });
  return (
    <div className="CatLayout">
      <div>
        <FilterSide
          filterData={sneakerData}
          setSelectionValue={setSelectionValue}
          selectedValue={selectedValue}
        />
      </div>
      <div>
        {sneakerData.map((item) => (
          <BrandCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
