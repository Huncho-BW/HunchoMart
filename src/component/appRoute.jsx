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

import Settings from "../pages/Setting";
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
      { path: "checkOut/:id", element: <CheckOut /> },
      {
        path: "cart/:id",
        element: <Cart />,
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
