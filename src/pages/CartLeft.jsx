import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import CartLeftSkeleton from "../skeletonComponenet/CartSkeleton";
import { Trash } from "lucide-react";

export default function CartLeft({ productData, isLoading }) {
  const { addToQuantity, reMoveQuantity, removeFromCart, setCartItems } =
    useContext(CartContext);

  const [colorClick, setColorClick] = useState(null);
  const [sizeClick, SetSizeClick] = useState(null);

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

              <div className="cartVariation relative text-[11px]">
                {sizeClick === item.id && (
                  <div className="absolute bottom-full left-1/2 z-20 mb-1 flex -translate-x-1/2 gap-1 whitespace-nowrap bg-white border border-gray-200 shadow-md p-1">
                    {item.sizes.map((size, index) => (
                      <button
                        className="whitespace-nowrap px-3 py-2 hover:bg-gray-100"
                        onClick={() => {
                          setCartItems((prev) =>
                            prev.map((cartItem) =>
                              cartItem.id === item.id
                                ? { ...cartItem, size: size }
                                : cartItem,
                            ),
                          );

                          SetSizeClick(null);
                        }}
                        key={index}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                )}

                <h1 className="whitespace-nowrap">
                  Size:{" "}
                  <span
                    className="cursor-pointer whitespace-nowrap"
                    onClick={() => {
                      SetSizeClick((prev) =>
                        prev === item.id ? null : item.id,
                      );
                    }}
                  >
                    {item.selectedSize || "select size"}
                  </span>
                </h1>

                {colorClick === item.id && (
                  <div className="absolute bottom-full left-1/2 z-20 mb-1 flex -translate-x-1/2 items-center justify-center gap-2 whitespace-nowrap bg-white border border-gray-200 shadow-md p-2">
                    {item.colors.map((color, index) => (
                      <span
                        onClick={() => {
                          setCartItems((prev) =>
                            prev.map((cartitem) =>
                              cartitem.id === item.id
                                ? { ...cartitem, color: color }
                                : cartitem,
                            ),
                          );

                          setColorClick(null);
                        }}
                        key={index}
                        className="colorCircle cursor-pointer"
                        style={{
                          backgroundColor: color,
                        }}
                      ></span>
                    ))}
                  </div>
                )}

                <span className="cartColor whitespace-nowrap">
                  Color:{" "}
                  <span
                    onClick={() => {
                      setColorClick((prev) =>
                        prev === item.id ? null : item.id,
                      );
                    }}
                    className={`${
                      item.selectedColor
                        ? "colorCircle cursor-pointer"
                        : "cursor-pointer whitespace-nowrap"
                    }`}
                    style={{
                      backgroundColor: item.selectedColor || "transparent",
                    }}
                  >
                    {!item.selectedColor && "select color"}
                  </span>
                </span>
              </div>

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
              <Trash size={16} />
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
