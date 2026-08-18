import React from "react";
import { NavLink } from "react-router-dom";
import { Heart, CircleUser, ShoppingCart, Menu, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import NavlinkMobile from "./nav-link";

export default function Navbar() {
  return (
    <div>
      <header className="navbar">
        {/* Logo */}
        <div className="logo">
          <h1>HunchoMart</h1>
        </div>

        {/* Navigation */}
        <nav className="nav-links ">
          <NavLink className={"nav-text"} to="/">
            Home
          </NavLink>
          <NavLink className="nav-text" to="fashion">
            Fashion
          </NavLink>
          <NavLink className="nav-text" to="sneakers">
            Sneakers
          </NavLink>
          <NavLink className="nav-text" to="tech">
            Tech
          </NavLink>
          <NavLink className="nav-text" to="beauty">
            Beauty
          </NavLink>
        </nav>

        {/* Search */}
        <div className="search">
          <input type="text" placeholder="Search products..." />
        </div>

        {/* Actions */}
        <div className="actions">
          <NavLink to={"/heart"}>
            <button>
              <Heart className="nav-text" />
            </button>
          </NavLink>

          <NavLink to="/cart">
            <button>
              <ShoppingCart className="nav-text" />
            </button>
          </NavLink>
          <NavLink to="/userDash">
            <button>
              <CircleUser className="nav-text" />
            </button>
          </NavLink>
        </div>

        {/* Mobile Menu */}
        <div className="mobile-menu">
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>
                <Menu />
              </button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="overlay" />

              <Dialog.Content className="mobile-drawer">
                <Dialog.Close asChild>
                  <button>
                    <X />
                  </button>
                </Dialog.Close>

                <div>
                  <div className=" mobileSearch">
                    <input type="text" placeholder="Search products..." />
                  </div>
                  <NavlinkMobile />
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </header>
    </div>
  );
}
