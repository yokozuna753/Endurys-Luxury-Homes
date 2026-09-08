import React, { useState } from "react";
import { useNavigate } from "react-router";
import NavBar from "../NavBar/NavBar";
import About from "./About";
import Slideshow from "./Slideshow";
import Projects from "./Projects";
import { main11035 } from "../../assets/Miami-Dade/11035-images";
import { pool6290 } from "../../assets/Pinecrest/6290-images";
import Services from "./Services";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import "../../index.css";
import FounderMessage from "./FounderMessage";

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
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={pool6290}
            alt="Luxury Home"
            className="w-full h-full object-cover object-[47%] lg:object-[59%] animate-kenburns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-transparent"></div>
        </div>

        {/* Top Hero Content - Title */}
        <div className="relative z-10 text-center pt-28 lg:pt-24 px-4">
          <h1 className="uppercase text-4xl md:text-6xl lg:text-7xl font-light mb-6 lg:mb-7 leading-tight text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.85)] animate-track-in">
            Building South Florida’s
            <br />
            <span className="font-semibold uppercase text-[#dfc08a]">
              Finest Custom Homes
            </span>
          </h1>
          <div className="gold-rule animate-rule-grow"></div>
        </div>

        {/* Bottom Hero Content - Description & Button */}
        <div className="relative z-10 text-center pb-20 px-4 bg-gradient-to-t from-black via-black/50 to-transparent pt-32">
          <p className="scroll-animate animate-fade-in-up delay-500 text-lg text-gray-100 md:text-xl mb-12 font-light tracking-wide max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            For almost 20 years, defining luxury living through architecturally
            significant custom homes and transformative renovations.
          </p>
          <div className="scroll-animate animate-fade-in-up delay-700">
            <button
              onClick={() => navigate("/our-work/showcase-custom-homes")}
              className="btn-luxury mb-8"
            >
              EXPLORE OUR WORK
            </button>
          </div>
          <div
            className="mx-auto w-px h-12 bg-gradient-to-b from-[#c6a15b] to-transparent animate-float"
            aria-hidden="true"
          ></div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-spacing">
        <About />
      </section>
      {/* Founder Message Section */}
      <section className="section-spacing">
        <FounderMessage />
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
