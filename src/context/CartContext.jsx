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

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== Number(id)));
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
  const removeWhishList = (id) => {
    setWhileList((prev) => prev.filter((item) => item !== Number(id)));
  };
  const [checkoutItems, setCheckoutItems] = useState([]);

  const [productDetailsData, setproductDetailsData] = useState({
    count: 1,
    color: "",
    size: "",
  });

  const addCount = () => {
    setproductDetailsData((prev) => ({
      ...prev,
      count: prev.count + 1,
    }));
  };

  const reMoveCount = () => {
    setproductDetailsData((prev) => ({
      ...prev,
      count: Math.max(1, prev.count - 1),
    }));
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
        removeFromCart,
        addToWhishList,
        removeWhishList,

        whishlist,
        fillDetails,
        setFillDetails,
        errors,
        setErrors,
        chooseinput,
        setchooseinput,
        checkoutItems,
        setCartItems,
        setCheckoutItems,

        addCount,
        reMoveCount,
        addToQuantity,
        reMoveQuantity,
        order,
        createOder,
        notification,
        createNotification,
        productDetailsData,
        setproductDetailsData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
