import React, { useContext } from "react";
import CartLeft from "./CartLeft";
import CartRight from "./CartRight";
import { CartContext } from "../context/CartContext";
import { useLocation, NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getCartProducts = async (ids) => {
  const result = await axios.get(
    "https://huncho-mart-api.onrender.com/api/products",
    {
      params: {
        ids: ids.join(","),
        limit: ids.length,
      },
    },
  );

  return result.data.products;
};

export default function Cart() {
  const { cartItems } = useContext(CartContext);

  const location = useLocation();

  const lengthOfCart = cartItems.length;

  const productIds = cartItems.map((item) => item.id);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["cartProducts", productIds],
    queryFn: () => getCartProducts(productIds),
    enabled: productIds.length > 0,
  });

  const productData = cartItems
    .map((cartItem) => {
      const product = products.find((item) => item.id === cartItem.id);

      if (!product) return null;

      return {
        ...product,
        quantity: cartItem.quantity,
      };
    })
    .filter(Boolean);

  console.log("log cart location ", location.pathname);
  console.log("cart inside Cart page:", cartItems);
  console.log("cart product data:", productData);

  // Empty cart
  if (lengthOfCart === 0) {
    return (
      <div className="min-h-[500px] flex flex-col justify-center items-center text-center px-5">
        <div className="mb-5">
          <h1 className="text-[28px] font-medium">Your Cart is Empty</h1>

          <p className="text-[#8A8580] mt-2">
            You haven't added any products to your cart yet.
          </p>
        </div>

        <NavLink to="/">
          <button className="px-8 py-3 bg-[#0C0C0C] text-white">
            Continue Shopping
          </button>
        </NavLink>
      </div>
    );
  }

  return (
    <div className="cartContainer">
      <header className="flex justify-between items-center cartHeader">
        <div>
          <h1 className="cartTitle">Shopping Cart</h1>
          <span className="cartItems">{lengthOfCart} Items</span>
        </div>

        <div>
          <NavLink to="/">Continue Shopping</NavLink>
        </div>
      </header>

      <div className="cartGrid">
        <div className="cartLeftWrapper">
          <CartLeft productData={productData} isLoading={isLoading} />
        </div>

        <div className="cartRightWrapper">
          <CartRight productData={productData} />
        </div>
      </div>
    </div>
  );
}
