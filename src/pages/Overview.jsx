import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { product } from "../data/product";
export default function Overview() {
  const { order, whishlist } = useContext(CartContext);

  const allproductData = [
    ...product.productBeauty,
    ...product.productFashion,
    ...product.productSneakers,
    ...product.productTech,
  ];
  const productData = allproductData.filter((item) =>
    whishlist.includes(item?.id),
  );

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

  console.log("log out order in overview ", order);
  console.log("log whishlist", whishlist);

  const ccc = {
    length: orderHistory?.flatMap((item) => item?.products ?? []).length,

    actualPrice: orderHistory
      ?.flatMap((item) => item?.products ?? [])
      .reduce((total, pro) => total + pro.actualPrice, 0),

    valuePoint: Math.round(
      orderHistory
        ?.flatMap((item) => item?.products ?? [])
        .reduce((total, pro) => total + Number(pro.actualPrice || 0) * 0.05, 0),
    ),
  };

  console.log("log cc", ccc);

  const totalPrice = orderHistory?.reduce(
    (acc, item) => acc + item?.actualPrice * item?.quantity,
    0,
  );
  const orders = [
    {
      total: "Total Orders",
      spent: ccc.length,
      date: "+3 this  month ",
    },
    {
      total: "Total Spent",
      spent: ccc.actualPrice,
      date: "+3 this  month ",
    },
    {
      total: "Value Point",
      spent: ccc.valuePoint,
      date: "+3 this  month ",
    },
    {
      total: "Wishlist",
      spent: whishlist?.length || 0,
      date: "+3 this  month ",
    },
  ];

  const recentOrder = [
    {
      img: "",
      productPackage: "VLT-29471",
      item: "3 items",
      date: "3 dec 2014",
    },
    {
      img: "",
      productPackage: "VLT-29471",
      item: "3 items",
      date: "3 dec 2014",
    },
    {
      img: "",
      productPackage: "VLT-29471",
      item: "3 items",
      date: "3 dec 2014",
    },
  ];

  return (
    <div className="px-[32px]">
      <div>
        <h1>Good Morning, Michael</h1>
        <h2>Here's what's happening with your account</h2>
      </div>
      <div className="flex justify-between gap-[20px]">
        {orders.map((item) => (
          <div className="order-border">
            <h1>{item.total}</h1>
            <h2>{item.spent}</h2>
            <h3>{item.date}</h3>
          </div>
        ))}
      </div>

      <div className="">
        <div className="flex justify-between">
          <h1>Recent Order </h1>
          <span>View all </span>
        </div>
        <div className="flex flex-col">
          {orderHistory?.map((item) => {
            console.log("log out", item?.products);
            return item?.products?.map((product) => (
              <div className="flex justify-between">
                <div className="flex gap-5">
                  <img
                    src={product.images}
                    className="w-[60px] h-[60px] broder rounded-lg"
                    alt=""
                  />
                  <div className="">
                    <h1>{item?.orderId}</h1>
                    <h2>{product.quantity}</h2>
                    <h3>dec 2020</h3>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <span>{product?.status}</span>
                  <h1>{product.actualPrice * product.quantity}</h1>
                </div>
              </div>
            ));
          })}
        </div>
      </div>

      <div className="wishlist">
        <div className="wishlist-header">
          <h1>WishList </h1>
          <span>veiw all</span>
        </div>
        <div className="catDisplay ">
          {productData.map((product) => (
            <div className="overDeal">
              <img src="" alt="" />
              <div className="flex flex-col gap-[15px] px-[20px] py-[10px]">
                <h1 className="text-[14px] font-[300]">{product.title}</h1>
                <div className="flex gap-2">
                  <div>
                    <h1 className="text-[14px] font-[400]">
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
