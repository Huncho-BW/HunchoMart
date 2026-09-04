import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthenticatonContext } from "../context/AuthenticatonContext";

const getProducts = async (ids) => {
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

export default function Overview() {
  const { order, whishlist } = useContext(CartContext);
  const { details } = useContext(AuthenticatonContext);

  /*
   * Get every product ID from every order
   */
  const orderProductIds = order.flatMap((orderItem) =>
    orderItem.items.map((item) => item.id),
  );

  /*
   * Wishlist IDs
   */
  const wishlistProductIds = whishlist || [];

  /*
   * Remove duplicate IDs before sending them to the API
   */
  const allProductIds = [
    ...new Set([...orderProductIds, ...wishlistProductIds]),
  ];

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["overviewProducts", allProductIds],
    queryFn: () => getProducts(allProductIds),
    enabled: allProductIds.length > 0,
  });

  /*
   * Wishlist products
   */
  const productData = products.filter((item) => whishlist?.includes(item.id));

  /*
   * Order history
   */
  const orderHistory = order.map((orderItem) => {
    const orderedProducts = orderItem.items
      .map((orderProduct) => {
        const product = products.find(
          (product) => product.id === orderProduct.id,
        );

        if (!product) return null;

        return {
          ...product,
          quantity: orderProduct.quantity,
          size: orderProduct.size,
          color: orderProduct.color,
        };
      })
      .filter(Boolean);

    return {
      ...orderItem,
      products: orderedProducts,
    };
  });

  console.log("log out order in overview ", order);
  console.log("log whishlist", whishlist);
  console.log("log overview products", products);
  console.log("log order history", orderHistory);

  const ccc = {
    length: orderHistory?.flatMap((item) => item?.products ?? []).length,

    actualPrice: orderHistory
      ?.flatMap((item) => item?.products ?? [])
      .reduce(
        (total, pro) =>
          total + Number(pro.actualPrice || 0) * Number(pro.quantity || 0),
        0,
      ),

    valuePoint: Math.round(
      orderHistory
        ?.flatMap((item) => item?.products ?? [])
        .reduce((total, pro) => total + Number(pro.actualPrice || 0) * 0.05, 0),
    ),
  };

  console.log("log cc", ccc);

  const orders = [
    {
      total: "Total Orders",
      spent: ccc.length,
      date: "+3 this month",
    },
    {
      total: "Total Spent",
      spent: ccc.actualPrice,
      date: "+3 this month",
    },
    {
      total: "Value Point",
      spent: ccc.valuePoint,
      date: "+3 this month",
    },
    {
      total: "Wishlist Like",
      spent: whishlist?.length || 0,
      date: "+3 this month",
    },
  ];

  if (isLoading) {
    return <div>Loading overview...</div>;
  }

  return (
    <div className="px-[32px] flex flex-col gap-[20px] overflow-hidden">
      <div>
        <h1 className="text-[32px] topHeader">
          Good Morning, <span>{details.lastName}</span>
        </h1>
        <h2 className="text-[14px]">
          Here's what's happening with your account
        </h2>
      </div>

      <div className="flex justify-between [@media(max-width:767px)]:flex-col gap-[20px]">
        {orders.map((item) => (
          <div className="order-border" key={item.total}>
            <h1 className="text-[10px] tracking-[2px] font-[400]">
              {item.total.toUpperCase()}
            </h1>

            <h2 className="text-[24px] font-[700]">{item.spent}</h2>

            <h3 className="text-[10px]">{item.date}</h3>
          </div>
        ))}
      </div>

      {/* RECENT ORDERS */}

      <div className="bg-[white] overflow-hidden max-h-[600px] p-[20px] flex flex-col gap-[20px] border-0 rounded-xl">
        <div className="flex justify-between">
          <h1 className="text-[16px] font-[700]">Recent Order</h1>

          <span className="text-[12px] cursor-pointer hover:underline">
            View all
          </span>
        </div>

        <div className="flex flex-col">
          {orderHistory?.map((item) => {
            return item?.products?.map((product) => (
              <div
                key={`${item.orderId}-${product.id}`}
                className="flex flex-col gap-[20px]"
              >
                <div className="flex justify-between">
                  <div className="flex gap-5">
                    <div className="w-[60px] h-[60px] border-0 rounded-lg">
                      <img
                        src={product.images}
                        className="w-[60px] h-[60px] border-0 rounded-lg"
                        alt=""
                      />
                    </div>

                    <div className="flex flex-col">
                      <h1 className="text-[12px] font-[300]">
                        {item?.orderId}
                      </h1>

                      <div className="flex gap-[10px] text-[12px] text-gray-400">
                        <span>Qty: {product.quantity}</span>

                        {product.size && <span>Size: {product.size}</span>}

                        {product.color && <span>Color: {product.color}</span>}
                      </div>

                      <h3 className="text-[10px]">dec 2020</h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-[10px]">
                    <div className="px-2 py-1 rounded-full bg-green-100">
                      <span className="text-green-700 text-[10px] font-medium">
                        {item?.status}
                      </span>
                    </div>

                    <h1>{product.actualPrice * product.quantity}</h1>
                  </div>
                </div>

                <div className="divider mt-[20px] mb-[20px]"></div>
              </div>
            ));
          })}
        </div>
      </div>

      {/* WISHLIST */}

      <div className="wishlist">
        <div className="wishlist-header">
          <h1 className="text-[16px] font-[700]">WishList</h1>

          <button className="text-[12px] cursor-pointer hover:underline">
            view all
          </button>
        </div>

        <div className="wishlist-display">
          {productData.map((product) => (
            <div className="wishlist-oreder" key={product.id}>
              <div className="wish-image-border">
                <img src={product.images} alt="" />
              </div>

              <div className="flex flex-col gap-[10px]">
                <h1 className="text-[12px] font-[300]">{product.title}</h1>

                <div className="flex gap-2">
                  <div>
                    <h1 className="text-[12px] font-[400]">
                      ${product.actualPrice}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
