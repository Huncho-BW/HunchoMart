import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "../pages/footer";
import { motion } from "motion/react";
export default function Layout() {
  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 "
      >
        <Navbar />
      </motion.div>
      <div className="pt-[80px]">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
