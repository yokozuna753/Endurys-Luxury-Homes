import React, { useState } from "react";
import NavBar from "./NavBar";
import Projects from "./Projects";
import Services from "./Services";
import ContactForm from "./ContactForm";
import Footer from "./Footer";


const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}

      <NavBar />

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
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            CRAFTING SOUTH FLORIDA'S
            <br />
            <span className="font-bold">FINEST HOMES</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light max-w-2xl mx-auto">
            For over seven decades, defining luxury living through
            architecturally significant custom homes and transformative
            renovations.
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 font-medium hover:bg-gray-100 transition-colors duration-300">
            EXPLORE OUR WORK
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
                LEGACY BUILT
                <br />
                <span className="font-bold">SINCE 1954</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                From lot acquisition to turnkey delivery, our fully integrated,
                concierge-level approach ensures a seamless, personalized
                experience for discerning clients.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                With a legacy rooted in Pinecrest, Coral Gables, Boca Raton, and
                beyond, Hollub Group is trusted for exceptional craftsmanship,
                lasting value, and relationships that endure.
              </p>
              <button className="bg-gray-900 text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors duration-300">
                LEARN MORE
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80"
                alt="Luxury Interior"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

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

export default HomePage;
