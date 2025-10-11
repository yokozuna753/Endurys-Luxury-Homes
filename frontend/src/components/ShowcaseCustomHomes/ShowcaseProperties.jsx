import { Navigate, NavLink, useParams } from "react-router-dom";
import { propertiesObj } from "../Properties/PropertiesArray/properties";
import { exclusiveProperties } from "../Properties/PropertiesArray/exclusiveListings";
import TopMedia from "./TopMedia";
import { CheckIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

export default function ShowcaseProperties() {

  const navigate = useNavigate();

  // get the exclusive properties object
  // turn all of the properties into an array 
  // any properties that have the same address should only exist once
    // create a set
    // iterate through the properties in exclusive Props
    // if the property address is not in the set, add it to the set

const tempProperties = [];
const propertiesSet = new Set();
const exclusiveProps = [];

for(let county in exclusiveProperties){
  tempProperties.push(...exclusiveProperties[county]);
}

for(let property of tempProperties){
  if(!(propertiesSet.has(property.address))){
    propertiesSet.add(property.address)
    exclusiveProps.push(property);
  }
}

  const properties = [...propertiesObj["miami-dade"], ...propertiesObj.pinecrest, ...exclusiveProps];

return (
    <section className=" bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}


        {/* Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {properties.map((property) => (
            <div key={property.id} className="group flex flex-col items-center text-center">
              <NavLink to={`/properties/${property.location === "miami-dade" ? "miami-dade/miami-dade" : "pinecrest/pinecrest"}/${property.id}`}>
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
                onClick={()=> navigate(`/properties/${property.location === "miami-dade" ? "miami-dade/miami-dade" : "pinecrest/pinecrest"}/${property.id}`)}
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

