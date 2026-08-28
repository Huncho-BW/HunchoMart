import React from "react";
import { Star } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function LayoutCard({ product }) {
  if (!product) return null;

  const { addToCart } = useContext(CartContext);

  return (
    <div className="border border-gray-200  bg-[#fff] p-4  group overflow-hidden transition-all duration-300 hover:-translate-y-[3px] hover:shadow-lg">
      <NavLink to={`/product/${product.id}`}>
        <div className="flex gap-5">
          {/* Image */}
          <div className="w-[200px] h-[200px] shrink-0">
            <img
              src={product?.images?.[0] || product?.image}
              alt={product?.title}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 "
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-1 flex-col justify-center gap-2">
            {/* Title */}
            <h1 className="text-[10px] text-[#8A8580]">{product?.title}</h1>

            {/* Brand */}
            <h1 className="text-[14px] font-[400] text-[#0C0C0C]">
              {product?.brand}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
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

              <span className="text-[10px]">
                ({product?.rating?.count} reviews)
              </span>
            </div>
          </div>

          {/* Price / Discount / Cart */}
          <div className="w-[220px] flex flex-col justify-center gap-3">
            {/* Prices */}
            <div className="flex items-center gap-2">
              <h1 className="text-[16px] text-[#0C0C0C] font-[600]">
                {product?.price}
              </h1>

              <h1 className="text-[12px] line-through text-[#8A8580] font-[700]">
                {product?.actualPrice}
              </h1>

              <span className="text-[12px] text-[#2D5A3D]">
                -{product?.discountPercentage}%
              </span>
            </div>

            {/* Add To Cart */}
            <div className="px-4 py-2 LayCart hidden group-hover:flex justify-center">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  addToCart(product?.id);
                }}
                className=" cursor-pointer "
              >
                Quick Add
              </button>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
