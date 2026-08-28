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
import Beauty from "./Beauty.jsx";
import Notification from "../pages/Notification.jsx";
import Address from "../pages/Address.jsx";
import Delivery from "../pages/Delivery.jsx";
import Settings from "../pages/Setting";
import CheckOutPayment from "../pages/CheckOutPayment.jsx";
import Credit from "../pages/credit.jsx";
import ApplePay from "../pages/ApplePay.jsx";
import PayPal from "../pages/PayPal.jsx";
import HeartWish from "../pages/Heart.jsx";
import Comfirmation from "../pages/Corfirmation.jsx";
import { Navigate } from "react-router-dom";
import ProtectedRount from "./ProtectedRout.jsx";
import Login from "./Login.jsx";
import CreateAccount from "../pages/CreateAccount.jsx";
export const roterConfigu = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "fashion", element: <Fashion /> },
      { path: "sneakers", element: <Sneaker /> },
      { path: "beauty", element: <Beauty /> },
      { path: "tech", element: <Tech /> },

      { path: "product/:id", element: <ProductDetails /> },
      {
        path: "checkOut/:id",
        element: (
          <ProtectedRount>
            <CheckOut />
          </ProtectedRount>
        ),
        children: [
          { index: true, element: <Navigate to="Shipping" replace /> },
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
        path: "checkOut/cart",
        element: (
          <ProtectedRount>
            <CheckOut />
          </ProtectedRount>
        ),
        children: [
          { index: true, element: <Navigate to="Shipping" replace /> },
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
        path: "cart",
        element: <Cart />,
      },
      { path: "heart", element: <HeartWish /> },
      {
        path: "Comfirmation",
        element: <Comfirmation />,
      },

      {
        path: "userDash",

        element: (
          <ProtectedRount>
            <UserDashbord />
          </ProtectedRount>
        ),
        children: [
          { index: true, element: <Navigate to="overview" replace /> },
          { path: "overview", element: <Overview /> },
          { path: "orders", element: <Orders /> },

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

  { path: "login", element: <Login /> },
  { path: "create-account", element: <CreateAccount /> },
];
