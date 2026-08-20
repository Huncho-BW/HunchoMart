import React from "react";
import BrandCard from "./BrandCard";
import { product } from "../data/product";
import { CategoriesApi } from "../Api/CategoriesApi";
import { useQuery } from "@tanstack/react-query";
export default function HomeTech() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", "tech"],
    queryFn: () => CategoriesApi("mobile-accessories"),
    retry: 5,

    retryDelay: 10 * 60 * 1000,
  });

  console.log("log data in tech", data);
  const techData = data ?? [];

  console.log("log out tech data", techData);
  return (
    <div className=" ">
      <h1 className="text-[32px] font-[600] mb-[20px]">Tech</h1>

      <div className="flex gap-[20px] overflow-hidden overflow-x-auto scrollbar-hide">
        {techData.map((item) => (
          <BrandCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
