import React from "react";
import "./FeaturesStyling.css";
import CreatePost from "../components/CreatePost";

export default function Features() {
  return (
    <div>
      <div className="features-header-container">
        <h1 className="features-header-text">
          "Travel, Explore, Discover. Unleash the GlobeHacker in You!"
        </h1>
      </div>
      <CreatePost />
    </div>
  );
}
