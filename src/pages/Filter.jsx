import React, { useState } from "react";

export default function FilterSide({
  filterData,
  setSelectionValue,
  selectedValue,
}) {
  const result = filterData;
  console.log("result", result);

  const priceRange = [
    {
      label: "Under ₦10,000",
      min: 0,
      max: 10000,
    },
    {
      label: "₦10,000 - ₦50,000",
      min: 10000,
      max: 50000,
    },
    {
      label: "₦50,000 - ₦100,000",
      min: 50000,
      max: 100000,
    },
    {
      label: "Above ₦100,000",
      min: 100000,
      max: Infinity,
    },
  ];

  let brandCate = [
    ...new Set(
      result?.map((item) => {
        return item.brand;
      }),
    ),
  ];

  let colorCate = [...new Set(result?.flatMap((item) => item.colors))];

  let sizeCate = [...new Set(result?.flatMap((item) => item?.sizes))];

  return (
    <div className="filter p-3">
      <div>
        <h1>filter</h1>
        <div>
          <h1>categories</h1>
        </div>
        <div className="w-[100%] border px-[8px] py-[6px] rounded-lg ">
          <input
            className="w-[100%]"
            type="text"
            placeholder="search"
            name=""
            id=""
          />
        </div>
        <div className=" flex flex-col max-h-[300px] overflow-hidden overflow-y-auto ">
          <h1>Brand</h1>

          {brandCate.map((item) => (
            <div className="flex  items-center">
              <input
                type="checkbox"
                checked={selectedValue.brand.includes(item)}
                name=""
                id=""
                value={item}
                onChange={(e) => {
                  const value = e.target.value;
                  setSelectionValue((prev) => ({
                    ...prev,
                    brand: e.target.checked
                      ? [...prev.brand, value]
                      : prev.brand.filter((brand) => brand !== value),
                  }));
                }}
              />

              <h1>{item}</h1>
            </div>
          ))}
        </div>
        <div className=" flex flex-col max-h-[300px] overflow-hidden overflow-y-auto ">
          <h1>Prices</h1>
          {priceRange.map((item) => (
            <>
              <div>
                <h1>{item.label}</h1>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={
                    selectedValue.price.min === item.min &&
                    selectedValue.price.max === item.max
                  }
                  value={item.label}
                  onChange={(e) => {
                    const value = e.target.value;
                    setSelectionValue((prev) => ({
                      ...prev,
                      price: {
                        min: item.min,
                        max: item.max,
                      },
                    }));
                  }}
                />
                <h1>
                  {item.min} - {item.max}
                </h1>
              </div>
            </>
          ))}
        </div>
        <div className=" flex flex-col max-h-[300px] overflow-hidden overflow-y-auto ">
          <h1>Color</h1>
          {colorCate?.map((color) => (
            <div>
              <input
                type="checkbox"
                name=""
                id=""
                checked={selectedValue.color.includes(color)}
                value={color}
                onChange={(e) => {
                  const value = e.target.value;
                  setSelectionValue((prev) => ({
                    ...prev,
                    color: e.target.checked
                      ? [...prev.color, value]
                      : prev.color.filter((color) => color !== value),
                  }));
                }}
              />
              <h1>{color}</h1>
            </div>
          ))}
        </div>
        <div className=" flex flex-col max-h-[300px] overflow-hidden overflow-y-auto ">
          <h1>size</h1>
          {sizeCate?.map((size) => (
            <div>
              <input
                type="checkbox"
                name=""
                id=""
                value={size}
                checked={selectedValue.size.includes(size)}
                onChange={(e) => {
                  const value = e.target.value;
                  setSelectionValue((prev) => ({
                    ...prev,
                    size: e.target.checked
                      ? [...prev.size, value]
                      : prev.size.filter((size) => size !== value),
                  }));
                }}
              />
              <h1>{size}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
