import React from "react";
import "./FooterStyling.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="social-icons">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="social-icon">...</svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="social-icon">...</svg>
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="social-icon">...</svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="social-icon">...</svg>
          </a>
        </div>
        <div className="footer-columns">
          <div className="top-places">
            <h3>TOP PLACES</h3>
            <p>Britain</p>
            <p>Iceland</p>
            <p>Italy</p>
            <p>Spain</p>
          </div>
          <div className="explore">
            <h3>EXPLORE</h3>
            <p>City Breaks</p>
            <p>Scenic Trips</p>
            <p>Best Hikes</p>
            <p>Road Trips</p>
          </div>
          <div className="footer-links">
            <h3>About Us</h3>
            <p>About</p>
            <p>Privacy Policy</p>
            <p>Impressum</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2023 GLOBEHACKERS. All rights reserved.
      </div>
    </div>
  );
}
