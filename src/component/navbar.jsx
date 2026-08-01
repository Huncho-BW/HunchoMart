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
          <NavLink to="/">Home</NavLink>
          <NavLink to="fashion">Fashion</NavLink>
          <NavLink to="sneakers">Sneakers</NavLink>
          <NavLink to="tech">Tech</NavLink>
          <NavLink to="beauty">Beauty</NavLink>
        </nav>

        {/* Search */}
        <div className="search">
          <input type="text" placeholder="Search products..." />
        </div>

        {/* Actions */}
        <div className="actions">
          <button>
            <Heart />
          </button>

          <a href="/cart/:id">
            <button>
              <ShoppingCart />
            </button>
          </a>
          <a href="/userDash">
            <button>
              <CircleUser />
            </button>
          </a>
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
