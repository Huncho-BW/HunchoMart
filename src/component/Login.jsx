import React from "react";
import LoginLeft from "../pages/LoginLeft";
import LoginRight from "../pages/LoginRight";
import image from "../assets/image.jpg";
import flower from "../assets/flower.png";
import cart from "../assets/cart.png";
import covert from "../assets/covet.jpg";
import bag from "../assets/bag.png";
import phone from "../assets/phone.png";
import { Handbag } from "lucide-react";
import { CreditCard } from "lucide-react";
export default function Login() {
  return (
    <>
      <div>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="login"
        ></div>

        <img className="flower" src={flower} alt="" />
        <img src={cart} className="cart" />
        <img src={covert} className="covert" alt="" />

        <img src={phone} className="phone" alt="" />
        <img src={bag} className="bag" alt="" />

        <div className="shape">
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Handbag />
          </span>
        </div>
        <div className="shape1">
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <CreditCard />
          </span>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <LoginLeft />
        </div>
      </div>
    </>
  );
}
