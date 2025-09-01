import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css";
import React from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-brand">BrightLearn</div>
      <div className={`nav-links ${open ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/courses" onClick={() => setOpen(false)}>Courses</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
        
      </div>
      <div className="hamburger" onClick={() => setOpen(!open)}>☰</div>
    </nav>
  );
}

export default Navbar;
