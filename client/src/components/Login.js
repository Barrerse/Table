import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div classname="mt-4 grow flex items-center justify-around">
        <h1 className="text-3xl text-center text-white font-semibold">Login</h1>
        <form className="max-w-lg mx-auto">
          <input
            className="w-full border my-2 py-2 px-3 rounded-2xl"
            type="email"
            placeholder="your@email.com"
          />
          <input
            className="w-full border my-2 py-2 px-3 rounded-2xl"
            type="password"
            placeholder="password"
          />
          <button className="w-full bg-gray-300 p-2 text-blue rounded-2xl">
            Login
          </button>
          <div className="text-gray-500 text-center py-2">
            Dont have an account yet?{" "}
            <Link to="/register" className="underline text-white">
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
