import React from "react";
import logo from "../assets/logo.png";
import { FiMenu } from "react-icons/fi";
import { ImDownload } from "react-icons/im";
import { BiWorld } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="bg-gray-900">
      {/* Left section */}
      <div className="flex items-center max-w-screen-xl mx-auto relative">
        <div className="flex items-center justify-center lg:justify-start py-2 px-2 lg:py-6 lg:px-8 w-full lg:w-auto">
          {/* Hamburger menu icon */}
          <div className="lg:hidden left-4 absolute text-white">
            <FiMenu className="text-3xl" />
          </div>

          {/* Logo and brand name */}
          <div className="flex items-center text-gray-400 font-semibold text-xl">
            <img src={logo} className="w-12 h-12 mr-2" alt="Logo" />
            <p>TABL</p>
          </div>
        </div>

        {/* Middle section */}
        <div className="hidden lg:flex pl-10">
          <ul className="text-gray-400 text-sm flex gap-5">
            <li>
              <p>STORE</p>
            </li>
            <li>
              <p>EXPLORE</p>
            </li>
            <li>
              <p>ABOUT</p>
            </li>
            <li>
              <p>CONTACT</p>
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
            <p className="text-green-500 font-semibold group-hover:text-white duration-100 ease-out">
              Sign in
            </p>
          </div>

          {/* Location dropdown */}
          <div className="h-5 w-px bg-white mx-2"></div>

          <div className="flex items-center">
            <BiWorld className="w-5 h-5 mr-1" />
            <p>Location</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
