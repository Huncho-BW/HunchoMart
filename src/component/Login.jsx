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
import { motion } from "framer-motion";
export default function Login() {
  return (
    <>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1 }}
          style={{ backgroundImage: `url(${image})` }}
          className="login"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, delay: 2 }}
        >
          <img className="flower" src={flower} alt="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 4, delay: 3 }}
        >
          <img src={cart} className="cart" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <img src={covert} className="covert" alt="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, delay: 2 }}
        >
          <img src={phone} className="phone" alt="" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 4, delay: 3 }}
        >
          <img src={bag} className="bag" alt="" />
        </motion.div>
        <motion.div
          animate={{
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            delay: 30,
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="shape">
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Handbag />
            </span>
          </div>
        </motion.div>
        <motion.div
          animate={{
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            delay: 30,
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="shape1">
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <CreditCard />
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 8, delay: 7 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <LoginLeft />
        </motion.div>
      </div>
    </>
  );
}
