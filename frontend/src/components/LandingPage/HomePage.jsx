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
  className="relative h-screen flex flex-col justify-between overflow-hidden"
>
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      src={main11035}
      alt="Luxury Home"
      className="w-full h-full object-cover object-47-center object-52-center"
    />
    <div className="absolute inset-0"></div>
  </div>

  {/* Top Hero Content - Title */}
  <div className="relative z-10 text-center pt-22 lg:pt-16 px-4">
    <h1
      className="text-4xl md:text-6xl lg:text-6xl font-light mb-6 lg:mb-7 leading-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
      style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9), -2px -2px 8px rgba(0,0,0,0.9)' }}
    >
      CRAFTING SOUTH FLORIDA'S
      <br />
      <span className="font-bold">FINEST HOMES</span>
    </h1>
  </div>

  {/* Bottom Hero Content - Description & Button */}
  <div className="relative z-10 text-center pb-16 px-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-32">
    <p className="text-lg text-white md:text-xl mb-12 font-light max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
      For over 20 years, defining luxury living through architecturally
      significant custom homes and transformative renovations.
    </p>
    <button
      onClick={() => navigate("/our-work/showcase-custom-homes")}
      className="border border-white text-white mb-8 px-8 py-4 text-sm font-medium tracking-wide hover:text-black transition-all duration-300 ease-in-out
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
