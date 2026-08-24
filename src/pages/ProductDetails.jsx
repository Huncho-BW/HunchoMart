import React, { useContext, useEffect, useState } from "react";
import { Truck, Shield, Heart, Star, RotateCcw } from "lucide-react";
import { useParams, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function ProductDetails() {
  const {
    cart,
    addToCart,
    checkoutItems,
    count,
    setCount,
    addCount,
    reMoveCount,
  } = useContext(CartContext);
  const [click, setClick] = useState(false);
  console.log("log out cart", cart);

  const { id } = useParams();

  const getProduct = async () => {
    const result = await axios.get(
      `https://huncho-mart-api.onrender.com/api/products/${id}`,
    );

    return result.data;
  };

  const {
    data: productData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: getProduct,
    enabled: !!id,
  });

  console.log(" product data", productData);

  useEffect(() => {
    setCount(1);
  }, [productData?.id]);

  return (
    <>
      <div className="product-details">
        <div className="product-gallery">
          <img
            src={productData?.images?.[0] || productData?.images}
            alt=""
            className="product-image"
          />

          <div className="product-type">
            <h1>{productData?.title}</h1>
          </div>
        </div>

        <div className="product-info">
          <div className="product-header">
            <h1 className="text-[10px] text-[#B8965A] font-[400]">
              {productData?.brand}
            </h1>
            <span>
              <Heart />
            </span>
          </div>
          <div>
            <h1 className="topHeader text-[32px]">{productData?.title}</h1>
            <div className="flex items-center gap-5">
              {" "}
              <div className="flex gap-5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={14}
                    className="text-yellow-400"
                    fill={
                      star <= Math.round(productData?.rating?.rate)
                        ? "gold"
                        : "none"
                    }
                  />
                ))}
              </div>
              <div>
                <h1 className="text-[14px] text-[#0C0C0C]">
                  {productData?.rating?.rate}{" "}
                  <span className="text-[#8A8580]">
                    {" "}
                    {`(${productData?.rating.count} reviews)`}
                  </span>
                </h1>
              </div>
            </div>
          </div>
          <div className="product-price">
            <h1 className="text-[30px] text-[#0C0C0C] ">
              $ {productData?.price}
            </h1>
            <h1 className="text-[18px] line-through text-[#8A8580]">
              $ {productData?.actualPrice}
            </h1>
            <h1 className="text-[14px] text-[#2D5A3D]">
              {productData?.discountPercentage}%
            </h1>
          </div>

          <div className="divider">
            <hr />
          </div>

          <div className="product-color">
            <div className="section-header">
              <h1 className="text-[12px] tracking-[0.08em] text-[#0C0C0C]">
                color
              </h1>
              <div className="flex gap-2">
                {productData?.color?.map((item) => (
                  <span
                    key={item}
                    className={`w-10 h-10 rounded-full border `}
                    style={{ backgroundColor: item }}
                  ></span>
                ))}
              </div>
            </div>
          </div>

          <div className="product-size">
            <div className="flex justify-between">
              <h1 className="text-[12px] tracking-[0.08em] text-[#0C0C0C]">
                size
              </h1>
              <span className="text-[12px] tracking-[0.08em] text-[#B8965A]">
                Size Guide
              </span>
            </div>
            <div className="flex gap-2">
              {productData?.size?.map((item) => (
                <div className="size-box">
                  <h1>{item}</h1>
                </div>
              ))}
            </div>
          </div>

          <div className="product-quantity">
            <h1 className="text-[12px]">QTY</h1>

            <div className="quantity-box flex gap-5">
              <button onClick={reMoveCount}>-</button>
              <h1>{count}</h1>
              <button onClick={addCount}>+</button>
            </div>

            <span className="text-[10px] text-[#2D5A3D] ">
              In stock · Ships today
            </span>
          </div>

          <div className="product-actions">
            <div className="cart-btn ">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  addToCart(productData?.id);
                  setClick(true);
                }}
              >
                <Shield /> Add to Cart
              </button>
            </div>

            <div className="buy-btn">
              <NavLink to={`/checkOut/${productData?.id}`}>
                <button>Buy Now</button>
              </NavLink>
            </div>
          </div>

          <div className="product-benefits">
            <div className="flex flex-col justify-center items-center">
              <span>
                <Truck />
              </span>
              <span>Free Delivery</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span>
                {" "}
                <Shield />
              </span>
              <span>Authentication</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="text-center">
                {" "}
                <RotateCcw />
              </span>
              <span>Free Return</span>
            </div>
          </div>
          <span className="divider"></span>

          <div className="delivery-info">
            <h1>Delivery & Returns</h1>

            <p>
              Standard delivery in 3–5 business days. Express available. Free
              returns within 30 days of delivery. Items must be unworn with
              original tags.
            </p>
          </div>
          <span className="divider"></span>
          <div>
            <details>
              <summary>Specifications</summary>
              Standard delivery in 3-5 business days. Express available. Free
              returns within 30 days of delivery. Items must be unworn with
              original tags.
            </details>
          </div>

          <div>
            <details>
              <summary>Sizing & Fit</summary>
              These run true to size for most people. If you're between sizes,
              we recommend sizing up. The toe box has a medium width —
              wide-footers should consider going up half a size.
            </details>
          </div>
          <span className="divider"></span>
        </div>
      </div>

      <section className="p-[40px]">
        <span className="divider"></span>
        <div className=" flex flex-col gap-[20px] ">
          <div>
            <h1>Customer Reviews</h1>
          </div>

          <div>
            <div className="flex items-center gap-5">
              {" "}
              <div className="flex gap-5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="text-yellow-400"
                    fill={
                      star <= Math.round(productData?.rating?.rate)
                        ? "gold"
                        : "none"
                    }
                  />
                ))}
              </div>
              <div>
                <h1>
                  {productData?.rating?.rate}
                  {" Out Of 5 "}
                  {`(${productData?.rating.count} reviews)`}
                </h1>
              </div>
            </div>
          </div>
          <div className="review-display ">
            {productData?.reviews?.map((item) => (
              <div className="border p-5">
                <div className="flex gap-5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="text-yellow-400"
                      fill={star <= Math.round(item?.rating) ? "gold" : "none"}
                    />
                  ))}
                </div>
                <div>
                  <h1>{item.comment}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
