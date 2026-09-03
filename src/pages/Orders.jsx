import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Fetch products using their IDs
const fetchProductsByIds = async (ids) => {
  const response = await axios.get(
    " https://huncho-mart-api.onrender.com/api/products",
    {
      params: {
        ids: ids.join(","),
      },
    },
  );

  return response.data.products ?? response.data;
};

export default function Orders() {
  const { order } = useContext(CartContext);

  // Get all product IDs from all orders
  const productIds = [
    ...new Set(order.flatMap((order) => order.items.map((item) => item.id))),
  ];

  // Fetch all products in one API request
  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["order-products", productIds],
    queryFn: () => fetchProductsByIds(productIds),
    enabled: productIds.length > 0,
  });

  // Add the order information back to each API product
  const orderHistory = order.map((order) => {
    const orderedProducts = order.items.map((orderItem) => {
      const product = products.find((product) => product.id === orderItem.id);

      return {
        ...product,
        quantity: orderItem.quantity,
        size: orderItem.size,
        color: orderItem.color,
        status: orderItem.status,
      };
    });

    return {
      ...order,
      products: orderedProducts,
    };
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-[50px]">
        <p className="text-[14px] text-gray-500">Loading orders...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center py-[50px]">
        <p className="text-[14px] text-red-500">Failed to load your orders.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[20px]">
      {/* Header */}
      <div>
        <h1 className="text-[26px] font-[700] text-gray-900">Order</h1>

        <p className="mt-1 text-[14px] text-gray-500">
          View and manage your orders
        </p>
      </div>

      {/* Orders */}
      {orderHistory?.map((item) =>
        item?.products?.map((product) => (
          <div
            key={`${item.orderId}-${product.id}`}
            className="flex flex-col gap-[20px] rounded-[16px] border border-gray-200 bg-white p-[20px] shadow-sm transition hover:shadow-md"
          >
            {/* Order Info */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-[18px]">
              <div className="flex flex-col gap-[5px]">
                <h1 className="text-[14px] font-[600] text-gray-900">
                  Order #{item?.orderId}
                </h1>

                <h1 className="text-[13px] text-gray-500">
                  {item?.date} · {product.quantity} items
                </h1>
              </div>

              <div className="flex flex-col items-end gap-[6px]">
                <span className="rounded-full bg-green-50 px-[10px] py-[4px] text-[12px] font-[600] text-green-600">
                  {product?.status || item?.status}
                </span>

                <h1 className="text-[15px] font-[700] text-gray-900">
                  ₦
                  {(product?.actualPrice * product?.quantity)?.toLocaleString()}
                </h1>
              </div>
            </div>

            {/* Product */}
            <div className="flex items-center justify-between gap-[20px]">
              <div className="flex items-center gap-[15px]">
                <div className="flex h-[70px] w-[70px] items-center justify-center rounded-[12px] bg-gray-50">
                  <img
                    src={product?.images?.[0]}
                    className="h-[60px] w-[60px] object-contain"
                    alt={product?.title}
                  />
                </div>

                <div className="flex flex-col gap-[5px]">
                  <h1 className="text-[14px] font-[600] text-gray-900">
                    {product?.title}
                  </h1>

                  <h1 className="text-[13px] text-gray-500">
                    {product?.brand}
                  </h1>

                  <div className="flex gap-[10px] text-[12px] text-gray-400">
                    <span>Qty: {product?.quantity}</span>

                    {product?.size && <span>Size: {product.size}</span>}

                    {product?.color && <span>Color: {product.color}</span>}
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-[10px]">
                <button className="cursor-pointer rounded-[8px] border border-gray-200 px-[14px] py-[8px] text-[13px] font-[500] text-gray-700 transition hover:border-gray-300 hover:bg-gray-50">
                  Reorder
                </button>

                <button className="cursor-pointer rounded-[8px] bg-black px-[14px] py-[8px] text-[13px] font-[500] text-white transition hover:bg-gray-800">
                  Review
                </button>
              </div>
            </div>
          </div>
        )),
      )}
    </div>
  );
}
