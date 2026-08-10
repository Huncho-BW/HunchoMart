import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [whishlist, setWhileList] = useState([]);

  const addToCart = (id) => {
    console.log("Context received:", id);

    setCart((prev) => {
      if (prev.includes(id)) {
        return prev;
      }

      return [...prev, id];
    });
  };

  const addToWhishList = (id) => {
    setWhileList((prev) => {
      if (prev.includes(id)) {
        return prev;
      }

      return [...prev, id];
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, addToWhishList, whishlist }}
    >
      {children}
    </CartContext.Provider>
  );
}
