import React from "react";
import { CiHeart } from "react-icons/ci";
import { Heart } from "lucide-react";
import { NavLink } from "react-router-dom";
export default function BrandCard() {
  return (
    <NavLink to="product/:id">
      <div className="tranding  ">
        <img src="" alt="" />
        <div className="addCart p-4">
          <button className="text-center">Add Quikly</button>
        </div>
        <div className="trending-content p-3">
          <div>
            <h1 className="text-[12px]">name</h1>
          </div>
          <div>
            <h1 className="text-[14px] font-[300]">brand</h1>
          </div>
          <div className="flex gap-2">
            <div>
              <h1 className="text-[14px] font-[400]">$200</h1>
            </div>
            <div>
              <h1 className="text-[14px] font-[300]">$300</h1>
            </div>
            <div className="ml-[auto] border p-1">
              <h1 className="text-[12px] ">23%</h1>
            </div>
          </div>
        </div>
        <div className="flex justify-between p-2">
          <h1 className="text-[12px] ">23%</h1>
          <h1>
            <Heart />
          </h1>{" "}
        </div>
      </div>
    </NavLink>
  );
}
