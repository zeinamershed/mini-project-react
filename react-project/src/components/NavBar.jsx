import React from "react";
import logo from './assets/images/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="nav-logo" />
      <button className="nav-button">To-do List</button>
  
    </nav>
  );
};

export default Navbar;
