import { Navigate, useParams } from "react-router-dom";
import { propertiesObj } from "../Properties/PropertiesArray/properties";
import heroImage from "../../assets/Pinecrest/6700-images/back-pool.webp";

export default function TopMedia() {
  
  const property = propertiesObj.pinecrest;

  console.log(`Property here: ${property}`);
    
    // const propertyAddress = property.address.split(',')[0].trim();

  return (
    <>

          {/* Hero Section */}
          <section className="relative w-full h-[90vh] flex items-center justify-center ">
            <div className="relative w-full h-200   overflow-hidden shadow">
              {/* Background image */}
              <img
                src={heroImage}
                alt="Property"
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-60"></div>

              {/* Centered text block */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-semibold tracking-wider mb-2">
                  CUSTOM HOMES
                </h1>
              </div>
            </div>
          </section>

    </>
  );
}
