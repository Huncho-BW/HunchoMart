import React from "react";
import { CartContext } from "../context/CartContext";
import { product } from "../data/product";
import { useContext } from "react";
export default function CheckOutRight({ id }) {
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
    <div className="flex flex-col gap-[20px]">
      <div>
        <h1>Order Summary</h1>
      </div>
      {productData.map((item) => (
        <div className="checkOutcardBorder">
          <div className="checkOutProductInfo">
            <img src="" alt="" className="checkOutProductImage" />

            <div className="checkOutProductContent">
              <h2 className="">NOVARUN</h2>

              <h1 className="">Air Orbit IV</h1>
            </div>
          </div>

          <div className="checkOutProductRight">
            <div className="priceBox">
              <h1 className="">$289</h1>

              <h1 className="">$380</h1>
            </div>
          </div>
        </div>
      ))}
      <div className="checkOutcardBorder">
        <div className="checkOutProductInfo">
          <img src="" alt="" className="checkOutProductImage" />

          <div className="checkOutProductContent">
            <h2 className="">NOVARUN</h2>

            <h1 className="">Air Orbit IV</h1>
          </div>
        </div>

        <div className="checkOutProductRight">
          <div className="priceBox">
            <h1 className="">$289</h1>

            <h1 className="">$380</h1>
          </div>
        </div>
      </div>

      <div>
        <span className="divider"></span>
      </div>
      <div>
        <div className="flex justify-between">
          <h1>SubTotal</h1>
          <h1>22220</h1>
        </div>
        <div className="flex justify-between">
          <h1>DElivery</h1>
          <h1>free</h1>
        </div>
      </div>
      <div>
        <span className="divider"></span>
      </div>

      <div className="flex justify-between">
        <h1>Total</h1>
        <h1>22220</h1>
      </div>
    </div>
  );
}
