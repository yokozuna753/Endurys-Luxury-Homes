import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom"; // assuming you're using react-router-dom
import logo from "../../assets/images/logo.webp";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const menuRef = useRef();
  const buttonRef = useRef();

  const handleDropdownToggle = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
      <div className="max-w-7xl mx-auto p-0 sm:px-6 ">
        <div className="flex justify-between m-0 items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-9xl w-25 transition-opacity duration-300 hover:opacity-80">
            <a href="/">
              {" "}
              <img src={logo} />{" "}
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink to="/" className="nav-link">
              HOME
            </NavLink>

            <div className="relative group">
              {/* This button triggers the hover */}
              <button className="nav-link hover:cursor-pointer">
                PROPERTIES
              </button>

              {/* This dropdown stays visible while hovering parent OR the dropdown itself */}
              <div className="nav-dropdown">
                <NavLink
                  to="/properties/miami-dade"
                  className="nav-dropdown-item hover:cursor-pointer"
                >
                  MIAMI-DADE COUNTY
                </NavLink>
                <NavLink
                  to="/properties/pinecrest"
                  className="nav-dropdown-item hover:cursor-pointer"
                >
                  PINECREST, FL
                </NavLink>
                {/* <NavLink
                  to="/properties/westcoast"
                  className="nav-dropdown-item hover:cursor-pointer"
                >
                  WEST COAST
                </NavLink> */}
              </div>
            </div>

            <div className="relative group">
              {/* This button triggers the hover */}
              <button className="nav-link hover:cursor-pointer">
                SERVICES
              </button>

              {/* This dropdown stays visible while hovering parent OR the dropdown itself */}
              <div className="nav-dropdown">
                <NavLink
                  to="/services/custom-homes"
                  className="nav-dropdown-item hover:cursor-pointer"
                >
                  CUSTOM HOMES
                </NavLink>
              </div>
            </div>

            <div className="relative group">
              {/* This button triggers the hover */}
              <button className="nav-link hover:cursor-pointer">
                OUR WORK
              </button>

              {/* This dropdown stays visible while hovering parent OR the dropdown itself */}
              <div className="nav-dropdown">
                <NavLink
                  to="/our-work/showcase-custom-homes"
                  className="nav-dropdown-item hover:cursor-pointer"
                >
                  SHOWCASE & CUSTOM HOMES
                </NavLink>
              </div>
            </div>

            <NavLink
              to="/properties/exclusive-listings/all"
              className="nav-link"
            >
              EXCLUSIVE LISTINGS
            </NavLink>

            <NavLink
              to="/contact"
              className="nav-link hover:cursor-pointer"
            >
              CONTACT
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              ref={buttonRef}
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              className="text-white focus:outline-none hover:text-[#c6a15b] transition-colors duration-300"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 px-6 pt-5 pb-8 space-y-5"
        >
          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="block text-white text-sm tracking-[0.2em] hover:text-[#C6A15B] transition-colors duration-300"
          >
            HOME
          </NavLink>

          {/* PROPERTIES */}
          <div>
            <button
              onClick={() => handleDropdownToggle("properties")}
              className="w-full text-left text-white text-sm tracking-[0.2em] font-medium hover:text-[#C6A15B] transition-colors duration-300"
            >
              PROPERTIES
            </button>
            {openDropdown === "properties" && (
              <div className="ml-4 mt-3 space-y-3 border-l border-[#C6A15B]/40 pl-4">
                <NavLink
                  to="/properties/miami-dade"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-xs tracking-[0.18em] text-gray-300 hover:text-[#C6A15B] transition-colors duration-300"
                >
                  MIAMI-DADE COUNTY
                </NavLink>
                <NavLink
                  to="/properties/pinecrest"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-xs tracking-[0.18em] text-gray-300 hover:text-[#C6A15B] transition-colors duration-300"
                >
                  PINECREST, FL
                </NavLink>
              </div>
            )}
          </div>

          {/* SERVICES */}
          <div>
            <button
              onClick={() => handleDropdownToggle("services")}
              className="w-full text-left text-white text-sm tracking-[0.2em] font-medium hover:text-[#C6A15B] transition-colors duration-300"
            >
              SERVICES
            </button>
            {openDropdown === "services" && (
              <div className="ml-4 mt-3 space-y-3 border-l border-[#C6A15B]/40 pl-4">
                <NavLink
                  to="/services/custom-homes"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-xs tracking-[0.18em] text-gray-300 hover:text-[#C6A15B] transition-colors duration-300"
                >
                  CUSTOM HOMES
                </NavLink>
              </div>
            )}
          </div>

          {/* OUR WORK */}
          <div>
            <button
              onClick={() => handleDropdownToggle("ourwork")}
              className="w-full text-left text-white text-sm tracking-[0.2em] font-medium hover:text-[#C6A15B] transition-colors duration-300"
            >
              OUR WORK
            </button>
            {openDropdown === "ourwork" && (
              <div className="ml-4 mt-3 space-y-3 border-l border-[#C6A15B]/40 pl-4">
                <NavLink
                  to="/our-work/showcase-custom-homes"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-xs tracking-[0.18em] text-gray-300 hover:text-[#C6A15B] transition-colors duration-300"
                >
                  SHOWCASE & CUSTOM HOMES
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/properties/exclusive-listings/all"
            onClick={() => setIsMenuOpen(false)}
            className="block text-white text-sm tracking-[0.2em] hover:text-[#C6A15B] transition-colors duration-300"
          >
            EXCLUSIVE LISTINGS
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="block text-white text-sm tracking-[0.2em] hover:text-[#C6A15B] transition-colors duration-300"
          >
            CONTACT
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
