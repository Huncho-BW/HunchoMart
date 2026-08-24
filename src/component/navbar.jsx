import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Heart, CircleUser, ShoppingCart, Menu, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import NavlinkMobile from "./nav-link";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";

import { CircleX } from "lucide-react";
export default function Navbar() {
  const [searchInput, setSearchInput] = useState("");
  const [searchDebounce, setsearchDebounce] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setsearchDebounce(searchInput);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchInput]);

  const searchApi = async () => {
    const result = await axios.get(
      "https://huncho-mart-api.onrender.com/api/products/search",

      {
        params: {
          q: searchDebounce,
        },
      },
    );

    return result?.data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["search", searchDebounce],
    queryFn: searchApi,
    enabled: searchDebounce?.length >= 3,
  });

  const searchData = data || [];
  console.log("log out search data", searchData);

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
        <div>
          <div className="search relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />

            {searchInput.length > 0 && (
              <CircleX
                size={18}
                className="search-clear"
                onClick={() => setSearchInput("")}
              />
            )}
          </div>
          {searchDebounce?.length >= 3 && (
            <div className="search-dropdown absolute shadow-lg">
              {isLoading && <p className="search-status">Searching...</p>}

              {isError && <p className="search-status">No products found</p>}

              {!isLoading &&
                !isError &&
                searchData.map((item) => (
                  <div key={item.id} className="search-dropdown-item group">
                    <p>{item.title}</p>

                    <ArrowRight className="search-arrow" size={16} />
                  </div>
                ))}
            </div>
          )}
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
                  <div className=" mobileSearch search relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                    />

                    {searchInput.length > 0 && (
                      <CircleX
                        size={18}
                        className="search-clear"
                        onClick={() => setSearchInput("")}
                      />
                    )}
                  </div>

                  {searchDebounce?.length >= 3 && (
                    <div className="search-dropdown absolute">
                      {isLoading && (
                        <p className="search-status">Searching...</p>
                      )}

                      {isError && (
                        <p className="search-status">No products found</p>
                      )}

                      {!isLoading &&
                        !isError &&
                        searchData.map((item) => (
                          <div
                            key={item.id}
                            className="search-dropdown-item group"
                          >
                            <p>{item.title}</p>

                            <ArrowRight className="search-arrow" size={16} />
                          </div>
                        ))}
                    </div>
                  )}
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
