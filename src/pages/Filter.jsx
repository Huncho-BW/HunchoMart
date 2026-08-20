import React from "react";

export default function FilterSide({
  filterData = [],
  setSelectionValue,
  selectedValue,
}) {
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

  // Brands
  const brandCate = [
    ...new Set(filterData.map((item) => item?.brand).filter(Boolean)),
  ];

  // Selected brands
  const selectedBrands = brandCate.filter((brand) =>
    selectedValue.brand.includes(brand),
  );

  // Unselected brands
  const unselectedBrands = brandCate.filter(
    (brand) => !selectedValue.brand.includes(brand),
  );

  // Colors
  const colorCate = [
    ...new Set(filterData.flatMap((item) => item?.color ?? []).filter(Boolean)),
  ];

  // Sizes
  const sizeCate = [
    ...new Set(filterData.flatMap((item) => item?.size ?? []).filter(Boolean)),
  ];

  return (
    <div className="filter p-3">
      <div>
        <h1>Filter</h1>

        {/* Categories */}
        <div>
          <h1>Categories</h1>
        </div>

        {/* Search */}
        <div className="w-[100%] border px-[8px] py-[6px] rounded-lg">
          <input
            className="w-[100%]"
            type="text"
            placeholder="Search"
            value={selectedValue.title}
            onChange={(e) => {
              setSelectionValue((prev) => ({
                ...prev,
                title: e.target.value,
              }));
            }}
          />
        </div>

        {/* BRAND */}
        <div className="flex flex-col max-h-[300px] overflow-hidden overflow-y-auto">
          <h1>Brand</h1>

          {/* SELECTED BRANDS */}
          {selectedBrands.length > 0 && (
            <div className="mb-2">
              <h2 className="text-[12px] text-[#8A8580] mb-1">Selected</h2>

              {selectedBrands.map((brand) => (
                <div className="flex items-center" key={brand}>
                  <input
                    type="checkbox"
                    checked={true}
                    value={brand}
                    onChange={(e) => {
                      const value = e.target.value;

                      setSelectionValue((prev) => ({
                        ...prev,

                        brand: prev.brand.filter((item) => item !== value),
                      }));
                    }}
                  />

                  <h1>{brand}</h1>
                </div>
              ))}
            </div>
          )}

          {/* OTHER BRANDS */}
          <div>
            {selectedBrands.length > 0 && (
              <h2 className="text-[12px] text-[#8A8580] mb-1">Other Brands</h2>
            )}

            {unselectedBrands.map((brand) => (
              <div className="flex items-center" key={brand}>
                <input
                  type="checkbox"
                  checked={false}
                  value={brand}
                  onChange={(e) => {
                    const value = e.target.value;

                    setSelectionValue((prev) => ({
                      ...prev,

                      brand: [...prev.brand, value],
                    }));
                  }}
                />

                <h1>{brand}</h1>
              </div>
            ))}
          </div>
        </div>

        {/* PRICE */}
        <div className="flex flex-col max-h-[300px] overflow-hidden overflow-y-auto">
          <h1>Prices</h1>

          {priceRange.map((item) => {
            const isSelected =
              selectedValue.price.min === item.min &&
              selectedValue.price.max === item.max;

            return (
              <div key={item.label} className="flex items-center">
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={(e) => {
                    setSelectionValue((prev) => ({
                      ...prev,

                      price: e.target.checked
                        ? {
                            min: item.min,
                            max: item.max === Infinity ? null : item.max,
                          }
                        : {
                            min: null,
                            max: null,
                          },
                    }));
                  }}
                />

                <h1>{item.label}</h1>
              </div>
            );
          })}
        </div>

        {/* COLOR */}
        <div className="flex flex-col max-h-[300px] overflow-hidden overflow-y-auto">
          <h1>Color</h1>

          {colorCate.map((color) => (
            <div className="flex items-center" key={color}>
              <input
                type="checkbox"
                checked={selectedValue.color.includes(color)}
                value={color}
                onChange={(e) => {
                  const value = e.target.value;

                  setSelectionValue((prev) => ({
                    ...prev,

                    color: e.target.checked
                      ? [...prev.color, value]
                      : prev.color.filter((item) => item !== value),
                  }));
                }}
              />

              <h1>{color}</h1>
            </div>
          ))}
        </div>

        {/* SIZE */}
        <div className="flex flex-col max-h-[300px] overflow-hidden overflow-y-auto">
          <h1>Size</h1>

          {sizeCate.map((size) => (
            <div className="flex items-center" key={size}>
              <input
                type="checkbox"
                value={size}
                checked={selectedValue.size.includes(size)}
                onChange={(e) => {
                  const value = e.target.value;

                  setSelectionValue((prev) => ({
                    ...prev,

                    size: e.target.checked
                      ? [...prev.size, value]
                      : prev.size.filter((item) => item !== value),
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
