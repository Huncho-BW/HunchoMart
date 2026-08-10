import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "../pages/footer";
export default function Layout() {
  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50 ">
        <Navbar />
      </div>
      <div className="pt-[80px]">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
