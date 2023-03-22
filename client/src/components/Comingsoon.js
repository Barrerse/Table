import React from 'react';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
  return (
    <div className="bg-[#1b2838] h-screen flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-5xl font-bold mb-10">Coming Soon</h1>
        <p className="text-lg mb-5">We're working hard to bring you a great new feature.</p>
        <p className="text-lg mb-5">Stay tuned!</p>
        <Link to="/">
        <p className="text-lg mb-5 text-decoration-line: underline">~Go Back To Main Page~</p>
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;