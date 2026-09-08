import React from "react";
import { pool6290 } from "../../assets/Pinecrest/6290-images";
import { nightShot9669 } from "../../assets/Miami-Dade/9669-images";
import { poolNight11481 } from "../../assets/Miami-Dade/11481-images";
import { Navigate, NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <section id="projects" className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light tracking-[0.08em] mb-4 text-gray-100">
            FEATURED{" "}
            <span className="font-semibold text-[#c6a15b]">PROJECTS</span>
          </h2>
          <div className="gold-rule mb-8"></div>
          <p className="text-gray-300 font-light tracking-wide text-lg max-w-2xl mx-auto">
            Discover our portfolio of exceptional homes across South Florida's
            most prestigious communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="group cursor-pointer inner-spacing">
            <div className="card-media mb-6">
              <NavLink to={`/properties/pinecrest/pinecrest/4`}>
                <img
                  src={pool6290}
                  alt="Pinecrest Mansion"
                  className="w-full h-72 object-cover hover:cursor-pointer"
                />
              </NavLink>
            </div>
            <NavLink to={`/properties/pinecrest/pinecrest/4`}>
              <h3 className="text-2xl font-medium tracking-[0.12em] mb-2 text-white group-hover:text-[#c6a15b] transition-colors duration-500 hover:cursor-pointer">
                PINECREST RESIDENCE
              </h3>
              <p className="text-gray-400 font-light tracking-wide hover:cursor-pointer">
                7 bed / 8 bath Pinecrest Mansion
              </p>
            </NavLink>
          </div>

          {/* Project 2 */}
          <div className="group cursor-pointer inner-spacing">
            <div className="card-media mb-6">
              <NavLink to={`/properties/miami-dade/miami-dade/15`}>
                <img
                  src={poolNight11481}
                  alt="Contemporary Home"
                  className="w-full h-72 object-cover"
                />
              </NavLink>
            </div>
            <NavLink to={`/properties/miami-dade/miami-dade/15`}>
            <h3 className="text-2xl font-medium tracking-[0.12em] uppercase mb-2 text-white group-hover:text-[#c6a15b] transition-colors duration-500">
              Miami Modern Residence
            </h3>
            <p className="text-gray-400 font-light tracking-wide">6 bed / 7 bath Luxury Mansion</p>
            </NavLink>
          </div>

          {/* Project 3 */}
          <div className="group cursor-pointer">
            <div className="card-media mb-6">
              <NavLink to={`/properties/miami-dade/miami-dade/1`}>
              <img
                src={nightShot9669}
                alt="Luxury Villa"
                className="w-full h-72 object-cover"
                />
                </NavLink>
            </div>
            <NavLink to={`/properties/miami-dade/miami-dade/1`}>
            <h3 className="text-2xl font-medium tracking-[0.12em] uppercase mb-2 text-white group-hover:text-[#c6a15b] transition-colors duration-500">
              Miami Luxury Home
            </h3>
            <p className="text-gray-400 font-light tracking-wide">6 bed / 6 bath Premium Home</p>
            </NavLink>
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
