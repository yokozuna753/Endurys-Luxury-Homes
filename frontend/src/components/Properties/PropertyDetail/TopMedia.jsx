import { Navigate, useParams } from "react-router-dom";
import { propertiesObj } from "../PropertiesArray/properties";
import heroImage from "../../../assets/Pinecrest/6700-images/back-pool.webp";

export default function TopMedia({property}) {
    
    const propertyAddress = property.address.split(',')[0].trim();

  return (
    <>

          {/* Hero Section */}
          <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full overflow-hidden">
              {/* Background image */}
              <img
                src={property?.images[0]}
                alt="Property"
                className="w-full h-full object-cover animate-kenburns"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/85"></div>

              {/* Centered text block */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
                <div className="hero-chip scroll-animate animate-fade-in-up">
                  {property.status}
                </div>
                <h1 className="text-5xl md:text-7xl font-medium mb-2 animate-track-in drop-shadow-[0_4px_18px_rgba(0,0,0,0.85)]">
                  {propertyAddress}
                </h1>
                <div className="gold-rule animate-rule-grow mb-6"></div>
                <h2 className="scroll-animate animate-fade-in-up delay-500 text-lg md:text-2xl tracking-[0.3em] uppercase mb-6 text-gray-200">
                  {property.location === "miami-dade" ? "Miami-Dade" : property.location}
                </h2>
              </div>
            </div>
          </section>

    </>
  );
}
