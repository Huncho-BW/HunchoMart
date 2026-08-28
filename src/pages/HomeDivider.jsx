import React from "react";
import { Truck } from "lucide-react";
import { Shield } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Award } from "lucide-react";
import { motion, useAnimation } from "motion/react";
export default function HomeDivider() {
  const defaul = [
    {
      logo: <Truck />,
      title: "Free Shipping",
      name: "On orders over $150",
    },
    {
      logo: <Shield />,
      title: "Authenticity Guaranteed",
      name: "100% verified products",
    },
    {
      logo: <ArrowRight />,
      title: "Easy Returns",
      name: "30-day free returns",
    },
    {
      logo: <Award />,
      title: "Premium Members",
      name: "Earn points on every order",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
      }}
      className=" home flex flex-col justify-center border h-[95px] bg-[#0C0C0C]"
    >
      <div className="flex justify-between">
        {defaul.map((item) => (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1,
            }}
            className="flex
        gap-2 items-center"
          >
            <span className="text-[#B8965A]">{item.logo}</span>{" "}
            <div className="flex flex-col">
              <h1 className="text-[12px] text-[600] text-white">
                {item.title}
              </h1>
              <p className="text-[10px] text-[#8A8580]">{item.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
