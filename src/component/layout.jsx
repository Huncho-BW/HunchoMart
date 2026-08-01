import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "../pages/footer";
export default function Layout() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
