import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">
              Endurys Luxury Homes
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              HOME
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              PROPERTIES
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              SERVICES
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              OUR WORK
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              CONTACT
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 hover:cursor-pointer focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                HOME
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                ABOUT
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                PROJECTS
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                SERVICES
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                CONTACT
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
