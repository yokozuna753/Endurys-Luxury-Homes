import React, { useState } from "react";
import NavBar from "./NavBar";
import About from "./About";
import Projects from "./Projects";
import Services from "./Services";
import ContactForm from "./ContactForm";
import Footer from "./Footer";



const MiamiDade = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}

      {/* <NavBar /> */}

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
            alt="Luxury Home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center backdrop-blur-md p-3 rounded-3xl  text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl text-black lg:text-7xl font-light mb-6 leading-tight">
            CRAFTING SOUTH FLORIDA'S
            <br />
            <span className="font-bold text-black">FINEST HOMES</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light max-w-2xl mx-auto">
            For over 20 years, defining luxury living through
            architecturally significant custom homes and transformative
            renovations.
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 font-medium hover:bg-gray-100 hover:opacity-100 hover:cursor-pointer dark:hover:text-black transition-colors duration-300">
            EXPLORE OUR WORK
          </button>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Featured Projects */}
      <Projects />

      {/* Services Section */}
      <Services />

      {/* Contact Section */}
      <ContactForm />

      {/* Footer */}
      <Footer />
      </div>
  );
};

export default MiamiDade;
