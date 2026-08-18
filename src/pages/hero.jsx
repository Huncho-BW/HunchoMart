import React, { useEffect, useState } from "react";
import heroBackgroundImg from "../assets/heroBackground.png";
import fashion from "../assets/fashion.webp";
import tech from "../assets/tech.webp";
import { NavLink } from "react-router-dom";
import beauty from "../assets/beauty.webp";
import sneakers from "../assets/sneaker.webp";
import { ArrowRight } from "lucide-react";
export default function HeroSection() {
  const heroData = [
    {
      id: 1,
      title: "New Collection — SS25",
      subtitle: "Dress for the moment",
      description:
        "Fashion-forward pieces that bridge the gap between luxury and everyday.",
      image: fashion,
      button: "Shop Fashion",
      price: 890,
      actualPrice: 1000,
      brand: "Air Orbit IV",
      brandTitle: "NOVARUN",
      link: "/fashion",
    },

    {
      id: 2,
      title: "Just Dropped",
      subtitle: "Sneakers redefined",
      description:
        "The season's most coveted kicks, authenticated and ready to ship.",
      image: sneakers,
      button: "Shop Sneakers",
      price: 890,
      actualPrice: 1000,
      brand: "Air Orbit IV",
      brandTitle: "NOVARUN",
      link: "/sneakers",
    },

    {
      id: 3,
      title: "Power Meets Style",
      subtitle: "Tech for the way you live",
      description:
        "Smart technology and everyday essentials designed to keep you connected.",
      image: tech,
      button: "Shop Tech",
      price: 890,
      actualPrice: 1000,
      brand: "NovaTech",
      brandTitle: "NOVATECH",
      link: "/tech",
    },

    {
      id: 4,
      title: "Beauty, Refined",
      subtitle: "Elevate your everyday",
      description:
        "Discover beauty essentials carefully selected for your everyday routine.",
      image: beauty,
      button: "Shop Beauty",
      price: 890,
      actualPrice: 1000,
      brand: "Glow Essentials",
      brandTitle: "GLOW",
      link: "/beauty",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroData.length);
    }, 20000);

    return () => clearInterval(timer);
  }, []);

  const currentHero = heroData[currentIndex];
  return (
    <div className="hero">
      <div className="hero-text">
        <div className="subText">
          <h1 className="text-[10px] text-[#C9A227]"> {currentHero.title}</h1>
          <h2 className="text-[72px] text-[600] topHeader text-[#F8FAFC]">
            {currentHero.subtitle}
          </h2>
          <p className="text-[14px] text-[#64748B]">
            {currentHero.description}
          </p>

          <div className=" flex  gap-[20px] ">
            <div className="heroBorder bg-[#F5F5F3] text-[#08090B] hover:bg-[#08090B] hover:text-[#F8FAFC]">
              <NavLink className="" to={currentHero.link}>
                <button className="flex gap-2 items-center">
                  {currentHero.button} <ArrowRight />
                </button>
              </NavLink>
            </div>
            <div className="heroBorder bg-[#C9A227] hover:bg-[#E0C15A]">
              <NavLink>
                <button>View all</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-image  relative">
        <img
          className="image   "
          src={currentHero.image}
          alt={currentHero.title}
        />
        <div className=" border rounded-lg  w-[90%]  left-1/2 -translate-x-1/2 items-center p-[10px] bg-white     flex justify-between absolute bottom-[20px] ">
          <div>
            <h1 className="text-[#64748B] text-[10px]">Feature</h1>
            <h1 className="text-[#08090B] text-[14px]">
              {currentHero.brandTitle}
            </h1>
            <h1 className=" font-[400] text-[12px] text-[#64748B]">
              {currentHero.brand}
            </h1>
          </div>
          <div>
            <h1 className=" font-[700] text-[18px] text-[#08090B]">
              {" "}
              ${currentHero.price}
            </h1>
            <h1 className="text-right line-through text-[12px] text-[#64748B]">
              {" "}
              ${currentHero.actualPrice}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
