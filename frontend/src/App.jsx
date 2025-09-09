import React, { useState } from 'react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev)=> !prev);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">Endurys Luxury Homes</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-gray-900 font-medium">HOME</a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium">ABOUT</a>
              <a href="#projects" className="text-gray-700 hover:text-gray-900 font-medium">PROJECTS</a>
              <a href="#services" className="text-gray-700 hover:text-gray-900 font-medium">SERVICES</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium">CONTACT</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-gray-900">HOME</a>
                <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-gray-900">ABOUT</a>
                <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-gray-900">PROJECTS</a>
                <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-gray-900">SERVICES</a>
                <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900">CONTACT</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
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
            For over seven decades, defining luxury living through architecturally significant custom homes and transformative renovations.
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
                From lot acquisition to turnkey delivery, our fully integrated, concierge-level approach ensures a seamless, personalized experience for discerning clients.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                With a legacy rooted in Pinecrest, Coral Gables, Boca Raton, and beyond, Hollub Group is trusted for exceptional craftsmanship, lasting value, and relationships that endure.
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
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900">
              FEATURED <span className="font-bold">PROJECTS</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our portfolio of exceptional homes across South Florida's most prestigious communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Modern Estate"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-900">PONCE DAVIS ESTATE</h3>
              <p className="text-gray-600">6 bed / 7 bath Modern Farmhouse</p>
            </div>

            {/* Project 2 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80"
                  alt="Contemporary Home"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-900">CORAL GABLES RESIDENCE</h3>
              <p className="text-gray-600">Custom Contemporary Design</p>
            </div>

            {/* Project 3 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Luxury Villa"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-900">BOCA RATON VILLA</h3>
              <p className="text-gray-600">Luxury Mediterranean Style</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-gray-900 text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors duration-300">
              VIEW ALL PROJECTS
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900">
              OUR <span className="font-bold">SERVICES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🏗️</span>
              </div>
              <h3 className="text-xl font-medium mb-4 text-gray-900">CUSTOM HOMES</h3>
              <p className="text-gray-600">From concept to completion, we craft architecturally significant custom homes.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🔨</span>
              </div>
              <h3 className="text-xl font-medium mb-4 text-gray-900">RENOVATIONS</h3>
              <p className="text-gray-600">Transformative renovations that enhance and modernize existing properties.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-medium mb-4 text-gray-900">PROJECT MANAGEMENT</h3>
              <p className="text-gray-600">Full-service project management from lot acquisition to turnkey delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
            START YOUR <span className="font-bold">JOURNEY</span>
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Ready to build your dream home? Contact us today to discuss your vision and learn how we can bring it to life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
              />
            </div>
          </div>

          <div className="mb-8">
            <textarea 
              rows="5" 
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors resize-none"
            ></textarea>
          </div>

          <button className="bg-gray-900 text-white px-12 py-4 font-medium hover:bg-gray-800 transition-colors duration-300">
            SEND MESSAGE
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">HOLLUB GROUP</h3>
              <p className="text-gray-400 mb-4">
                Building South Florida's finest homes since 1954.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4">CONTACT INFO</h4>
              <p className="text-gray-400 mb-2">Miami, Florida</p>
              <p className="text-gray-400 mb-2">(305) 555-5555</p>
              <p className="text-gray-400">info@endurysluxuryhomes.com</p>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4">QUICK LINKS</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About</a>
                <a href="#projects" className="block text-gray-400 hover:text-white transition-colors">Projects</a>
                <a href="#services" className="block text-gray-400 hover:text-white transition-colors">Services</a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8 text-center">
            <p className="text-gray-400">
              © 2025 Endurys Luxury Homes. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;