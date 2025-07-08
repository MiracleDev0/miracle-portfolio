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
            <a href="#contact"><button className="contact-btn">Contact Me</button></a>
          </div>
        </div>

        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}><li>Home</li></a>
          <a href="#about" onClick={() => setMenuOpen(false)}><li>About</li></a>
          <a href="#projects" onClick={() => setMenuOpen(false)}><li>Projects</li></a>
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
            <a href="#about"><button className="btn">About Me</button></a>
            <a href="#contact"><button className="btn btn-outline">Let's Connect</button></a>
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
