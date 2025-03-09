import React from "react";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="top-navbar">
      <div className="nav-left">
        <span className="nav-title">Admin Dashboard</span>
      </div>
      <div className="nav-right">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">About</a>
        <a href="#" className="nav-link">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;