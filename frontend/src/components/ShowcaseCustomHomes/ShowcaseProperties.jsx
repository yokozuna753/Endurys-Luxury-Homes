import { Navigate, NavLink, useParams } from "react-router-dom";
import { propertiesObj } from "../Properties/PropertiesArray/properties";
import TopMedia from "./TopMedia";
import { CheckIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

export default function ShowcaseProperties() {

  const navigate = useNavigate();

  const properties = [...propertiesObj.miamiDade, ...propertiesObj.pinecrest];

return (
    <section className="py-10 mt-14 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}


        {/* Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {properties.map((property) => (
            <div key={property.id} className="group flex flex-col items-center text-center">
              <NavLink to={`/properties/${property.location === "MIAMI-DADE" ? "miami-dade/miamiDade" : "pinecrest/pinecrest"}/${property.id}`}>
              <img
                src={property.images[0]}
                alt={property.address}
                className="w-full h-80 object-cover mb-6 hover:cursor-pointer group-hover:scale-105 transition-transform duration-500"
                />
                </NavLink>
              <h3 className="text-lg font-light text-white mb-2">
                {property.address.split(',')[0].trim()}
              </h3>
              <button
                onClick={()=> navigate(`/properties/${property.location === "MIAMI-DADE" ? "miami-dade/miamiDade" : "pinecrest/pinecrest"}/${property.id}`)}
                className="border border-white text-white px-8 py-4 mt-4 text-sm font-medium tracking-wide hover:text-black transition-all duration-300 ease-in-out
                hover:bg-gray-200 hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)]
                hover:scale-105 hover:cursor-pointer"
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

