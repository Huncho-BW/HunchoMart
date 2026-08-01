import React from "react";
import FilterSide from "../pages/Filter";
import BrandCard from "../pages/BrandCard";
export default function Sneaker() {
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
