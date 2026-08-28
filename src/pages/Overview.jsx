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
    <div className="px-[32px] flex flex-col gap-[20px] overflow-hidden">
      <div>
        <h1 className="text-[32px] topHeader">Good Morning, Michael</h1>
        <h2 className="text-[14px]">
          Here's what's happening with your account
        </h2>
      </div>
      <div className="flex justify-between gap-[20px]">
        {orders.map((item) => (
          <div className="order-border ">
            <h1 className="text-[10px] tracking-[2px] font-[400]">
              {item.total.toUpperCase()}
            </h1>
            <h2 className="text-[24px] font-[700]">{item.spent}</h2>
            <h3 className="text-[10px]">{item.date}</h3>
          </div>
        ))}
      </div>

      <div className="bg-[white] overflow-hidden max-h-[600px] p-[20px] flex flex-col gap-[20px] border-0 rounded-xl">
        <div className="flex justify-between">
          <h1 className="text-[16px] font-[700]">Recent Order </h1>
          <span className="text-[12px] cursor-pointer hover:underline">
            View all
          </span>
        </div>
        <div className="flex flex-col">
          {orderHistory?.map((item) => {
            console.log("log out orderHistory", orderHistory);
            return item?.products?.map((product) => (
              <div className="flex flex-col gap-[20px]">
                <div className="flex justify-between">
                  <div className="flex gap-5">
                    <div className="w-[60px] h-[60px] border-0  rounded-lg ">
                      <img
                        src={product.images}
                        className="w-[60px] h-[60px] broder rounded-lg"
                        alt=""
                      />
                    </div>

                    <div className="">
                      <h1 className="text-[12px] font-[300]">
                        {item?.orderId}
                      </h1>
                      <h2 className="text-[14px] font-[500]">
                        {product.quantity}
                      </h2>
                      <h3 className="text-[10px]">dec 2020</h3>
                    </div>
                  </div>
                  <div className="flex  items-center gap-[10px]">
                    <div className="border-0 rounded-3xl bg-[gray] px-[4px] py-[4px]">
                      <span className="text-[green] text-[10px]">
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

      <div className="wishlist">
        <div className="wishlist-header">
          <h1 className="text-[16px] font-[700]">WishList </h1>
          <button className="text-[12px] cursor-pointer hover:underline">
            veiw all
          </button>
        </div>
        <div className="wishlist-display ">
          {productData.map((product) => (
            <div className="wishlist-oreder">
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
