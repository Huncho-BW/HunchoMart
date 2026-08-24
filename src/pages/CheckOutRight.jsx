import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getCheckoutProducts = async (ids) => {
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

export default function CheckOutRight() {
  const { checkoutItems } = useContext(CartContext);

  console.log("log out check", checkoutItems);

  const productIds = checkoutItems.map((item) => item.id || item.productId);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["checkoutProducts", productIds],
    queryFn: () => getCheckoutProducts(productIds),
    enabled: productIds.length > 0,
  });

  const productData = checkoutItems
    .map((checkoutItem) => {
      const product = products.find(
        (item) => item.id === (checkoutItem.id || checkoutItem.productId),
      );

      if (!product) return null;

      return {
        ...product,
        quantity: checkoutItem.quantity,
      };
    })
    .filter(Boolean);

  const actualTotalPrice = productData.reduce(
    (acc, item) => acc + item.actualPrice * item.quantity,
    0,
  );

  const totalPrice = productData.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const savingPrice = Math.round(actualTotalPrice - totalPrice);

  if (isLoading) {
    return <div>Loading order summary...</div>;
  }

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
              <h2>{item.brand}</h2>

              <h1>{item.title}</h1>
            </div>
          </div>

          <div className="checkOutProductRight">
            <div className="priceBox">
              <h1>${item.price}</h1>

              <h1>${item.actualPrice}</h1>
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
          <h1>Delivery</h1>
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
