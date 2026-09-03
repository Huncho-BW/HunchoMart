import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { CategoriesApi } from "../Api/CategoriesApi";
export default function FilterSide({
  category,
  setSelectionValue,
  selectedValue,
  searchInput,
  setSearchInput,
}) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["filter-category", category],
    queryFn: () => CategoriesApi(category),
  });

  const result = data ?? [];
  console.log("result", result);

  const priceRange = [
    {
      label: "Under ₦10,000",
      min: "Under",
      max: " ₦10,000",
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

  const ratingRange = [
    {
      id: 1,
      label: "4 Stars & up",
      value: 4,
    },
    {
      id: 2,
      label: "3 Stars & up",
      value: 3,
    },
    {
      id: 3,
      label: "2 Stars & up",
      value: 2,
    },
    {
      id: 4,
      label: "1 Star & up",
      value: 1,
    },
  ];

  let brandCate = [
    ...new Set(
      result?.map((item) => {
        return item.brand;
      }),
    ),
  ];

  let colorCate = [...new Set(result?.flatMap((item) => item.color))];

  let sizeCate = [...new Set(result?.flatMap((item) => item?.size))];

  if (isLoading) {
    return <div>Loading filters...</div>;
  }

  if (isError) {
    return <div>Failed to load filters.</div>;
  }
  return (
    <div className="filter p-3">
      <div>
        <h1>filter</h1>
        <div>
          <h1>categories</h1>
        </div>
        <div className="w-[100%] border px-[8px] py-[6px] rounded-lg ">
          <input
            className="w-[100%] outline-none"
            type="text"
            placeholder="Search products..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>

        {/* SELECTED BRAND */}
        {selectedValue?.brand?.length > 0 && (
          <div>
            <h1>Selected Brand</h1>

            {selectedValue?.brand?.map((brand) => (
              <h1 key={brand}>{brand}</h1>
            ))}
          </div>
        )}

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
                    const value = e.target.checked;
                    setSelectionValue((prev) => ({
                      ...prev,
                      price: value
                        ? {
                            min: item.min,
                            max: item.max,
                          }
                        : {
                            min: null,
                            max: null,
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
        {ratingRange.map((item) => (
          <div key={item.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              value={item.value}
              checked={selectedValue.rating === item.value}
              onChange={(e) => {
                const value = Number(e.target.value);
                setSelectionValue((prev) => ({
                  ...prev,
                  rating: value,
                }));
              }}
            />

            <div className="flex items-center">
              {"★".repeat(item.value)}
              <span className="ml-2">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
