import React from "react";
import BrandCard from "./BrandCard";
import BrandSke from "../skeletonComponenet/BrandCardSkeleton";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";

export default function Trading() {
  const getTrendingData = async () => {
    const response = await axios.get(
      "https://huncho-mart-api.onrender.com/api/products",
      {
        params: {
          limit: 80,
        },
      },
    );

    const products = response?.data?.products ?? [];

    // Shuffle all products
    const shuffledProducts = [...products].sort(() => Math.random() - 0.5);

    // Take only 24 products
    return shuffledProducts.slice(0, 24);
  };

  const {
    data: trendData = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["trending"],
    queryFn: getTrendingData,
  });

  return (
    <div className="">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
      >
        <span className="text-[10px] text-[#B8965A] text-[DM Mono] tracking-[0.2em] font-[500]">
          What's hot
        </span>

        <h1 className="text-[32px] topHeader text-[#0C0C0C] font-[600] mb-[20px]">
          Trending
        </h1>
      </motion.div>

      {/* Content */}
      <div>
        {isLoading ? (
          <BrandSke />
        ) : isError ? (
          <p>Failed to load trending products.</p>
        ) : (
          <div className="flex gap-[20px] overflow-hidden overflow-x-auto scrollbar-hide">
            {trendData.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 2,
                  delay: 1,
                }}
              >
                <BrandCard product={item} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
