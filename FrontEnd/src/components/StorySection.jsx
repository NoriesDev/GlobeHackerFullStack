import React from "react";
import "./StorySection.css";

function StorySection() {
  return (
    <div className="story-section">
      <h2 className="encouragement-text">Discover New Horizons with Us</h2>
      <div className="subscribe-container">
        <input
          type="email"
          className="subscribe-input"
          placeholder="Enter your email for updates"
        />
        <button className="subscribe-button">Subscribe</button>
      </div>
    </div>
  );
}

export default StorySection;
