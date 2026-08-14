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
    <div className="mt-[20px] p-[40px] ">
      <section>
        <span className="text-[10px] text-[#B8965A] text-[DM Mono] tracking-[0.2em] font-[500]">
          Explore
        </span>
        <h1 className="text-[32px] topHeader text-[#0C0C0C] font-[600] mb-[20px]">
          Shop By Catergories
        </h1>
        <div className="categoriesHead ">
          {categories.map((item) => (
            <NavLink className="Categories" to={item.name}>
              <img className="cat-img" src={item.pic} alt="" />

              <h1 className="text-[12px] text-[sans-serif] text-[#ffffff] font-[700]">
                {item.name} <br />{" "}
                <span className="text-[10px] text-white/50 text-[sans-serif]">
                  55
                </span>
              </h1>
            </NavLink>
          ))}
        </div>
      </section>
    </div>
  );
}
