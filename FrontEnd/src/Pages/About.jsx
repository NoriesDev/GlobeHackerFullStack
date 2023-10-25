import React from "react";
import "./AboutStyling.css";
import StorySection from "../components/StorySection";

function About() {
  return (
    <>
      <div className="header-image-container">
        <img src="/PascalFoto.jpg" className="header-image" />
      </div>
      <div className="features-section">
        <div className="content-wrapper">
          <img
            src="/NitischMaena.jpg"
            alt="GLOBEHACKERS About"
            className="feature-image"
          />
          <div className="text-content">
            <h1 className="title">Our Mission</h1>
            <p className="subtitle">
              At GLOBEHACKERS, we believe in the power of exploration. Our team,
              comprised of seasoned travelers and passionate locals, is
              dedicated to bringing you the most authentic and enriching travel
              experiences. From the bustling streets of urban cities to the
              tranquil landscapes of nature, we've journeyed far and wide to
              curate the best adventures for you. Join us on this journey and
              discover the wonders of the world with GLOBEHACKERS.
            </p>
            <button className="explore-btn">CONTACT US</button>
          </div>
        </div>
      </div>
      <StorySection />
    </>
  );
}

export default About;
