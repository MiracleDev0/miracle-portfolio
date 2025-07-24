import React, { useState } from "react";
import "./HeroSection.css";
import { Typewriter } from "react-simple-typewriter";

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
            <div className="resume">
              <svg xmlns="http://www.w3.org/2000/svg" cursor="pointer" width="1em" height="1em" viewBox="0 0 24 24" className="fill-white"><path fill="currentColor" d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7Z"></path></svg>
              <a 
                href="https://drive.google.com/file/d/1FQhvfo66OcYR3watiJQaSFLHDz_4YDGD/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                // download
                aria-label="Download Resume" 
                className="resume-link"
                >
                Resume
              </a>
            </div>
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
          <h1 className="name">
            <Typewriter
              words={["I'm Miracle Esan", "Your friendly neighborhood software engineer","Let's build something amazing together!"]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
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
