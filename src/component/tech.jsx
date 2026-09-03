import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { ChevronUp, LayoutGrid, Logs } from "lucide-react";
import FilterSide from "../pages/Filter";
import BrandCard from "../pages/BrandCard";
import LayoutCard from "./LayoutCard";
import { useSearchParams } from "react-router-dom";
export default function Tech() {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [displayMode, setDisplayMode] = useState("grid");
  const [searchParams] = useSearchParams();
  const urlSearch = searchParams.get("search" || "");

  // Search input state
  const [searchInput, setSearchInput] = useState(urlSearch);

  const sortOptions = [
    { label: "Featured", value: "" },
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
    { label: "Newest", value: "newest" },
    { label: "Top Rated", value: "rating" },
  ];

  const [selectedValue, setSelectionValue] = useState({
    brand: [],
    price: {
      min: null,
      max: null,
    },
    color: [],
    size: [],
    rating: null,
    title: "",
    sort: "",
  });

  const [page, setPage] = useState(1);

  const limit = 12;

  // --------------------------------
  // SEARCH DEBOUNCE
  // --------------------------------
  useEffect(() => {
    const timer = setTimeout(() => {
      setSelectionValue((prev) => ({
        ...prev,
        title: searchInput,
      }));

      setPage(1);
    }, 400);

    return () => clearTimeout(timer);
  }, [searchInput]);

  // --------------------------------
  // FETCH TECH PRODUCTS
  // --------------------------------
  const getTechData = async () => {
    const response = await axios.get(
      "https://huncho-mart-api.onrender.com/api/products",
      {
        params: {
          categories: "tech",

          brand: selectedValue.brand.join(",") || undefined,

          title: selectedValue.title || undefined,

          minPrice: selectedValue.price.min ?? undefined,

          maxPrice: selectedValue.price.max ?? undefined,

          size: selectedValue.size.join(",") || undefined,

          color: selectedValue.color.join(",") || undefined,

          sort: selectedValue.sort || undefined,

          rating: selectedValue.rating || undefined,

          page,

          limit,
        },
      },
    );

    return response.data;
  };

  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ["tech", page, selectedValue],

    queryFn: getTechData,

    placeholderData: (previousData) => previousData,
  });

  console.log("Tech API:", data);

  // --------------------------------
  // PRODUCTS
  // --------------------------------
  const techData = data?.products ?? [];

  // --------------------------------
  // PAGINATION
  // --------------------------------
  const pagination = data?.pagination;

  const totalProducts = pagination?.totalProducts ?? 0;

  const totalPages = pagination?.totalPages ?? 1;

  const currentPage = pagination?.page ?? page;

  // --------------------------------
  // FILTER CHANGE
  // --------------------------------
  const handleFilterChange = (value) => {
    setSelectionValue(value);
    setPage(1);
  };

  // --------------------------------
  // LOADING
  // --------------------------------
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        Loading tech products...
      </div>
    );
  }

  // --------------------------------
  // ERROR
  // --------------------------------
  if (isError) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        Failed to load tech products.
      </div>
    );
  }

  return (
    <div className="flex flex-col px-[24px] py-[40px]">
      {/* Breadcrumb */}
      <div className="flex gap-2">
        <h1 className="text-[10px] text-[#8A8580]">Home</h1>

        <h1 className="text-[12px] text-[#0C0C0C]">Tech</h1>
      </div>

      {/* Header */}
      <div className="flex justify-between">
        <div>
          <h1 className="text-[30px] topHeader text-[#0C0C0C]">ALL Products</h1>

          <span className="text-[14px] text-[#8A8580]">
            {totalProducts} items
          </span>
        </div>
      </div>

      {/* Category Layout */}
      <div>
        {/* Sort + Display Mode */}
        <div className="flex items-center justify-end w-full gap-5">
          {/* Sort */}
          <div className="flex items-center">
            <div className="relative">
              <div
                onClick={() => setDropdownMenu((prev) => !prev)}
                className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2.5 bg-white cursor-pointer"
              >
                <span className="text-sm text-gray-500">Sort:</span>

                <span className="text-sm font-semibold text-gray-800">
                  {sortOptions.find((item) => item.value === selectedValue.sort)
                    ?.label || "Featured"}
                </span>

                <span
                  className={`transition-transform duration-300 ${
                    dropdownMenu ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <ChevronUp />
                </span>
              </div>

              {dropdownMenu && (
                <div className="absolute right-0 top-full mt-2 z-50 w-[200px] rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
                  {sortOptions.map((item) => (
                    <div
                      key={item.value}
                      onClick={() => {
                        setSelectionValue((prev) => ({
                          ...prev,
                          sort: item.value,
                        }));

                        setPage(1);
                        setDropdownMenu(false);
                      }}
                      className="px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Display Mode */}
          <div className="flex gap-2 border">
            <button
              onClick={() => setDisplayMode("grid")}
              className={
                displayMode === "grid"
                  ? "px-[4px] py-[4px] bg-black text-white"
                  : "px-[4px] py-[4px]"
              }
            >
              <LayoutGrid />
            </button>

            <button
              onClick={() => setDisplayMode("block")}
              className={
                displayMode === "block"
                  ? "px-[4px] py-[4px] bg-black text-white"
                  : "px-[4px] py-[4px]"
              }
            >
              <Logs />
            </button>
          </div>
        </div>

        {/* Filter + Products */}
        <div className="CatLayout flex-col mt-5">
          {/* Filter */}
          <div>
            <FilterSide
              category="tech"
              setSelectionValue={handleFilterChange}
              selectedValue={selectedValue}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
            />
          </div>

          {/* Products */}
          <div>
            {/* GRID */}
            {displayMode === "grid" ? (
              <div className="catDisplay">
                {techData.length > 0 ? (
                  techData.map((item) => (
                    <BrandCard key={item.id} product={item} />
                  ))
                ) : (
                  <p>No tech products found.</p>
                )}
              </div>
            ) : (
              /* LIST */
              <div className="flex flex-col gap-[20px]">
                {techData.length > 0 ? (
                  techData.map((item) => (
                    <LayoutCard key={item.id} product={item} />
                  ))
                ) : (
                  <p>No tech products found.</p>
                )}
              </div>
            )}
          </div>
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

      {/* Fetching indicator */}
      {isFetching && (
        <p className="text-center mt-3 text-sm text-gray-500">
          Updating products...
        </p>
      )}
    </div>
  );
}
