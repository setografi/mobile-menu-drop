import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero/HeroSection";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="App">
        <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
        <HeroSection isOpen={isOpen} />
      </div>
    </>
  );
}

export default App;
