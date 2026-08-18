import React from "react";
import { CartContext } from "../context/CartContext";
import { product } from "../data/product";
import { useContext } from "react";
export default function CheckOutRight() {
  const { checkoutItems } = useContext(CartContext);
  const allproductData = [
    ...product.productBeauty,
    ...product.productFashion,
    ...product.productSneakers,
    ...product.productTech,
  ];
  console.log("log out check", checkoutItems);

  const productData = checkoutItems.map((checkoutItem) => {
    const product = allproductData.find(
      (item) => item.id === (checkoutItem.id || checkoutItem.productId),
    );

    return {
      ...product,
      quantity: checkoutItem.quantity,
    };
  });

  const actualPrice = productData.map((item) => {
    return item.actualPrice;
  });

  const price = productData.map((item) => {
    return item.price;
  });

  const actualTotalPrice = productData.reduce(
    (acc, item) => acc + item.actualPrice * item.quantity,
    0,
  );

  const totalPrice = productData.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const savingPrice = Math.round(actualTotalPrice - totalPrice);

  return (
    <div className="flex flex-col gap-[20px]">
      <div>
        <h1>Order Summary</h1>
      </div>
      {productData.map((item) => (
        <div key={item.id} className="checkOutcardBorder">
          <div className="checkOutProductInfo">
            <img src={item.images} alt="" className="checkOutProductImage" />

            <div className="checkOutProductContent">
              <h2 className="">{item.brand}</h2>

              <h1 className="">{item.title}</h1>
            </div>
          </div>

          <div className="checkOutProductRight">
            <div className="priceBox">
              <h1 className="">${item.price}</h1>

              <h1 className="">${item.actualPrice}</h1>
            </div>
          </div>
        </div>
      ))}

      <div>
        <span className="divider"></span>
      </div>
      <div>
        <div className="flex justify-between">
          <h1>SubTotal</h1>
          <h1>{totalPrice}</h1>
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
        <h1>{totalPrice}</h1>
      </div>
    </div>
  );
}
