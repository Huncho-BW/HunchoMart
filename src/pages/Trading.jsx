import React, { useState } from "react";
import BrandCard from "./BrandCard";
import BrandSke from "../skeletonComponenet/BrandCardSkeleton";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Trading() {
  const [showArrows, setShowArrows] = useState(false);

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
    retry: 5,
    retryDelay: 10 * 60 * 1000,
  });

  // Move cards to the right
  const moveRight = () => {
    document.querySelector(".trendingCards").scrollBy({
      left: 500,
      behavior: "smooth",
    });
  };

  // Move cards to the left
  const moveLeft = () => {
    document.querySelector(".trendingCards").scrollBy({
      left: -500,
      behavior: "smooth",
    });
  };

  return (
    <div>
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

      {/* Content + Arrows */}
      <div
        className="relative"
        onMouseEnter={() => setShowArrows(true)}
        onMouseLeave={() => setShowArrows(false)}
      >
        {isLoading ? (
          <BrandSke />
        ) : isError ? (
          <p>Failed to load trending products.</p>
        ) : (
          <div className="trendingCards flex gap-[20px] overflow-x-auto scrollbar-hide">
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

        {/* Arrows */}
        {!isLoading && !isError && (
          <div
            className={`
              flex justify-between
              absolute top-1/2 -translate-y-1/2
              w-full
              ${showArrows ? "lg:flex" : "lg:hidden"}
            `}
          >
            {/* Left Arrow */}
            <div onClick={moveLeft} className="borderArrow">
              <button>
                <ChevronLeft />
              </button>
            </div>

            {/* Right Arrow */}
            <div onClick={moveRight} className="borderArrow">
              <button>
                <ChevronRight />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
