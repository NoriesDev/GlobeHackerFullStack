import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBarStyling.css";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav-container ${scrolling ? "scrolled" : ""}`}>
      <Link to="/about" className="nav-button">
        About
      </Link>
      <Link to="/features" className="nav-button">
        Features
      </Link>
      <h1 className="logo">GLOBEHACKERS</h1>
      <Link to="/" className="nav-button">
        Home
      </Link>
      <Link to="/destinations" className="nav-button">
        Destinations
      </Link>
    </div>
  );
}
