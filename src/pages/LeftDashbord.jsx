import React, { useContext } from "react";
import { User } from "lucide-react";
import { Package } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Heart } from "lucide-react";
import { MapPin } from "lucide-react";
import { Bell } from "lucide-react";
import { CreditCard } from "lucide-react";
import { Settings } from "lucide-react";
import { CartContext } from "../context/CartContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthenticatonContext } from "../context/AuthenticatonContext";

const getOrderProducts = async (ids) => {
  const result = await axios.get(
    "https://huncho-mart-api.onrender.com/api/products",
    {
      params: {
        ids: ids.join(","),
        limit: ids.length,
      },
    },
  );

  return result.data.products;
};

export default function LeftDashbord() {
  const { order } = useContext(CartContext);
  const { details } = useContext(AuthenticatonContext);

  console.log("log out formdaata", details);
  // Get every product ID from every order
  const productIds = order.flatMap((order) =>
    order.items.map((item) => item.id),
  );

  // Remove duplicate IDs
  const uniqueProductIds = [...new Set(productIds)];

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["orderProducts", uniqueProductIds],
    queryFn: () => getOrderProducts(uniqueProductIds),
    enabled: uniqueProductIds.length > 0,
  });

  // Rebuild order history using API products
  const orderHistory = order.map((order) => {
    const orderedProducts = order.items
      .map((orderItem) => {
        const product = products.find((item) => item.id === orderItem.id);

        if (!product) return null;

        return {
          ...product,
          quantity: orderItem.quantity,
          size: orderItem.size,
          color: orderItem.color,
        };
      })
      .filter(Boolean);

    return {
      ...order,
      products: orderedProducts,
    };
  });

  const ccc = {
    length: orderHistory?.flatMap((item) => item?.products ?? []).length,

    valuePoint: Math.round(
      orderHistory
        ?.flatMap((item) => item?.products ?? [])
        .reduce((total, pro) => total + Number(pro.actualPrice || 0) * 0.05, 0),
    ),
  };

  const section = [
    { logo: User, name: "overview" },
    { logo: Package, name: "orders" },

    { logo: MapPin, name: "Address" },
    { logo: CreditCard, name: "payment" },
    { logo: Bell, name: "Notification" },
    { logo: Settings, name: "setting" },
  ];

  if (isLoading) {
    return <div>Loading dashboard...</div>;
  }

  return (
    <div className="flex flex-col gap-[20px]">
      <section className="borderOne">
        <div className="profile-info">
          <div className="div-circle">AM</div>

          <div className="profile-text">
            <div>
              <span>{details.firstName.toUpperCase()}</span>{" "}
              <span>{details.lastName.toUpperCase()}</span>
            </div>
            <span>Gold Member</span>
          </div>
        </div>

        <div className="profile-stats">
          <div className="borderTwo">
            <h1>{ccc.length}</h1>
            <span>Orders</span>
          </div>

          <div className="borderTwo">
            <h1>{ccc.valuePoint}</h1>
            <span>Points</span>
          </div>
        </div>
      </section>

      <section className="dashboard-nav">
        {section.map((item) => {
          const Icon = item.logo;

          return (
            <NavLink key={item.name} to={item.name} className="dashboard-link">
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </section>
    </div>
  );
}
