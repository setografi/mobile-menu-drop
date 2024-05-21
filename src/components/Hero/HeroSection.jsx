import React from "react";

function HeroSection({ isOpen }) {
  return (
    <>
      <section
        className={`w-full h-svh bg-gray-100 p-8 text-center transform transition-transform duration-300 ease-in-out ${
          isOpen ? "mt-0 translate-y-full" : "mt-0 translate-y-0"
        }`}
      >
        <div className="hero-content">
          <img src="logo.png" alt="Logo" className="w-24 mx-auto" />
          <h1 className="text-blue-800 text-2xl mt-4">Penyaluran Beasiswa</h1>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
