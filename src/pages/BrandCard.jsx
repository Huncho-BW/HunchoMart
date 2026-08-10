import React from "react";
import { CiHeart } from "react-icons/ci";
import { Heart } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
export default function BrandCard({ product }) {
  if (!product) return null;
  const { addToCart, addToWhishList } = useContext(CartContext);
  return (
    <div>
      <NavLink to={`/product/${product.id}`}>
        <div className="tranding  ">
          <img src={product?.images?.[0] || product?.image} alt="" />
          <div className="addCart p-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToCart(product?.id);
              }}
              className="text-center"
            >
              Add Quikly
            </button>
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

          <div className="absolute top-0 left-0 flex w-full justify-between p-2">
            <div>
              <h1 className="text-[12px] ">{product?.discountPercentage} %</h1>
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
                }}
              >
                <Heart />
              </button>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
