import React from "react";
import BrandCard from "./BrandCard";
import { CategoriesApi } from "../Api/CategoriesApi";
import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";
import BrandSke from "../skeletonComponenet/BrandCardSkeleton";

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
    <div>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
      >
        <span className="text-[10px] text-[#B8965A] tracking-[0.2em] font-[500]">
          Fashion is Beauty
        </span>

        <h1 className="text-[32px] topHeader text-[#0C0C0C] font-[600] mb-[20px]">
          Fashion
        </h1>
      </motion.div>

      {/* Products */}
      <div className="flex gap-[20px] overflow-hidden overflow-x-auto scrollbar-hide">
        {isLoading ? (
          Array.from({ length: 5 }).map((_, index) => <BrandSke key={index} />)
        ) : isError ? (
          <p>Failed to load products.</p>
        ) : (
          fashionData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
            >
              <BrandCard product={item} />
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
