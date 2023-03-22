import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import { ImDownload } from "react-icons/im";
import { BiWorld } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-gray-900">
      {/* Left section */}
      <div className="flex items-center max-w-screen-xl mx-auto relative">
        <div className="flex items-center justify-center lg:justify-start py-2 px-2 lg:py-6 lg:px-8 w-full lg:w-auto">
          {/* Hamburger menu icon */}
          <div
            className="lg:hidden left-4 absolute text-white cursor-pointer"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <FiX className="text-3xl" />
            ) : (
              <FiMenu className="text-3xl" />
            )}
          </div>

          {/* Logo and brand name */}
          <Link to="/" className="flex items-center text-gray-400 font-semibold text-xl">
            <img src={logo} className="w-12 h-12 mr-2" alt="Logo" />
            <p>TABL</p>
          </Link>
        </div>

        {/* Middle section */}
        <div className="hidden lg:flex pl-10">
          <ul className="text-gray-400 text-sm flex gap-5">
            <li>
            <Link to="/store">
                <p className="text-lg font-semibold hover:text-gray-300">STORE</p>
              </Link>
            </li>
            <li>
              <Link to ="/explore">
              <p className="text-lg font-semibold hover:text-gray-300">EXPLORE</p>
              </Link>
            </li>
            <li>
              <Link to ="/about">
              <p className="text-lg font-semibold hover:text-gray-300">ABOUT</p>
              </Link>
            </li>
            <li>
              <Link to ="/contact">
              <p className="text-lg font-semibold hover:text-gray-300">CONTACT</p>
              </Link>
            </li>
          </ul>
        </div>

        {/* Right section */}
        <div className="absolute text-white right-10 top-0 text-sm lg:flex items-center mt-2 hidden">
          {/* Download App button */}
          <div className="flex items-center bg-green-500 px-2 py-1 rounded-md">
            <ImDownload className="w-4 h-4 mr-2" />
            <p>Download App</p>
          </div>

          {/* Sign in button */}
          <div className="ml-4 bg-white hover:bg-gray-50 px-2 py-1 rounded-lg group duration-100 ease-out">
            <Link to="/login">
            <p className="text-green-500 font-semibold group-hover:text-white duration-100 ease-out">
              Sign in
            </p>
            </Link>
          </div>

          {/* Location dropdown */}
          <div className="h-5 w-px bg-white mx-2"></div>

          <div className="flex items-center">
            <BiWorld className="w-5 h-5 mr-1" />
            <p>Location</p>
          </div>
        </div>
      </div>
      
         {/* Mobile menu */}
         {isMobileMenuOpen && (
        <div className="lg:hidden text-white text-sm mt-2 flex flex-col items-center">
          {/* <div className="bg-gray-900 w-full py-2 px-4 flex justify-end">
            <FiX
              className="text-white text-2xl cursor-pointer"
              onClick={toggleMobileMenu}
            />
          </div> */}
          <ul className="flex flex-col gap-2 w-full text-center ">
            <li>
              <Link to="/store">
              <p
                className="text-lg font-semibold hover:text-gray-300">STORE</p>
              </Link>
            </li>
            <li>
              <Link to="/explore">
              <p className="text-lg font-semibold hover:text-gray-300">EXPLORE</p>
              </Link>
            </li>
            <li>
              <Link to="/about">
              <p className="text-lg font-semibold hover:text-gray-300">ABOUT</p>
              </Link>
            </li>
            <li>
              <Link to="/contact">
              <p className="text-lg font-semibold hover:text-gray-300">CONTACT</p>
              </Link>
            </li>
            <li>
              <p className="text-lg font-semibold hover:text-gray-300">SIGN IN</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
