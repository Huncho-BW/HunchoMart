import React from "react";

export default function FilterSide() {
  return (
    <div className="filter p-3">
      <div>
        {" "}
        <h1>filter</h1>
        <div>
          <h1>categories</h1>
        </div>
        <div>
          <h1>Brand</h1>
          <div>
            <input type="checkbox" name="" id="" />

            <h1>nike</h1>
          </div>
        </div>
        <div>
          <h1>Prices</h1>
          <div>
            <input type="checkbox" name="" id="" />
            <h1>$300 - $600</h1>
          </div>
        </div>
        <div>
          <h1>size</h1>
          <div>
            <input type="checkbox" name="" id="" />
            <h1>xl</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
