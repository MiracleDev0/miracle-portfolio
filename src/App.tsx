import HeroSection from "./sections/Hero-Section/HeroSection";
import About from "./sections/About Section/About";
import ProjectsSection from "./sections/Projects Section/ProjectsSection";
import Contact from "./sections/Contact Section/Contact";
import Footer from "./sections/Footer Section/Footer";
import "./App.css";

const App = () => {
  return (
    <div>
      <div id="home">
        <HeroSection />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="projects">
        <ProjectsSection />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default App;
