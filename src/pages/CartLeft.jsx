import React from "react";
import { CartContext } from "../context/CartContext";
import { product } from "../data/product";
import { useContext, useState } from "react";
export default function CartLeft() {
  const { cartItems, addToQuantity, reMoveQuantity } = useContext(CartContext);

  const allproductData = [
    ...product.productBeauty,
    ...product.productFashion,
    ...product.productSneakers,
    ...product.productTech,
  ];

  const productData = cartItems?.map((cartItem) => {
    const productData = allproductData.find(
      (product) => product.id === cartItem.id,
    );

    return {
      ...productData,
      quantity: cartItem.quantity,
      size: cartItem.size,
      color: cartItem.color,
    };
  });

  console.log("log out cart data", productData);

  return (
    <div className="cartProducts">
      {productData?.map((item) => (
        <div key={item.id} className="cardBorder">
          <div className="cartProductInfo">
            <img src={item.images} alt="" className="cartProductImage" />

            <div className="cartProductContent">
              <h2 className="cartBrand">{item.brand}</h2>

              <h1 className="cartProductName">{item.title}</h1>

              <h3 className="cartVariation">
                Size: <span>US 10</span>
                <span className="cartColor">
                  Color:
                  <span className="colorCircle"></span>
                </span>
              </h3>

              <div className="product-quantity">
                <h1 className="text-[12px]">QTY</h1>

                <div className="quantity-box flex gap-5">
                  <button onClick={() => reMoveQuantity(item.id)}>-</button>
                  <h1>{item.quantity}</h1>
                  <button onClick={() => addToQuantity(item.id)}>+</button>
                </div>

                <span className="text-[10px] text-[#2D5A3D] ">
                  In stock · Ships today
                </span>
              </div>
            </div>
          </div>

          <div className="cartProductRight">
            <div className="priceBox">
              <h1 className="currentPrice">${item.price}</h1>

              <h1 className="oldPrice">${item.actualPrice}</h1>
            </div>

            <div className="cartActions">
              <div>
                <h1>Save</h1>
              </div>
              <div>
                <h1>Remove</h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
