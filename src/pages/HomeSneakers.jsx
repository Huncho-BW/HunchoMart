import React from "react";
import BrandCard from "./BrandCard";
import { CategoriesApi } from "../Api/CategoriesApi";
import { useQuery } from "@tanstack/react-query";
export default function HomeSneankers() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", "sneakers"],
    queryFn: () => CategoriesApi("mens-shoes"),
    retry: 5,

    retryDelay: 10 * 60 * 1000,
  });

  console.log("log data in sneaker", data);

  const sneakers = data ?? [];
  return (
    <div className=" ">
      <h1 className="text-[32px] font-[600] mb-[20px]">Sneakers</h1>
      <div className="flex gap-[20px] overflow-hidden overflow-x-auto scrollbar-hide">
        {sneakers.map((item) => (
          <BrandCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
