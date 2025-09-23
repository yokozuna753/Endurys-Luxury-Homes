import React, { useState } from "react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

const ExclusiveListings = () => {
  return (
    <>
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-400 text-sm italic mb-2">Explore Our</p>
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-wider">
              EXCLUSIVE LISTINGS
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Listing 1 */}
            <div className="bg-gray-900 rounded-sm overflow-hidden">
              <div className="relative">
                <div className="h-80 bg-gradient-to-br from-orange-800 via-orange-600 to-red-700"></div>
                <button className="absolute top-4 left-4 text-white hover:text-red-400">
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button className="absolute top-4 right-4 text-white hover:text-red-400">
                  <ChevronRight className="h-6 w-6" />
                </button>
                <button className="absolute top-4 right-14 text-white hover:text-red-400">
                  <Heart className="h-6 w-6" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-2xl font-light text-white">
                    $4,195,000
                  </div>
                  <Heart className="h-6 w-6 text-gray-500" />
                </div>
                <div className="text-gray-400 mb-2">
                  6 Bed(s) • 7 Bath(s) • 5,659 Sq.Ft.
                </div>
                <div className="text-gray-400 text-sm">
                  5922 SW 105th St
                  <br />
                  Pinecrest, FL 33156
                </div>
              </div>
            </div>

            {/* Listing 2 */}
            <div className="bg-gray-900 rounded-sm overflow-hidden">
              <div className="relative">
                <div className="h-80 bg-gradient-to-br from-blue-800 via-teal-600 to-green-700"></div>
                <button className="absolute top-4 left-4 text-white hover:text-red-400">
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button className="absolute top-4 right-4 text-white hover:text-red-400">
                  <ChevronRight className="h-6 w-6" />
                </button>
                <button className="absolute top-4 right-14 text-white hover:text-red-400">
                  <Heart className="h-6 w-6" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-2xl font-light text-white">
                    $7,450,000
                  </div>
                  <Heart className="h-6 w-6 text-gray-500" />
                </div>
                <div className="text-gray-400 mb-2">
                  9 Bed(s) • 7 Bath(s) • 8,433 Sq.Ft.
                </div>
                <div className="text-gray-400 text-sm">
                  9940 W Suburban Dr
                  <br />
                  Pinecrest, FL 33156
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="border border-white text-white px-8 py-3 text-sm font-medium tracking-wide hover:text-black transition-all duration-300 ease-in-out 
             hover:bg-gray-200 hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)]
             hover:scale-105 hover:cursor-pointer">
              View All
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExclusiveListings;
