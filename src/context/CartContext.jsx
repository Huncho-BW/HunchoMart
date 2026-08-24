import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
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

  const [order, setOrder] = useState([]);
  const [notification, setNotification] = useState([]);
  const [chooseinput, setchooseinput] = useState({
    type: "",
    price: 0,
  });
  const [errors, setErrors] = useState({});

  const addToCart = (id) => {
    console.log("Context received:", id);

    setCartItems((prev) => {
      const productId = Number(id);

      const alreadyExist = prev.some((item) => item.id == productId);

      if (alreadyExist) {
        return prev;
      }
      return [
        ...prev,
        {
          id: productId,
          quantity: 1,
          size: null,
          color: null,
        },
      ];
    });
  };

  const addToWhishList = (id) => {
    setWhileList((prev) => {
      const whillistId = Number(id);
      if (prev.includes(whillistId)) {
        return prev;
      }

      return [...prev, whillistId];
    });
  };

  const [checkoutItems, setCheckoutItems] = useState([]);
  const [count, setCount] = useState(1);

  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  const reMoveCount = () => {
    setCount((prev) => prev - 1);
  };

  const addToQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const reMoveQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item,
      ),
    );
  };

  const createOder = () => {
    const newOrder = {
      orderId: `VLT-${Date.now()}`,
      items: checkoutItems,
      customer: fillDetails[0],
      delivery: chooseinput,
      status: "Processing",
    };

    setOrder((prev) => [...prev, newOrder]);

    return newOrder;
  };

  const createNotification = (order, status) => {
    const newNotification = {
      packageNumber: order,
      processing: status,
    };

    setNotification((prev) => [...prev, newNotification]);

    return newNotification;
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        addToWhishList,
        whishlist,
        fillDetails,
        setFillDetails,
        errors,
        setErrors,
        chooseinput,
        setchooseinput,
        checkoutItems,
        setCheckoutItems,
        count,
        setCount,
        addCount,
        reMoveCount,
        addToQuantity,
        reMoveQuantity,
        order,
        createOder,
        notification,
        createNotification,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
