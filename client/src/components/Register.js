import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(ev) {
    ev.preventDefault();
    try{
      await axios.post('/register', { name, email, password });
      alert('User created successfully')
    }catch(e){
      alert('Registration failed. Please try again later.')
    }

  }

  return (
    <div>
      <Navbar />
      <div className="mt-4">
        <h1 className="text-3xl text-center text-white font-semibold">
          Register
        </h1>
        <form className="max-w-lg mx-auto" onSubmit={registerUser}>
          <input
            className="w-full border my-2 py-2 px-3 rounded-2xl"
            type="text"
            placeholder="your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <button className="w-full bg-gray-300 my-2 p-2 text-blue rounded-2xl">
            Sign Up
          </button>
          <div className="text-gray-500 text-center py-2">
            Already a member?{" "}
            <Link to="/login" className="underline text-white">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
