import React from "react";
import Navbar from "./Navbar";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div classname= "mt-4">
        <h1 className="text-3xl text-center text-white font-semibold">Login</h1>
        <form className="max-w-lg mx-auto">
          <input className = "w-full border my-2 py-2 px-3 rounded-2xl" type="email" placeholder="your@email.com"/>
          <input className = "w-full border my-2 py-2 px-3 rounded-2xl" type="password" placeholder="password"/>
          <button className = "w-full bg-gray-300">Login</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
