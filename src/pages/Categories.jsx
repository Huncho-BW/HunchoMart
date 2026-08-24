import React from "react";
import ProductCard from "./ProductCard";
import heroBackgroundImg from "../assets/heroBackground.png";
import fashion from "../assets/fashion.webp";
import tech from "../assets/tech.webp";
import sneakers from "../assets/sneaker.webp";
import beauty from "../assets/beauty.webp";
import { NavLink } from "react-router-dom";
export default function Categories() {
  const categories = [
    { name: "Fashion", pic: fashion },
    { name: "Sneakers", pic: sneakers },
    { name: "Tech", pic: tech },
    { name: "Beauty", pic: beauty },
  ];
  return (
    <div className="categoriesHead">
      {categories.map((item) => (
        <NavLink
          key={item.name}
          className="Categories group relative overflow-hidden"
          to={item.name}
        >
          <img
            className="cat-img transition-transform duration-500 group-hover:scale-110"
            src={item.pic}
            alt={item.name}
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute bottom-4 left-4">
            <h1 className="text-[12px] text-white font-[700]">{item.name}</h1>

            <span className="text-[10px] text-white/50">55</span>
          </div>
        </NavLink>
      ))}
    </div>
  );
}
