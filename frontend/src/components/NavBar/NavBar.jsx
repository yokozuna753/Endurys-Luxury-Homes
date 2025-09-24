import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // assuming you're using react-router-dom
import logo from "../../assets/images/logo.webp";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  return (
    <nav className="bg-black shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto p-0 sm:px-6 ">
        <div className="flex justify-between m-0 items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-9xl w-25">
            <a href="/">
              {" "}
              <img src={logo} />{" "}
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink to="/" className="text-white ">
              HOME
            </NavLink>

            <div className="relative group">
              {/* This button triggers the hover */}
              <button className="text-white hover:cursor-pointer">
                PROPERTIES
              </button>

              {/* This dropdown stays visible while hovering parent OR the dropdown itself */}
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-1000 ease-out">
                <NavLink
                  to="/properties/miami-dade"
                  className="block px-4 py-2 hover:cursor-pointer hover:bg-gray-100 text-black dark:hover:text-black"
                >
                  MIAMI-DADE COUNTY
                </NavLink>
                <NavLink
                  to="/properties/pinecrest"
                  className="block px-4 py-2 hover:cursor-pointer hover:bg-gray-100 text-black dark:hover:text-black"
                >
                  PINECREST, FL
                </NavLink>
                <NavLink
                  to="/properties/westcoast"
                  className="block px-4 py-2 hover:cursor-pointer hover:bg-gray-100 text-black dark:hover:text-black"
                >
                  WEST COAST
                </NavLink>
              </div>
            </div>

            <div className="relative group">
              {/* This button triggers the hover */}
              <button className="text-white hover:cursor-pointer ">
                SERVICES
              </button>

              {/* This dropdown stays visible while hovering parent OR the dropdown itself */}
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-1000 ease-out">
                <NavLink
                  to="/services/custom-homes"
                  className="block px-4 py-2 hover:cursor-pointer hover:bg-gray-100 dark:hover:text-black"
                >
                  CUSTOM HOMES
                </NavLink>
              </div>
            </div>

            <div className="relative group">
              {/* This button triggers the hover */}
              <button className="text-white  hover:cursor-pointer">
                OUR WORK
              </button>

              {/* This dropdown stays visible while hovering parent OR the dropdown itself */}
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-1000 ease-out">
                <NavLink
                  to="/our-work/showcase-custom-homes"
                  className="block px-4 py-2 hover:cursor-pointer hover:bg-gray-100 dark:hover:text-black"
                >
                  SHOWCASE & CUSTOM HOMES
                </NavLink>
              </div>
            </div>

            <NavLink to="/contact" className="text-white hover:cursor-pointer ">
              CONTACT
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 focus:outline-none"
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
        <div className="md:hidden hover:cursor-pointer bg-white border-t border-gray-200 px-4 pt-4 pb-6 space-y-4">
          <NavLink to="/" className="block text-gray-800">
            HOME
          </NavLink>

          {/* PROPERTIES */}
          <div>
            <button
              onClick={() => handleDropdownToggle("properties")}
              className="w-full text-left hover:cursor-pointer text-gray-800 font-medium"
            >
              PROPERTIES
            </button>
            {openDropdown === "properties" && (
              <div className="ml-4 mt-2 space-y-2 hover:cursor-pointer hover:text-blue-600">
                <NavLink
                  to="/properties/miami-dade"
                  className="block text-sm text-gray-600 hover:cursor-pointer hover:text-blue-600"
                >
                  MIAMI-DADE COUNTY
                </NavLink>
                <NavLink
                  to="/properties/pinecrest"
                  className="block text-sm text-gray-600 hover:cursor-pointer hover:text-blue-600"
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
              className="w-full text-left text-gray-800 font-medium hover:cursor-pointer"
            >
              SERVICES
            </button>
            {openDropdown === "services" && (
              <div className="ml-4 mt-2 space-y-2">
                <NavLink
                  to="/services/custom-homes"
                  className="block text-sm text-gray-600 hover:cursor-pointer hover:text-blue-600"
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
              className="w-full text-left text-gray-800 font-medium hover:cursor-pointer"
            >
              OUR WORK
            </button>
            {openDropdown === "ourwork" && (
              <div className="ml-4 mt-2 space-y-2">
                <NavLink
                  to="/our-work/showcase-custom-homes"
                  className="block text-sm text-gray-600 hover:cursor-pointer hover:text-blue-600"
                >
                  SHOWCASE & CUSTOM HOMES
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/contact" className="block text-gray-800">
            CONTACT
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
