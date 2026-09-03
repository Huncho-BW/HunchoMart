import React, { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Heart, CircleUser, ShoppingCart, Menu, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import NavlinkMobile from "./nav-link";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { AuthenticatonContext } from "../context/AuthenticatonContext";

import { CircleX } from "lucide-react";
export default function Navbar() {
  const { details } = useContext(AuthenticatonContext);
  const [searchInput, setSearchInput] = useState("");
  const [searchDebounce, setsearchDebounce] = useState("");
  const navigate = useNavigate();
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

  const handleSearch = (cat) => {
    const category = cat.category?.toLowerCase();
    if (category === "fashion") {
      navigate(`/fashion?search=${encodeURIComponent(cat.title)}`);
    }

    if (category === "sneaker") {
      navigate(`/sneakers?search=${encodeURIComponent(cat.title)}`);
    }

    if (category === "tech") {
      navigate(`/tech?search=${encodeURIComponent(cat.title)}`);
    }

    if (category === "beauty") {
      navigate(`/beauty?search=${encodeURIComponent(cat.title)}`);
    }

    setSearchInput("");
  };

  return (
    <div>
      <header className="navbar">
        {/* Logo */}
        <div className="logo">
          <h1>HunchoMart</h1>
        </div>

        {/* Navigation */}
        <nav className="nav-links ">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-text active" : "nav-text"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-text active" : "nav-text"
            }
            to="fashion"
          >
            Fashion
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-text active" : "nav-text"
            }
            to="sneakers"
          >
            Sneakers
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-text active" : "nav-text"
            }
            to="tech"
          >
            Tech
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-text active" : "nav-text"
            }
            to="beauty"
          >
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
                  <div
                    onClick={() => handleSearch(item)}
                    key={item.id}
                    className="search-dropdown-item group"
                  >
                    <p>{item.title}</p>

                    <ArrowRight className="search-arrow" size={16} />
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="actions">
          <NavLink to="/heart">
            {({ isActive }) => (
              <Heart className={isActive ? "nav-text active" : "nav-text"} />
            )}
          </NavLink>

          <NavLink to="/cart">
            {({ isActive }) => (
              <ShoppingCart
                className={isActive ? "nav-text active" : "nav-text"}
              />
            )}
          </NavLink>
          <NavLink to="/userDash">
            {({ isActive }) => (
              <div
                className={
                  isActive
                    ? " flex gap-3 items-center nav-text active"
                    : " flex gap-3 items-center nav-text"
                }
              >
                <CircleUser />
                {details?.firstName.length > 1 && (
                  <h1>{`Hi ${details.lastName} `}</h1>
                )}
              </div>
            )}
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
                  <div className=" mobileSearch relative">
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
