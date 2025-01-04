
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import linkedin from "../assets/Images/svg/linkedin.svg";
import instaimage from "../assets/Images/svg/instagram-fill.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="pt-8">
      <nav className="nav_bg shadow-md px-4 md:px-8 py-3 rounded-[50px] relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Portfolio</h1>
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link to="/" className="text-gray-600 hover:text-orange-500 font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link to="/workshop" className="text-gray-600 hover:text-orange-500 font-medium">
                Workshop
              </Link>
            </li>
            <li>
              <Link to="/resume" className="text-gray-600 hover:text-orange-500 font-medium">
                Resume
              </Link>
            </li>
          </ul>


          <div className="hidden md:flex items-center space-x-4">
            <button className="button_bg text-white px-4 py-2 rounded-md text-sm hover:bg-orange-600">
              Contact Me
            </button>
            <a href="#linkedin" className="text-gray-600 hover:text-orange-500">
              <img className="w-[40px] h-[40px]" src={linkedin} alt="linkedin" />
            </a>
            <div className="border-l-2 border-gray-300 mx-4 h-6" /> {/* Vertical Line */}
            <a href="#gallery" className="text-gray-600 hover:text-orange-500">
              <img className="w-[40px] h-[40px]" src={instaimage} alt="instagram" />
            </a>
          </div>
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-800 text-2xl"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>


        {isMobileMenuOpen && (
          <div className="absolute nav_bg top-full left-0 w-full shadow-md rounded-b-lg md:hidden z-50  backdrop-blur-md ">
            <ul className="flex flex-col items-center space-y-3 py-4">
              <li>
                <Link to="/" onClick={toggleMobileMenu} className="text-gray-600 hover:text-orange-500 font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/workshop"  onClick={toggleMobileMenu} className="text-gray-600 hover:text-orange-500 font-medium">
                  Workshop
                </Link>
              </li>
              <li>
                <Link to="/resume" onClick={toggleMobileMenu} className="text-gray-600 hover:text-orange-500 font-medium">
                  Resume
                </Link>
              </li>
              <li>
                <button
                  className="bg-orange-500 text-white px-6 py-2 rounded-md text-sm hover:bg-orange-600"
                  onClick={toggleMobileMenu}
                >
                  Contact Me
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

