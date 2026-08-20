import React from "react";
import { CiClock2 } from "react-icons/ci";
import { IoIosFlash } from "react-icons/io";
import { NavLink } from "react-router-dom";
import sneakers from "../assets/sneaker.webp";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function FlashDeal() {
  const getFlashData = async () => {
    const result = await axios.get(
      "https://huncho-mart-api.onrender.com/api/products",
    );

    return result?.data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["flashDeal"],
    queryFn: getFlashData,
    retry: 5,
    retryDelay: 1000,
  });

  const flashData = data?.products ?? [];

  console.log("RAW DATA:", data);
  console.log("FLASH DATA:", flashData);

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (isError) {
    return <div>Failed to load products.</div>;
  }

  return (
    <div className="bg-[#0C0C0C] home">
      <div className="flex gap-[20px] mb-[20px]">
        {/* Header */}
        <div className="flex items-center gap-2">
          <div>
            <h1>
              <IoIosFlash size={30} />
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
            05 45 9
          </h1>
        </div>
      </div>

      {/* Products */}
      <div className="flex gap-[20px] overflow-hidden overflow-x-auto scrollbar-hide">
        {flashData.map((item) => (
          <NavLink key={item.id} to={`/product/${item.id}`}>
            <div className="flashDeal">
              <img src={sneakers} alt="" />

              <div className="flex flex-col gap-[5px] px-[20px] py-[10px]">
                <h1 className="text-[10px] text-[#8A8580]">
                  {item.title || item.name || "Product"}
                </h1>

                <h1 className="text-[14px] font-[400] text-[#FAF8F5]">
                  {item.brand || "Brand"}
                </h1>

                <div className="flex gap-2">
                  <div>
                    <h1 className="text-[16px] text-[#B8965A] font-[600]">
                      ${item.price ?? 230}
                    </h1>
                  </div>

                  <div>
                    <h1 className="line-through text-[12px] text-[#555] font-[700]">
                      ${item.oldPrice ?? 250}
                    </h1>
                  </div>

                  <div className="ml-[auto] border p-1 bg-[#2D5A3D]/15">
                    <h1 className="text-[10px] text-[#2D5A3D]">-24%</h1>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
