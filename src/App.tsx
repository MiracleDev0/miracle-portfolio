import React from "react";
import HeroSection from "./components/Hero-Section/HeroSection";
import About from "./components/About Section/About";
import Contact from "./components/Contact Section/Contact";
import Footer from "./components/Footer Section/Footer";

const App: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
