import React from "react";
import BrandCard from "./BrandCard";
import { product } from "../data/product";
import { motion } from "motion/react";

export default function Trading() {
  const trendData = product.productFashion;

  return (
    <div className="">
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
          Trading
        </h1>
      </motion.div>

      <div className="flex gap-[20px] overflow-hidden overflow-x-auto scrollbar-hide">
        {trendData.map((item) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2,
              delay: 1,
            }}
          >
            <BrandCard key={item.id} product={item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
