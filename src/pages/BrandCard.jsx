import React from "react";
import { CiHeart } from "react-icons/ci";
import { Heart } from "lucide-react";
import { NavLink } from "react-router-dom";
export default function BrandCard({ product }) {
  if (!product) return null;

  return (
    <NavLink to={`/product/${product.id}`}>
      <div className="tranding  ">
        <img src={product?.images?.[0] || product?.image} alt="" />
        <div className="addCart p-4">
          <button className="text-center">Add Quikly</button>
        </div>
        <div className="trending-content p-3">
          <div>
            <h1 className="text-[12px]">{product?.title}</h1>
          </div>
          <div>
            <h1 className="text-[14px] font-[300]">{product?.brand}</h1>
          </div>
          <div className="flex gap-2">
            <div>
              <h1 className="text-[14px] font-[400]">
                {product?.currentPrices}
              </h1>
            </div>
            <div>
              <h1 className="text-[14px] font-[300]">{product?.price}</h1>
            </div>
            <div className="ml-[auto] border p-1">
              <h1 className="text-[12px] ">{product?.discount || ""}</h1>
            </div>
          </div>
        </div>
        <div className="flex justify-between p-2">
          <h1 className="text-[12px] ">%{product?.discountPercentage}</h1>
          <h1>
            <Heart />
          </h1>{" "}
        </div>
      </div>
    </NavLink>
  );
}
