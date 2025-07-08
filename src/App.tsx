import HeroSection from "./components/Hero-Section/HeroSection";
import About from "./components/About Section/About";
import Contact from "./components/Contact Section/Contact";
import Footer from "./components/Footer Section/Footer";
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

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default App;
