import { Navigate, NavLink, useParams } from "react-router-dom";
import { propertiesObj } from "../Properties/PropertiesArray/properties";
import TopMedia from "./TopMedia";
import { CheckIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

export default function ShowcaseProperties() {

  const navigate = useNavigate();

  const properties = [...propertiesObj["miami-dade"], ...propertiesObj.pinecrest];

return (
    <section className=" bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-light tracking-[0.12em] text-white">
            SHOWCASE PROPERTIES
          </h2>
          <div className="gold-rule"></div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {properties.map((property) => (
            <div key={property.id} className="group flex flex-col items-center text-center">
              <NavLink to={`/properties/${property.location === "miami-dade" ? "miami-dade/miami-dade" : "pinecrest/pinecrest"}/${property.id}`}>
              <img
                src={property.images[0]}
                alt={property.address}
                className="w-full h-80 object-cover mb-6 hover:cursor-pointer group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
                />
                </NavLink>
              <h3 className="font-display text-2xl font-light text-white mb-2 tracking-wide group-hover:text-[#c6a15b] transition-colors duration-500">
                {property.address.split(',')[0].trim()}
              </h3>
              <button
                onClick={()=> navigate(`/properties/${property.location === "miami-dade" ? "miami-dade/miami-dade" : "pinecrest/pinecrest"}/${property.id}`)}
                className="btn-luxury mt-4"
              >
                VIEW HOME
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

