import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { Heart } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Star } from "lucide-react";
export default function BrandCard({ product }) {
  if (!product) return null;
  const { addToCart, addToWhishList } = useContext(CartContext);
  const [click, setClick] = useState(false);
  return (
    <div>
      <NavLink to={`/product/${product.id}`}>
        <div className="tranding  ">
          <img src={product?.images?.[0] || product?.image} alt="" />
          <div className="addCart flex justify-center p-1 ">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToCart(product?.id);
              }}
              className="text-center  "
            >
              Add Quikly
            </button>
          </div>
          <div className="trending-content bg-[#FAF8F5] p-3 flex flex-col gap-1">
            <div>
              <h1 className="text-[10px] text-[#8A8580]">{product?.title} </h1>
            </div>
            <div>
              <h1 className="text-[14px] font-[400] text-[#0C0C0C] ">
                {product?.brand}
              </h1>
            </div>
            <div className="flex gap-1 items-center">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={10}
                    className="text-yellow-400"
                    fill={
                      star <= Math.round(product?.rating?.rate)
                        ? "gold"
                        : "none"
                    }
                  />
                ))}
              </div>
              <div>
                <h1 className="text-[10px]">{`(${product?.rating.count} )`}</h1>
              </div>
            </div>
            <div className="flex gap-2">
              <div>
                <h1 className="text-[16px] text-[#0C0C0C] font-[600]">
                  {product?.price}
                </h1>
              </div>
              <div>
                <h1 className="text-[12px] line-through text-[#8A8580] font-[700]">
                  {product?.actualPrice}
                </h1>
              </div>
              <div className="ml-[auto]  p-1 ">
                <h1 className="text-[12px] text-[10px] text-[#2D5A3D]  ">
                  - {product?.discountPercentage} %
                </h1>
              </div>
            </div>
          </div>

          <div className="absolute top-0 left-0 flex w-full justify-between p-2">
            <div>
              <h1 className="text-[12px] text-[#2D5A3D]">
                {product?.discountPercentage} %
              </h1>
            </div>

            <div
              className=""
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  addToWhishList(product?.id);
                  setClick(true);
                }}
              >
                <Heart className={click ? "heartColor" : ""} />
              </button>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
