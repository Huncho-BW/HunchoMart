import React, { useEffect, useState } from "react";
import heroBackgroundImg from "../assets/heroBackground.png";
import fashion from "../assets/fashion.webp";
import tech from "../assets/tech.jpeg";
import { NavLink } from "react-router-dom";
import beauty from "../assets/beauty.webp";
import sneakers from "../assets/sneaker.webp";
import { ArrowRight } from "lucide-react";
import { motion, useAnimation } from "motion/react";
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

  const textControls = useAnimation();
  const imageControls = useAnimation();
  const imageText = useAnimation();

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentHero = heroData[currentIndex];

  useEffect(() => {
    const animateHero = async () => {
      await Promise.all([
        textControls.set({ opacity: 0, x: 30 }),
        imageControls.set({ opacity: 0, x: -30 }),
        imageText.set({ opacity: 0, y: -30 }),
      ]);

      textControls.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
          ease: "easeOut",
        },
      });

      imageControls.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut",
        },
      });
      imageText.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut",
        },
      });
    };

    animateHero();
  }, [currentIndex]);

  return (
    <div className="hero">
      <motion.div animate={textControls} className="hero-text">
        <div className="subText">
          <h1 className="text-[10px] text-[#C9A227]"> {currentHero.title}</h1>
          <h2 className="text-[72px]  [@media(max-width:767px)]:text-[62px] font-[600] topHeader ">
            {currentHero.subtitle}
          </h2>
          <p className="text-[16px] font-serif leading-[1.7] text-[#555] ">
            {currentHero.description}
          </p>

          <div className="flex gap-[20px]">
            <div className="heroBorder bg-[#08090B] text-white hover:bg-[#1C1D20]">
              <NavLink to={currentHero.link}>
                <button className="flex gap-2 items-center font-serif">
                  {currentHero.button}
                  <ArrowRight className="arroRight" />
                </button>
              </NavLink>
            </div>

            <div className="heroBorder bg-[#E0C15A] text-[#08090B] hover:bg-[#C9A943]">
              <NavLink>
                <button className="font-serif">View all</button>
              </NavLink>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div animate={imageControls} className="hero-image  relative">
        <img
          className="image   "
          src={currentHero.image}
          alt={currentHero.title}
        />
        <motion.div
          animate={imageText}
          className=" border rounded-lg  w-[90%]  left-1/2 -translate-x-1/2 items-center p-[10px] bg-white     flex justify-between absolute bottom-[20px] hover:-translate-y-4 transition-transform duration-300 "
        >
          <div>
            <h1 className="text-[#64748B] font-serif text-[10px]">Feature</h1>
            <h1 className="text-[#08090B] font-serif text-[14px]">
              {currentHero.brandTitle}
            </h1>
            <h1 className=" font-[400] font-serif text-[12px] text-[#64748B]">
              {currentHero.brand}
            </h1>
          </div>
          <div>
            <h1 className=" font-[700] topHeader text-[18px] text-[#08090B]">
              {" "}
              ${currentHero.price}
            </h1>
            <h1 className="text-right topHeader line-through text-[12px] text-[#64748B]">
              {" "}
              ${currentHero.actualPrice}
            </h1>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
