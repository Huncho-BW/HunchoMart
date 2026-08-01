import React from "react";
import heroBackgroundImg from "../assets/heroBackground.png";
export default function HeroSection() {
  return (
    <div>
      <section className="hero">
        <img src={heroBackgroundImg} alt="Hero" className="hero-image" />

        <div className="hero-content">
          <span>NEW SEASON COLLECTION</span>
          <h1>Elevate Your Everyday Style</h1>
          <p>
            Premium fashion, sneakers and essentials curated for modern living.
          </p>

          <button className="heroButton">Shop Now</button>
        </div>
      </section>
    </div>
  );
}
