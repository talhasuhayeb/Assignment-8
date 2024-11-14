import React, { useState } from "react";
import { FaShoppingCart, FaHeart, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-b ">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-lg font-bold">
          Gadget Heaven
        </Link>

        <div className="hidden md:flex space-x-8 text-gray-700">
          <Link to="/" className="hover:text-purple-700">
            Home
          </Link>
          <Link to="/Statistics" className="hover:text-purple-700">
            Statistics
          </Link>
          <Link to="/Dashboard" className="hover:text-purple-700">
            Dashboard
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-purple-700 focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <div className="hidden md:flex space-x-4">
          <button className="text-gray-700 hover:text-purple-700">
            <FaShoppingCart size={20} />
          </button>
          <button className="text-gray-700 hover:text-purple-700">
            <FaHeart size={20} />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col px-4 py-2 space-y-2">
            <a href="#home" className="text-gray-700 hover:text-purple-700">
              Home
            </a>
            <a
              href="#statistics"
              className="text-gray-700 hover:text-purple-700"
            >
              Statistics
            </a>
            <a
              href="#dashboard"
              className="text-gray-700 hover:text-purple-700"
            >
              Dashboard
            </a>
            <div className="flex space-x-4 pt-2 border-t border-gray-200">
              <button className="text-gray-700 hover:text-purple-700">
                <FaShoppingCart size={20} />
              </button>
              <button className="text-gray-700 hover:text-purple-700">
                <FaHeart size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
