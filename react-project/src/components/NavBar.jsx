import React from "react";

import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      
      <img src={logo} alt="" />
      <h1 className="navbar-title">To Do App</h1>
      
    </div>
  );
};

export default Navbar;
