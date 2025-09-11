import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900">
            FEATURED <span className="font-bold">PROJECTS</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our portfolio of exceptional homes across South Florida's
            most prestigious communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden mb-4">
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Modern Estate"
                className="w-full h-64 object-cover dark:opacity-100 brightness-100 group-hover:scale-105  transition-transform duration-500"
              />
              <div className="absolute inset-0 group-hover:bg-black/40 transition-colors duration-300"></div>
            </div>
            <h3 className="text-xl font-medium mb-2 text-gray-900">
              PONCE DAVIS ESTATE
            </h3>
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
              <div className="absolute inset-0 group-hover:bg-black/40 transition-colors duration-300"></div>
            </div>
            <h3 className="text-xl font-medium mb-2 text-gray-900">
              CORAL GABLES RESIDENCE
            </h3>
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
              <div className="absolute inset-0 group-hover:bg-black/40 transition-colors duration-300"></div>
            </div>
            <h3 className="text-xl font-medium mb-2 text-gray-900">
              BOCA RATON VILLA
            </h3>
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
  );
};

export default Projects;
