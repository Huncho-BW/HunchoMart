import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { product } from "../data/product";

export default function Orders() {
  const { order, whishlists } = useContext(CartContext);

  const allproductData = [
    ...product.productBeauty,
    ...product.productFashion,
    ...product.productSneakers,
    ...product.productTech,
  ];

  const orderHistory = order.map((order) => {
    const orderedProducts = order.items.map((orderItem) => {
      const product = allproductData.find(
        (product) => product.id === orderItem.id,
      );

      return {
        ...product,
        quantity: orderItem.quantity,
        size: orderItem.size,
        color: orderItem.color,
      };
    });

    return {
      ...order,
      products: orderedProducts,
    };
  });
  return (
    <div>
      <div>
        <h1>Order</h1>
      </div>
      {orderHistory?.map((item) => {
        console.log("log out", item?.products);
        return item?.products?.map((product) => (
          <div className="flex flex-col gap-[30px]">
            <div className="flex justify-between items-center">
              <div>
                <h1>{product?.orderId}</h1>
                <h1>Dec 24 2024 .{product.quantity} items </h1>
              </div>
              <div>
                <span>
                  <h1>{product?.status}</h1>
                </span>
                <h1>${product.actualPrice * product.quantity}</h1>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-[20px] items-center">
                <img
                  src={product.images}
                  className="w-[60px] h-[60px]"
                  alt=""
                />
                <div>
                  <h1>{product?.title} </h1>
                  <h1>{product?.brand}</h1>
                </div>
              </div>
              <div className="flex gap-[20px]">
                <span>
                  <h1>Reorder</h1>
                </span>
                <span>
                  <h1>Review</h1>
                </span>
              </div>
            </div>
          </div>
        ));
      })}
    </div>
  );
}
