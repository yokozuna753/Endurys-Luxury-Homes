import React from "react";
import { pool6290 } from "../../assets/Pinecrest/6290-images";
import { nightShot9669 } from "../../assets/Miami-Dade/9669-images";
import { poolNight11481 } from "../../assets/Miami-Dade/11481-images";

const Projects = () => {
  return (
    <section id="projects" className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-100">
            FEATURED <span className="font-bold text-[#b28f4f]">PROJECTS</span>
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Discover our portfolio of exceptional homes across South Florida's
            most prestigious communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="group cursor-pointer inner-spacing">
            <div className="relative overflow-hidden mb-4">
              <img
                src={pool6290}
                alt="Pinecrest Mansion"
                className="w-full h-64 object-cover dark:opacity-100 brightness-100 group-hover:scale-105  transition-transform duration-500"
              />
              <div className="absolute inset-0 group-hover:bg-black/40 transition-colors duration-300"></div>
            </div>
            <h3 className="text-xl font-medium mb-2 text-white">
              PINECREST RESIDENCE
            </h3>
            <p className="text-white">7 bed / 8 bath Pinecrest Mansion</p>
          </div>

          {/* Project 2 */}
          <div className="group cursor-pointer inner-spacing">
            <div className="relative overflow-hidden mb-4">
              <img
                src={poolNight11481}
                alt="Contemporary Home"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 group-hover:bg-black/40 transition-colors duration-300"></div>
            </div>
            <h3 className="text-xl font-medium mb-2 text-white">
              Miami Modern Residence
            </h3>
            <p className="text-white">6 bed / 7 bath Luxury Mansion</p>
          </div>

          {/* Project 3 */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden mb-4">
              <img
                src={nightShot9669}
                alt="Luxury Villa"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 group-hover:bg-black/40 transition-colors duration-300"></div>
            </div>
            <h3 className="text-xl font-medium mb-2 text-white">
              Miami Luxury Home
            </h3>
            <p className="text-white">6 bed / 6 bath Premium Home</p>
          </div>
        </div>

        {/* <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-3 font-medium hover:bg-gray-800 transition-all duration-300 ease-in-out 
             hover:bg-gray-200 hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)]
             hover:scale-105 hover:cursor-pointer">
            VIEW ALL PROJECTS
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
