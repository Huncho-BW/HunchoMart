import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartLeft({ productData }) {
  const { addToQuantity, reMoveQuantity } = useContext(CartContext);
  return (
    <div className="cartProducts">
      {productData?.map((item) => (
        <div key={item.id} className="cardBorder">
          <div className="cartProductInfo">
            <img src={item.images} alt="" className="cartProductImage" />

            <div className="cartProductContent">
              <h2 className="cartBrand">{item.brand}</h2>

              <h1 className="cartProductName">{item.title}</h1>

              <h3 className="cartVariation">
                Size: <span>{item.size || "US 10"}</span>
                <span className="cartColor">
                  Color:
                  <span
                    className="colorCircle"
                    style={{
                      backgroundColor: item.color || "black",
                    }}
                  ></span>
                </span>
              </h3>

              <div className="product-quantity">
                <h1 className="text-[12px]">QTY</h1>

                <div className="quantity-box flex gap-5">
                  <button onClick={() => reMoveQuantity(item.id)}>-</button>

                  <h1>{item.quantity}</h1>

                  <button onClick={() => addToQuantity(item.id)}>+</button>
                </div>

                <span className="text-[10px] text-[#2D5A3D]">
                  In stock · Ships today
                </span>
              </div>
            </div>
          </div>

          <div className="cartProductRight">
            <div className="priceBox">
              <h1 className="currentPrice">${item.price}</h1>

              <h1 className="oldPrice">${item.actualPrice}</h1>
            </div>

            <div className="cartActions">
              <div>
                <h1>Save</h1>
              </div>

              <div>
                <h1>Remove</h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
