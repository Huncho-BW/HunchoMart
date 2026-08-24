import React, { useContext } from "react";
import CartLeft from "./CartLeft";
import CartRight from "./CartRight";
import { CartContext } from "../context/CartContext";
import { useLocation } from "react-router-dom";
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
  const { cartItems, setCheckoutItems } = useContext(CartContext);

  const location = useLocation();

  const lenghtofCart = cartItems.length;

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
        size: cartItem.size,
        color: cartItem.color,
      };
    })
    .filter(Boolean);

  console.log("log cart location ", location.pathname);
  console.log("cart inside Cart page:", cartItems);
  console.log("cart product data:", productData);

  if (isLoading) {
    return <div>Loading cart...</div>;
  }

  return (
    <div className="cartContainer">
      <header className="flex justify-between items-center cartHeader">
        <div>
          <h1 className="cartTitle">Shopping Cart</h1>
          <span className="cartItems">{lenghtofCart} Items</span>
        </div>

        <div>
          <a href="#">Continue Shopping</a>
        </div>
      </header>

      <div className="cartGrid">
        <div className="cartLeftWrapper">
          <CartLeft productData={productData} />
        </div>

        <div className="cartRightWrapper">
          <CartRight productData={productData} />
        </div>
      </div>
    </div>
  );
}
