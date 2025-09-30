import React, { useState } from "react";
import { useNavigate } from "react-router";
import NavBar from "../NavBar/NavBar";
import About from "./About";
import Slideshow from "./Slideshow";
import Projects from "./Projects";
import { main11035 } from "../../assets/Miami-Dade/11035-images";
import Services from "./Services";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import "../../index.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={main11035}
            alt="Luxury Home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center backdrop-blur-md p-3 rounded-3xl px-4 max-w-4xl mx-auto ">
          <h1
            style={{ color: "#000" }}
            className="text-4xl md:text-6xl force-black lg:text-7xl font-light mb-6 leading-tight"
          >
            CRAFTING SOUTH FLORIDA'S
            <br />
            <span className="font-bold force-black">FINEST HOMES</span>
          </h1>
          <p className="text-lg force-black md:text-xl mb-8 font-light max-w-2xl mx-auto">
            For over 20 years, defining luxury living through architecturally
            significant custom homes and transformative renovations.
          </p>
          <button
            onClick={() => navigate("/our-work/showcase-custom-homes")}
            className="border border-white text-white px-8 py-4 mt-16 text-sm font-medium tracking-wide hover:text-black transition-all duration-300 ease-in-out 
             hover:bg-gray-200 hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)]
             hover:scale-105 hover:cursor-pointer"
          >
            EXPLORE OUR WORK
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="section-spacing">
        <About />
      </section>
      {/* Slideshow */}
      <section className="section-spacing">
        <Slideshow />
      </section>

      {/* Featured Projects */}
      <section className="section-spacing">
        <Projects />
      </section>

      {/* Services Section */}
      <section className="section-spacing">
        <Services />
      </section>

      {/* Contact Section */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
