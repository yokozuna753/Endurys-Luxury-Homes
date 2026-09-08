import React from "react";
import { Link } from "react-router-dom";
import { exclusiveProperties } from "../PropertiesArray/exclusiveListings";

const Properties = () => {
  const leeProperties = exclusiveProperties.lee || [];

  return (
    <>
      <section className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-light text-[#c6a15b] tracking-[0.15em] mb-8">
              LEE COUNTY PROPERTIES
            </h2>
          </div>

          {leeProperties.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {leeProperties.map((property) => (
                <div key={property.id} className="group">
                  <div className="card-media mb-6">
                    <div className="h-70 bg-[#131313]">
                      <Link
                        to={`/properties/lee/lee/${property.id}`}
                        className="hover:cursor-pointer"
                      >
                        <img
                          src={property.images[0]}
                          className="w-full h-full object-cover"
                          alt={property.address}
                        />
                      </Link>
                    </div>
                  </div>
                  <Link
                    to={`/properties/lee/lee/${property.id}`}
                    className="hover:cursor-pointer"
                  >
                    <h3 className="text-2xl font-light text-white text-center tracking-[0.15em] group-hover:text-[#c6a15b] transition-colors duration-500">
                      {property.address.split(",")[0].trim()}
                    </h3>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-white">
              <p className="text-lg">
                No properties available in Lee County at this time.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Properties;
