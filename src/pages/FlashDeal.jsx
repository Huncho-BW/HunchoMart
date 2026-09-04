import React, { useEffect, useState } from "react";
import { CiClock2 } from "react-icons/ci";
import { IoIosFlash } from "react-icons/io";
import { NavLink } from "react-router-dom";
import sneakers from "../assets/sneaker.webp";
import FLSk from "../skeletonComponenet/FlashDealsSkeleton";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { motion, useAnimation } from "motion/react";

export default function FlashDeal() {
  const [timeLeft, setTimeLeft] = useState(0);

  const getFlashData = async () => {
    const result = await axios.get(
      "https://huncho-mart-api.onrender.com/api/products/flash-deals",
    );

    return result?.data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["flashDeal"],
    queryFn: getFlashData,
    retry: 5,
    retryDelay: 1000,
  });

  const flashData = data?.data ?? [];

  console.log("RAW DATA:", data);
  console.log("FLASH DATA:", flashData);

  const endAtTime = data?.endsAt;

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = endAtTime - Date.now();

      setTimeLeft(Math.max(remaining, 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [endAtTime]);

  const hours = Math.floor(timeLeft / (1000 * 60 * 60)) || 0;

  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)) || 0;

  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000) || 0;

  if (isLoading) {
    return (
      <div>
        <FLSk />
      </div>
    );
  }

  if (isError) {
    return <div>Failed to load products.</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
      }}
      className="bg-[#0C0C0C] home"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="flex gap-[20px] mb-[20px]"
      >
        {/* Header */}
        <div className="flex items-center gap-2">
          <div>
            <h1>
              <IoIosFlash color="gold" size={30} />
            </h1>
          </div>

          <div>
            <span className="text-[12px] text-[#8A8580]">Limited Time</span>

            <h1 className="text-[24px] font-[600] text-[#FAF8F5] topHeader">
              Flash Deal
            </h1>
          </div>
        </div>

        {/* Timer */}
        <div className="flex items-center">
          <h1 className="text-[#FAF8F5] flex items-center gap-1">
            <span>
              <CiClock2 color="#8A8580" />
            </span>
            <span className="text-[14px] text-[#8A8580]">ending in</span>
            <span>{String(hours).padStart(2, "0")} </span>{" "}
            <span>{String(minutes).padStart(2, "0")}</span>{" "}
            <span>{String(seconds).padStart(2, "0")}</span>
          </h1>
        </div>
      </motion.div>

      {/* Products */}
      <div className="flex gap-[20px] overflow-hidden overflow-x-auto scrollbar-hide pb-[5px]">
        {flashData.map((item) => (
          <NavLink key={item.id} to={`/product/${item.id}`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2,
                delay: 1,
              }}
              className="flashDeal group overflow-hidden rounded-[14px] border border-[#2A2927] bg-[#181716] transition duration-300 hover:-translate-y-[3px] hover:border-[#B8965A]/50 hover:shadow-lg"
            >
              <div className="relative h-[220px] overflow-hidden bg-[#22201E]">
                <img
                  src={item.images}
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                />

                {/* Flash Badge */}
                <div className="absolute left-[10px] top-[10px] rounded-full bg-[#B8965A] px-[9px] py-[4px]">
                  <h1 className="text-[9px] font-[700] uppercase tracking-[1px] text-white">
                    Flash Deal
                  </h1>
                </div>
              </div>

              <div className="flex flex-col gap-[6px] px-[20px] py-[12px]">
                <h1 className="truncate text-[10px] text-[#8A8580]">
                  {item.title || item.name || "Product"}
                </h1>

                <h1 className="truncate text-[14px] font-[400] text-[#FAF8F5]">
                  {item.brand || "Brand"}
                </h1>

                <div className="flex items-center gap-2">
                  <div>
                    <h1 className="text-[16px] font-[600] text-[#B8965A]">
                      ₦{Number(item?.price || 0).toLocaleString("en-NG")}
                    </h1>
                  </div>

                  <div>
                    <h1 className="text-[12px] font-[700] text-[#555] line-through">
                      ₦{Number(item.oldPrice || 0).toLocaleString("en-NG")}
                    </h1>
                  </div>

                  <div className="ml-auto rounded-[5px] border border-[#2D5A3D]/30 bg-[#2D5A3D]/15 px-[6px] py-[3px]">
                    <h1 className="text-[10px] font-[600] text-[#2D5A3D]">
                      -24%
                    </h1>
                  </div>
                </div>
              </div>
            </motion.div>
          </NavLink>
        ))}
      </div>
    </motion.div>
  );
}
