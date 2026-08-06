import React from "react";
import { CiClock2 } from "react-icons/ci";
import { IoIosFlash } from "react-icons/io";
import { NavLink } from "react-router-dom";

import { product } from "../data/product";

export default function FlashDeal() {
  const flashData = product.productFashion;

  return (
    <div className="bg-[grey] p-[40px] mt-[20px]">
      <>
        <div className="flex gap-[20px] mb-[20px]">
          <div className="flex  items-center gap-2">
            <div>
              <h1>
                <IoIosFlash size={30} />
              </h1>
            </div>
            <div>
              <span className="text-[12px]">Limited Time</span>
              <h1 className="text-[32px] font-[600]">Flash Deal </h1>
            </div>
          </div>
          <div className="flex items-center">
            <h1>
              <span>
                <CiClock2 />
              </span>{" "}
              <span className="text-[12px] ">ending in</span> 05 45 9
            </h1>
          </div>
        </div>
        <div className="flex gap-[10px]">
          {flashData.map((item) => (
            <NavLink to={`/product/${item.id}`}>
              <div className="flashDeal">
                <img src={item.image} alt="" />
                <div className="flex flex-col gap-[5px] px-[20px] py-[10px]">
                  <h1 className="text-[12px]">name</h1>
                  <h1 className="text-[14px] font-[300]">Brand</h1>
                  <div className="flex gap-2">
                    <div>
                      <h1 className="text-[14px] font-[400]">$230</h1>
                    </div>
                    <div>
                      <h1 className="text-[14px] font-[300]">$250</h1>
                    </div>
                    <div className="ml-[auto] border p-1">
                      <h1 className="text-[12px] ">-24%</h1>
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </>
    </div>
  );
}
