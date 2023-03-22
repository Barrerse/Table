import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1b2838] text-white py-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Tabl</h2>
            <p>© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* <Link to="/" className="text-sm md:text-base mx-2 my-1 hover:text-blue-500">
              Home
            </Link>
            <Link to="/about" className="text-sm md:text-base mx-2 my-1 hover:text-blue-500">
              About
            </Link>
            <Link to="/contact" className="text-sm md:text-base mx-2 my-1 hover:text-blue-500">
              Contact
            </Link> */}
            {/* Add more links as needed */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;