import React from "react";
import FilterSide from "../pages/Filter";
import ProductCard from "../pages/ProductCard";

import BrandCard from "../pages/BrandCard";
export default function Fashion() {
  return (
    <div className="CatLayout">
      <div>
        <FilterSide />
      </div>

      <div>
        <BrandCard />
      </div>
    </div>
  );
}
