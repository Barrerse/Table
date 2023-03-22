import React from "react";
import Navbar from "./Navbar";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      await axios.post("/login", { email, password });
      alert("Login successful");
      setRedirect(true);
    } catch (e) {
      alert("Login failed. Please try again later.");
    }
  }

if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Navbar />
      <div className="mt-4 grow flex items-center justify-around">
        <h1 className="text-3xl text-center text-white font-semibold">Login</h1>
        <form className="max-w-lg mx-auto" onSubmit={handleLoginSubmit}>
          <input
            className="w-full border my-2 py-2 px-3 rounded-2xl"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full border my-2 py-2 px-3 rounded-2xl"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
