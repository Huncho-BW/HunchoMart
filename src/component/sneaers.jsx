import React from "react";
import FilterSide from "../pages/Filter";
import BrandCard from "../pages/BrandCard";
import { product } from "../data/product";
export default function Sneaker() {
  const sneakerData = product.productSneakers;
  return (
    <div className="CatLayout">
      <div>
        <FilterSide filterData={sneakerData} />
      </div>
      <div>
        {sneakerData.map((item) => (
          <BrandCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
