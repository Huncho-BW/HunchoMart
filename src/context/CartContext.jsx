import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [whishlist, setWhileList] = useState([]);
  const [fillDetails, setFillDetails] = useState([
    {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
  ]);

  const [chooseinput, setchooseinput] = useState({
    type: "",
    price: 0,
  });
  const [errors, setErrors] = useState({});

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
      value={{
        cart,
        addToCart,
        addToWhishList,
        whishlist,
        fillDetails,
        setFillDetails,
        errors,
        setErrors,
        chooseinput,
        setchooseinput,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
