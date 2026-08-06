import React from "react";

import Layout from "./layout";
import Home from "./home";
import Fashion from "./about";
import Tech from "./tech";
import Sneaker from "./sneaers";
import ProductDetails from "../pages/ProductDetails";
import CheckOut from "../pages/CheckOut";
import Cart from "../pages/Cart";
import UserDashbord from "../pages/userDashBord";
import Overview from "../pages/Overview";
import Orders from "../pages/Orders";
import UserWhilelist from "../pages/UserWhisliat";
import UserAdrees from "../pages/UserAddres";
import UserPayment from "../pages/UserPayment";

import Notification from "../pages/Notification.jsx";
import Address from "../pages/Address.jsx";
import Delivery from "../pages/Delivery.jsx";
import Settings from "../pages/Setting";
import CheckOutPayment from "../pages/CheckOutPayment.jsx";
import Credit from "../pages/credit.jsx";
import ApplePay from "../pages/ApplePay.jsx";
import PayPal from "../pages/PayPal.jsx";
import Comfirmation from "../pages/Corfirmation.jsx";
export const roterConfigu = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "fashion", element: <Fashion /> },
      { path: "sneakers", element: <Sneaker /> },
      { path: "tech", element: <Tech /> },
      { path: "product/:id", element: <ProductDetails /> },
      {
        path: "checkOut/:id",
        element: <CheckOut />,
        children: [
          { index: true, element: <Address /> },
          { path: "Shipping", element: <Address /> },
          { path: "Delivery", element: <Delivery /> },
          {
            path: "checkoutPayment",
            element: <CheckOutPayment />,
            children: [
              { index: true, element: <Credit /> },
              { path: "credit", element: <Credit /> },
              { path: "applePay", element: <ApplePay /> },
              { path: "paypal", element: <PayPal /> },
            ],
          },
        ],
      },
      {
        path: "cart/:id",
        element: <Cart />,
      },

      {
        path: "Comfirmation",
        element: <Comfirmation />,
      },
      {
        path: "userDash",
        element: <UserDashbord />,
        children: [
          { index: true, element: <Overview /> },
          { path: "overview", element: <Overview /> },
          { path: "orders", element: <Orders /> },
          { path: "wishlist", element: <UserWhilelist /> },
          {
            path: "Address",
            element: <UserAdrees />,
          },
          {
            path: "payment",
            element: <UserPayment />,
          },
          {
            path: "Notification",
            element: <Notification />,
          },
          {
            path: "setting",
            element: <Settings />,
          },
        ],
      },
    ],
  },
];
