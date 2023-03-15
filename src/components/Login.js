import React from "react";
import Navbar from "./Navbar";

const Login = () => {
  return (
    <div className="login-wrapper">
    <Navbar />
      <h1 className="mx-[2rem] mt-[2rem] text-white text-[14px] overflow-hidden">SIGN IN</h1>
      <form>
        <label>
          <p className="mx-[2rem] mt-[2rem] text-blue text-[14px] overflow-hidden">SIGN IN WITH EMAIL ADDRESS</p>
          <input type="text" />
        </label>
        <label>
          <p className="mx-[2rem] mt-[2rem] text-white text-[14px] overflow-hidden">PASSWORD</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Login;
