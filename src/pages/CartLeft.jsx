import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartLeftSkeleton from "../skeletonComponenet/CartSkeleton";
export default function CartLeft({ productData, isLoading }) {
  const { addToQuantity, reMoveQuantity, removeFromCart } =
    useContext(CartContext);

  if (isLoading) {
    return <CartLeftSkeleton />;
  }

  return (
    <div className="cartProducts">
      {productData?.map((item) => (
        <div
          key={item.id}
          className="cardBorder shadow-lg transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1"
        >
          <div className="cartProductInfo">
            <img
              src={item.images}
              alt=""
              className="cartProductImage w-[110px] h-[110px] object-cover"
            />

            <div className="cartProductContent">
              <h2 className="cartBrand text-[12px]">{item.brand}</h2>

              <h1 className="cartProductName text-[16px]">{item.title}</h1>

              <h3 className="cartVariation text-[11px]">
                Size: <span>{item.size[0] || "US 10"}</span>
                <span className="cartColor">
                  Color:
                  <span
                    className="colorCircle"
                    style={{
                      backgroundColor: item.color[0] || "black",
                    }}
                  ></span>
                </span>
              </h3>

              <div className="product-quantity">
                <h1 className="text-[11px]">QTY</h1>

                <div className="quantity-box flex gap-5">
                  <button
                    className="cursor-pointer"
                    onClick={() => reMoveQuantity(item.id)}
                  >
                    -
                  </button>

                  <h1 className="text-[13px]">{item.quantity}</h1>

                  <button
                    className="cursor-pointer"
                    onClick={() => addToQuantity(item.id)}
                  >
                    +
                  </button>
                </div>

                <span className="text-[10px] text-[#2D5A3D]">
                  In stock · Ships today
                </span>
              </div>
            </div>
          </div>

          <div className="cartProductRight">
            <div className="priceBox">
              <h1 className="currentPrice text-[14px]">${item.price}</h1>

              <h1 className="oldPrice text-[11px]">${item.actualPrice}</h1>
            </div>

            <div className="cartActions">
              <div className="">
                <h1 className="text-[11px] cursor-pointer">Save</h1>
              </div>

              <div className="">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    removeFromCart(item?.id);
                  }}
                  className="text-[11px] cursor-pointer"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
