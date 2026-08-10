import React from "react";
import { NavLink } from "react-router-dom";
export default function Overview() {
  const order = [
    {
      total: "Total Orders",
      spent: "24",
      date: "+3 this  month ",
    },
    {
      total: "Total Orders",
      spent: "24",
      date: "+3 this  month ",
    },
    {
      total: "Total Orders",
      spent: "24",
      date: "+3 this  month ",
    },
    {
      total: "Total Orders",
      spent: "24",
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
        {order.map((item) => (
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
          {recentOrder.map((item) => (
            <div className="flex justify-between">
              <div className="flex gap-5">
                <img
                  src={item.img}
                  className="w-[60px] h-[60px] broder rounded-lg"
                  alt=""
                />
                <div className="">
                  <h1>{item.productPackage}</h1>
                  <h2>{item.item}</h2>
                  <h3>{item.date}</h3>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span>Delivered</span>
                <h1>$400</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="wishlist">
        <div className="wishlist-header">
          <h1>WishList </h1>
          <span>veiw all</span>
        </div>
        <div className="overDeal">
          <img src="" alt="" />
          <div className="flex flex-col gap-[15px] px-[20px] py-[10px]">
            <h1 className="text-[14px] font-[300]">Brand</h1>
            <div className="flex gap-2">
              <div>
                <h1 className="text-[14px] font-[400]">$230</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
