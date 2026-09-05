import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Star } from "lucide-react";
import BrandSke from "../skeletonComponenet/BrandCardSkeleton";

export default function BrandCard({ product }) {
  if (!product) return null;

  const { addToCart, addToWhishList, removeWhishList, whishlist } =
    useContext(CartContext);

  const [click, setClick] = useState(false);
  useEffect(() => {
    if (!click) return;
    const timer = setTimeout(() => {
      setClick(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [click]);

  const handleClick = (id) => {
    const productId = Number(id);

    if (whishlist.includes(productId)) {
      removeWhishList(productId);
    } else {
      addToWhishList(productId);
    }
  };

  return (
    <div>
      <NavLink to={`/product/${product.id}`}>
        <div className="tranding group overflow-hidden transition-all duration-300 hover:-translate-y-[3px] hover:shadow-lg">
          <img
            src={product?.images?.[0] || product?.image}
            alt=""
            className="transition-transform duration-500 group-hover:scale-110 group-hover:border-b"
          />

          <div
            className={`addCart hidden group-hover:flex justify-center p-1 ${
              click ? "bg-[#22C55E]" : "bg-white hover:bg-black"
            }`}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToCart(product?.id);
                setClick(true);
              }}
              className={" text-center cursor-pointer"}
            >
              {click ? "✓ Add to Cart " : "Add to Cart"}
            </button>
          </div>

          <div className="trending-content flex flex-col gap-1 bg-[#fff] p-3">
            <div>
              <h1 className="text-[10px] text-[#8A8580]">{product?.title}</h1>
            </div>

            <div>
              <h1 className="text-[14px] font-[400] text-[#0C0C0C]">
                {product?.brand}
              </h1>
            </div>

            <div className="flex items-center gap-1">
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
                <h1 className="text-[10px]">({product?.rating?.count})</h1>
              </div>
            </div>

            <div className="flex gap-2">
              {/* Current Price */}
              <div>
                <h1 className="text-[16px] font-[600] text-[#0C0C0C]">
                  ₦{Number(product?.price || 0).toLocaleString("en-NG")}
                </h1>
              </div>

              {/* Actual Price */}
              <div>
                <h1 className="text-[12px] font-[700] text-[#8A8580] line-through">
                  ₦{Number(product?.actualPrice || 0).toLocaleString("en-NG")}
                </h1>
              </div>

              <div className="ml-[auto] p-1">
                <h1 className="text-[10px] text-[#2D5A3D]">
                  - {product?.discountPercentage}%
                </h1>
              </div>
            </div>
          </div>

          <div className="absolute left-0 top-0 flex w-full justify-between p-2">
            <div>
              <h1 className="text-[12px] text-[#2D5A3D]">
                {product?.discountPercentage}%
              </h1>
            </div>

            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleClick(product?.id);
                }}
                className="flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white"
              >
                <Heart
                  size={19}
                  strokeWidth={1.8}
                  className={`transition-colors duration-300 ${
                    whishlist.includes(Number(product?.id))
                      ? "fill-red-500 text-red-500"
                      : "text-[#0C0C0C] hover:text-red-500"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
