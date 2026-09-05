import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { ChevronUp } from "lucide-react";
import FilterSide from "../pages/Filter";
import BrandCard from "../pages/BrandCard";
import { LayoutGrid } from "lucide-react";
import { Logs } from "lucide-react";
import LayoutCard from "./LayoutCard";
import { useSearchParams } from "react-router-dom";
import { BsFilterSquareFill } from "react-icons/bs";
import * as Dialog from "@radix-ui/react-dialog";

import BrandSke from "../skeletonComponenet/BrandCardSkeleton";
import LayoutSke from "../skeletonComponenet/LayoutCardSkeleton";

export default function Fashion() {
  const [searchParams] = useSearchParams();
  const urlSearch = searchParams.get("search" || "");

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [displayMode, setDisplayMode] = useState("grid");
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

  const [page, setPage] = useState(1);

  const limit = 12;

  // Fetch fashion products
  const getFashionData = async () => {
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
          rating: selectedValue.rating || undefined,
          page,
          limit,
        },
      },
    );

    return response.data;
  };

  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ["fashion", page, selectedValue],
    queryFn: getFashionData,
    placeholderData: (previousData) => previousData,
  });

  console.log("Fashion API:", data);

  // Products
  const fashionData = data?.products ?? [];

  // Pagination data from backend
  const pagination = data?.pagination;

  const totalProducts = pagination?.totalProducts ?? 0;
  const totalPages = pagination?.totalPages ?? 1;
  const currentPage = pagination?.page ?? page;

  // Whenever filter changes,
  // go back to page 1
  const handleFilterChange = (value) => {
    setSelectionValue(value);
    setPage(1);
  };

  if (isError) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <p> Failed to load fashion products.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col py-[40px]">
      {/* Breadcrumb */}
      <div className="flex gap-2 px-[40px]">
        <h1 className="text-[10px] text-[#8A8580]">Home</h1>

        <h1 className="text-[12px] text-[#0C0C0C]">Fashion</h1>
      </div>

      {/* Header */}
      <div className="flex justify-between px-[40px]">
        <div>
          <h1 className="text-[30px] topHeader text-[#0C0C0C]">ALL Product</h1>

          <span className="text-[14px] text-[#8A8580]">
            {totalProducts} item
          </span>
        </div>
      </div>

      {/* Category Layout */}
      <div className="cateLayout-head">
        <div className="cate-layout-subHead">
          {/* Mobile Filter */}
          <div className="moblieFilter">
            <Dialog.Root>
              <Dialog.Trigger>
                <BsFilterSquareFill size={24} />
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay />

                <Dialog.Content className="filter-drawer">
                  <FilterSide
                    category="fashion"
                    setSelectionValue={handleFilterChange}
                    selectedValue={selectedValue}
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                  />
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>

          <div className="cate-sort">
            {/* Sort */}
            <div className="flex items-center">
              <div className="relative">
                <div
                  onClick={() => setDropdownMenu((prev) => !prev)}
                  className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2.5 bg-white cursor-pointer"
                >
                  <span className="text-sm text-gray-500">Sort:</span>

                  <span className="text-sm font-semibold text-gray-800">
                    {selectedValue.sort || "Feature"}
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
                <LayoutGrid style={{ stroke: "0.5px" }} />
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
        </div>

        {/* Desktop Sort */}
        <div className="sort-Desktop">
          <div className="cate-sort">
            {/* Sort */}
            <div className="flex items-center">
              <div className="relative">
                <div
                  onClick={() => setDropdownMenu((prev) => !prev)}
                  className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2.5 bg-white cursor-pointer"
                >
                  <span className="text-sm text-gray-500">Sort:</span>

                  <span className="text-sm font-semibold text-gray-800">
                    {selectedValue.sort || "Feature"}
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
                <LayoutGrid style={{ stroke: "0.5px" }} />
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
        </div>

        {/* Filter + Products */}
        <div className="CatLayout flex-col mt-5">
          {/* Filter */}
          <div className="filter-head">
            <FilterSide
              category="fashion"
              setSelectionValue={handleFilterChange}
              selectedValue={selectedValue}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
            />
          </div>

          {/* Products */}
          <div>
            {isFetching ? (
              displayMode === "grid" ? (
                <div className="catDisplay">
                  <BrandSke />
                </div>
              ) : (
                <div className="flex flex-col gap-[20px]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <LayoutSke key={index} />
                  ))}
                </div>
              )
            ) : displayMode === "grid" ? (
              <div className="catDisplay">
                {fashionData.length > 0 ? (
                  fashionData.map((item) => (
                    <BrandCard key={item.id} product={item} />
                  ))
                ) : (
                  <p>No fashion products found.</p>
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-[20px]">
                {fashionData.length > 0 ? (
                  fashionData.map((item) => (
                    <LayoutCard key={item.id} product={item} />
                  ))
                ) : (
                  <p>No fashion products found.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-3 mt-8">
        <button
          disabled={currentPage === 1 || isFetching}
          onClick={() => setPage((prev) => prev - 1)}
          className="px-5 py-2.5 rounded-lg border border-black bg-white text-black font-medium transition-all duration-200 hover:bg-black hover:text-white disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-black"
        >
          Previous
        </button>

        <span className="px-4 py-2.5 rounded-lg bg-black text-white font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages || isFetching}
          onClick={() => setPage((prev) => prev + 1)}
          className="px-5 py-2.5 rounded-lg border border-black bg-white text-black font-medium transition-all duration-200 hover:bg-black hover:text-white disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-black"
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
