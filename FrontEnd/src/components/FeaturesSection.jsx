import React from "react";
import "./FeaturesSection.css";

function FeaturesSection() {
  return (
    <div className="features-section">
      <div className="content-wrapper">
        <img
          src="/JuliKosolapova.jpg"
          alt="GLOBEHACKERS Feature"
          className="feature-image"
        />

        <div className="text-content">
          <h1 className="title">GLOBEHACKERS</h1>
          <p className="subtitle">
            At GLOBEHACKERS, we believe in the transformative power of travel.
            Our mission is to inspire individuals to step out of their comfort
            zones, explore the unknown, and connect with diverse cultures around
            the world. Every journey tells a story, and we're here to share
            those tales of adventure, discovery, and human connection. Join us
            as we traverse the globe, uncover hidden gems, and celebrate the
            spirit of wanderlust.
          </p>
          <button className="explore-btn">EXPLORE</button>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
