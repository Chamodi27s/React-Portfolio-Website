import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png"; // ✅ Your logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* ✅ Left: Logo */}
        <a href="#home" className="logo-container">
          <img src={logo} alt="Chamodi Logo" className="logo" />
          <span className="logo-text">Chamodi Sandeepani</span>
        </a>

        {/* ✅ Center: Nav Links */}
        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* ✅ Right: Mobile Menu Button */}
        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
