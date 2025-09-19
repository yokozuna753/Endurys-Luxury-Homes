import { Navigate, useParams } from "react-router-dom";
import { propertiesObj } from "../PropertiesArray/properties";
import heroImage from "../../../assets/Pinecrest/6700-images/back-pool.webp";

export default function PropertyDetail() {

    
    let { area, id } = useParams();
    id = Number(id);
    
    const validAreas = ["pinecrest", "miamiDade", "westcoast"];
    const isValidArea = validAreas.includes(area);
    const property = isValidArea
    ? propertiesObj[area]?.find((prop) => (prop.id) == id) // 
    : null;
    
    console.log(`is the area valid? => ${isValidArea}`);
    console.log(`was the property found? => ${property}`);
    console.log(`is the ID a number? => ${typeof id}`);

//   ✅ If invalid, route to your NotFound ("*") page
  if (!isValidArea || !property) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center ">
        <div className="relative w-full h-full border-20 border-gray-700  overflow-hidden shadow-xl">
          {/* Background image */}
          <img
            src={property?.images[0]}
            alt="Property"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Centered text block */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
            <div className="uppercase tracking-widest text-xs border bg-black/70 px-3 py-1 mb-4">
              Sold
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-wider mb-2">
              6100 W SUBURBAN DRIVE
            </h1>
            <h2 className="text-lg md:text-2xl tracking-wider mb-6">
              PINECREST
            </h2>
          </div>
        </div>
      </section>

      {/* Description section */}
      <section className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Living in Miami-Dade County, FL, is ideal for its peaceful and safe
            environment, perfect for families. It offers excellent public and
            private schools, recognized statewide. The community is surrounded
            by green areas and well-maintained parks, such as Pinecrest Gardens.
            Its location is strategic, close to Miami but away from the urban
            hustle and bustle. It also boasts a high quality of life and
            first-class services.
          </p>
          <button className="border border-white text-white px-8 py-3 text-sm font-medium tracking-wide hover:bg-white hover:text-black transition-colors">
            REQUEST INFORMATION
          </button>
        </div>
      </section>
    </>
  );
}
