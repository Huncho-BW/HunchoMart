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
import { product } from "../data/product";
export default function LeftDashbord() {
  const { order } = useContext(CartContext);
  const allproductData = [
    ...product.productBeauty,
    ...product.productFashion,
    ...product.productSneakers,
    ...product.productTech,
  ];

  const orderHistory = order.map((order) => {
    const orderedProducts = order.items.map((orderItem) => {
      const product = allproductData.find(
        (product) => product.id === orderItem.id,
      );

      return {
        ...product,
        quantity: orderItem.quantity,
        size: orderItem.size,
        color: orderItem.color,
      };
    });

    return {
      ...order,
      products: orderedProducts,
    };
  });

  let ccc = {
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
    { logo: Heart, name: "wishlist" },
    { logo: MapPin, name: "Address" },
    { logo: CreditCard, name: "payment" },
    { logo: Bell, name: "Notification" },
    { logo: Settings, name: "setting" },
  ];

  return (
    <div className="flex flex-col gap-[20px]">
      <section className="borderOne">
        <div className="profile-info">
          <div className="div-circle">AM</div>

          <div className="profile-text">
            <h1>Adenuga Michael</h1>
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
