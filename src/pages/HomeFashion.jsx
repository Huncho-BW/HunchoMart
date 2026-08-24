import React from "react";
import BrandCard from "./BrandCard";
import { CategoriesApi } from "../Api/CategoriesApi";
import { useQuery } from "@tanstack/react-query";
export default function HomeFashion() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", "fashion"],
    queryFn: () => CategoriesApi("fashion"),
    retry: 5,

    retryDelay: 10 * 60 * 1000,
  });

  console.log("log data in fashion", data);
  const fashionData = data ?? [];

  console.log("log out fashion data", fashionData);
  return (
    <div className=" ">
      <span className="text-[10px] text-[#B8965A] text-[DM Mono] tracking-[0.2em] font-[500]">
        Fashion is Beauty
      </span>
      <h1 className="text-[32px] topHeader text-[#0C0C0C] font-[600] mb-[20px]">
        Fashion
      </h1>
      <div className="flex gap-[20px] overflow-hidden overflow-x-auto scrollbar-hide">
        {data?.map((item) => (
          <BrandCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
