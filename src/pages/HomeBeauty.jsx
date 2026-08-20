import React from "react";
import BrandCard from "./BrandCard";

import { CategoriesApi } from "../Api/CategoriesApi";
import { useQuery } from "@tanstack/react-query";
export default function HomeBueaty() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", "beauty"],
    queryFn: () => CategoriesApi("beauty"),
    retry: 5,

    retryDelay: 10 * 60 * 1000,
  });

  console.log("log data in Beauty", data);

  const BeautyProduct = data ?? [];
  return (
    <div className="  ">
      <h1 className="text-[32px] font-[600] mb-[20px]">Beauty</h1>
      <div className="flex gap-[20px] overflow-hidden overflow-x-auto scrollbar-hide">
        {BeautyProduct.map((item) => (
          <BrandCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
