import React, { useState } from "react";
import "./HeroSection.css";

const HeroSection: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="hero">
      <nav className="navbar">
        <div className="nav-top">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
          <div className="nav-actions">
            <a href="#" className="resume-link">Resume</a>
            <button className="contact-btn">Contact Me</button>
          </div>
        </div>

        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
        </ul>
      </nav>

      <div className="hero-content">
        <div className="intro-text">
          <p className="hello">Hello!</p>
          <h1 className="name">I'm Miracle Esan</h1>
          <p className="title">Software Engineer & Tech Enthusiast</p>
            <p className="bio">
              Passionate about building impactful software, I enjoy turning ideas into reality through clean code and creative problem-solving. With a keen eye for detail, I strive to deliver seamless user experiences and robust solutions.
            </p>
          <div className="hero-buttons">
            <button className="btn">About Me</button>
            <button className="btn btn-outline">Let's Connect</button>
          </div>
        </div>

        <div className="profile-photo">
          <img
            src="/Portfolio-picture.png"
            alt="Miracle Esan"
            className="photo"
          />
        </div>
      </div>

      <div className="values">
        <div className="values-container">
        <div className="value">💡 <span>Innovate</span></div>
        <div className="divider">✗</div>
        <div className="value">⚛️ <span>Engineer</span></div>
        <div className="divider">✗</div>
        <div className="value">🛫 <span>Elevate</span></div>
        </div>
        <div className="tagline">
          Innovate. Engineer. Elevate.
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
