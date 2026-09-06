import React, { useState } from "react";
import BrandCard from "./BrandCard";
import { motion } from "motion/react";
import { CategoriesApi } from "../Api/CategoriesApi";
import BrandSke from "../skeletonComponenet/BrandCardSkeleton";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HomeBueaty() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", "beauty"],
    queryFn: () => CategoriesApi("beauty"),
    retry: 5,
    retryDelay: 10 * 60 * 1000,
  });
  const [showArrows, setShowArrows] = useState(false);
  console.log("log data in Beauty", data);

  const BeautyProduct = [...(data ?? [])]
    .sort(() => Math.random() - 0.5)
    .slice(0, 14);

  // Move cards to the right
  const moveRight = () => {
    document.querySelector(".cards").scrollBy({
      left: 500,
      behavior: "smooth",
    });
  };

  // Move cards to the left
  const moveLeft = () => {
    document.querySelector(".cards").scrollBy({
      left: -500,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="relative "
      >
        <span className="text-[10px] text-[#B8965A] tracking-[0.2em] font-[500]">
          Tech is Future
        </span>

        <h1 className="text-[32px] topHeader text-[#0C0C0C] font-[600] mb-[20px]">
          Beauty
        </h1>
      </motion.div>

      {/* Cards */}
      <div
        onMouseEnter={() => setShowArrows(true)}
        onMouseLeave={() => setShowArrows(false)}
        className="relative "
      >
        <div className="cards flex gap-[20px] overflow-x-auto scrollbar-hide">
          {isLoading ? (
            <BrandSke />
          ) : isError ? (
            <p>Failed to load products.</p>
          ) : (
            BeautyProduct.map((item) => (
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

        {/* Arrows */}
        <div
          className={`
    flex justify-between absolute top-1/2 -translate-y-1/2 w-full
    ${showArrows ? "lg:flex" : "lg:hidden"}
  `}
        >
          {/* Left Arrow */}
          <div onClick={moveLeft} className="borderArrow ">
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
      </div>
    </div>
  );
}
