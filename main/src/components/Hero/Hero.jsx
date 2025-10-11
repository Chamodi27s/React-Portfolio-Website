import React from "react";
import "./Hero.css";
import bgImg from "../assets/7.avif";       // background image
import HeroImg from "../assets/Hero.jpg";   // right-side hero image
import CV from "../assets/Chamodi Sandeepani.pdf";

const Hero = () => {
  return (
    <div
      id="home"
      className="hero-container"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <section className="hero-section">
        {/* Left: Text */}
        <div className="hero-text">
          <h1 className="animated-title">Hi, I'm Chamodi Sandeepani 👩‍💻</h1>
          <h2 className="animated-roles">
            Frontend Developer | QA Tester | AI Enthusiast
          </h2>
          <p>
            I design and build user-friendly, creative, and intelligent applications
            using modern tools & technologies.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="view-projects">View Projects</a>
            <a href={CV} download="Chamodi_Sandeepani_CV.pdf" className="download-cv">
  Download CV
</a>

          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="hero-image-container">
          <img src={HeroImg} alt="Chamodi" className="hero-image" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
