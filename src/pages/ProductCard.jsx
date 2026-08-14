import React from "react";
import fashion from "../assets/fashion.webp";
import { NavLink } from "react-router-dom";
export default function ProductCard() {
  return (
    <NavLink to="/product/:id" className="productCard mt-3">
      <img src={fashion} className="prod-img" alt="" />
      <div>
        <div>
          <h1>brand</h1>
        </div>
        <div>
          <h1>name</h1>
        </div>
        <div>
          <span>curent price</span>
          <span className="line-through">actual price</span>
          <span>percentage </span>
        </div>
      </div>
    </NavLink>
  );
}
