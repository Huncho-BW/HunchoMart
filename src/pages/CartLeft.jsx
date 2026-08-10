import React from "react";
import { CartContext } from "../context/CartContext";
import { product } from "../data/product";
import { useContext } from "react";
export default function CartLeft() {
  const { cart } = useContext(CartContext);

  const allproductData = [
    ...product.productBeauty,
    ...product.productFashion,
    ...product.productSneakers,
    ...product.productTech,
  ];

  const productData = allproductData.filter((item) => cart.includes(item?.id));

  console.log("log out cart data", productData);

  return (
    <div className="cartProducts">
      {productData?.map((item) => (
        <div className="cardBorder">
          <div className="cartProductInfo">
            <img src="" alt="" className="cartProductImage" />

            <div className="cartProductContent">
              <h2 className="cartBrand">NOVARUN</h2>

              <h1 className="cartProductName">Air Orbit IV</h1>

              <h3 className="cartVariation">
                Size: <span>US 10</span>
                <span className="cartColor">
                  Color:
                  <span className="colorCircle"></span>
                </span>
              </h3>

              <div className="quantityBox">
                <h1>-</h1>

                <h1>1</h1>

                <h1>+</h1>
              </div>
            </div>
          </div>

          <div className="cartProductRight">
            <div className="priceBox">
              <h1 className="currentPrice">$289</h1>

              <h1 className="oldPrice">$380</h1>
            </div>

            <div className="cartActions">
              <h1>Save</h1>

              <h1>Remove</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
