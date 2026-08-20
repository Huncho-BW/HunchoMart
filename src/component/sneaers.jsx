import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import FilterSide from "../pages/Filter";
import BrandCard from "../pages/BrandCard";

export default function Sneaker() {
  const [selectedValue, setSelectionValue] = useState({
    brand: [],
    price: {
      min: null,
      max: null,
    },
    color: [],
    size: [],
    title: "",
    sort: "",
  });

  const [page, setPage] = useState(1);

  const limit = 12;

  // Fetch Sneakers
  const getSneakerData = async () => {
    const response = await axios.get(
      "https://huncho-mart-api.onrender.com/api/products",
      {
        params: {
          categories: "fashion",

          brand: selectedValue.brand.join(",") || undefined,

          title: selectedValue.title || undefined,

          minPrice: selectedValue.price.min ?? undefined,

          maxPrice: selectedValue.price.max ?? undefined,

          size: selectedValue.size.join(",") || undefined,

          color: selectedValue.color.join(",") || undefined,

          sort: selectedValue.sort || undefined,

          page,
          limit,
        },
      },
    );

    return response.data;
  };

  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ["sneakers", page, selectedValue],

    queryFn: getSneakerData,

    placeholderData: (previousData) => previousData,
  });

  console.log("SNEAKER DATA:", data);

  const sneakerData = data?.products ?? [];

  const pagination = data?.pagination;

  const totalProducts = pagination?.totalProducts ?? 0;

  const totalPages = pagination?.totalPages ?? 1;

  const currentPage = pagination?.page ?? page;

  // Reset page when filter changes
  const handleFilterChange = (value) => {
    setSelectionValue(value);
    setPage(1);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        Loading sneaker products...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        Failed to load sneaker products.
      </div>
    );
  }

  return (
    <div className="flex flex-col px-[24px] py-[40px]">
      {/* Breadcrumb */}
      <div className="flex gap-2">
        <h1 className="text-[10px] text-[#8A8580]">Home</h1>

        <h1 className="text-[12px] text-[#0C0C0C]">SNEAKERS</h1>
      </div>

      {/* Header */}
      <div className="flex justify-between">
        <div>
          <h1 className="text-[30px] topHeader text-[#0C0C0C]">ALL Product</h1>

          <span className="text-[14px] text-[#8A8580]">
            {totalProducts} item
          </span>
        </div>
      </div>

      {/* Category Layout */}
      <div className="CatLayout flex-col">
        {/* Filter */}
        <div>
          <FilterSide
            filterData={sneakerData}
            setSelectionValue={handleFilterChange}
            selectedValue={selectedValue}
          />
        </div>

        {/* Products */}
        <div className="catDisplay">
          {sneakerData.length > 0 ? (
            sneakerData.map((item) => (
              <BrandCard key={item.id} product={item} />
            ))
          ) : (
            <p>No sneaker products found.</p>
          )}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          disabled={currentPage === 1 || isFetching}
          onClick={() => {
            setPage((prev) => prev - 1);
          }}
          className="px-4 py-2 border rounded disabled:opacity-40"
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages || isFetching}
          onClick={() => {
            setPage((prev) => prev + 1);
          }}
          className="px-4 py-2 border rounded disabled:opacity-40"
        >
          Next
        </button>
      </div>

      {isFetching && (
        <p className="text-center mt-3 text-sm text-gray-500">
          Updating products...
        </p>
      )}
    </div>
  );
}
