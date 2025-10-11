import { NavLink, useNavigate } from "react-router-dom";
import { exclusiveProperties } from "../Properties/PropertiesArray/exclusiveListings";
import { propertiesObj } from "../Properties/PropertiesArray/properties";

export default function ShowcaseProperties() {
  const navigate = useNavigate();

  // Get all properties and remove duplicates by address
  const allProperties = [
    ...propertiesObj["miami-dade"],
    ...propertiesObj.pinecrest,
  ];

  // Add exclusive properties, but skip duplicates
  const seenAddresses = new Set();
  const exclusiveProps = [];

  for (let county in exclusiveProperties) {
    for (let property of exclusiveProperties[county]) {
      if (!seenAddresses.has(property.address)) {
        seenAddresses.add(property.address);
        exclusiveProps.push(property);
      }
    }
  }

  const properties = [...allProperties, ...exclusiveProps];

  return (
    <section className=" bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}

        {/* Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {properties.map((property) => {
            // Determine the correct route based on location
            const getRoute = (property) => {
              if (property.location === "miami-dade") {
                return `/properties/miami-dade/miami-dade/${property.id}`;
              } else if (property.location === "pinecrest") {
                return `/properties/pinecrest/pinecrest/${property.id}`;
              } else if (property.location === "lee") {
                return `/properties/lee/lee/${property.id}`;
              } else if (property.location === "westcoast") {
                return `/properties/westcoast/westcoast/${property.id}`;
              }
              return `/properties/${property.location}/${property.location}/${property.id}`;
            };

            const propertyRoute = getRoute(property);

            return (
              <div
                key={property.id}
                className="group flex flex-col items-center text-center"
              >
                <NavLink to={propertyRoute}>
                  <img
                    src={property.images[0]}
                    alt={property.address}
                    className="w-full h-80 object-cover mb-6 hover:cursor-pointer group-hover:scale-105 transition-transform duration-500"
                  />
                </NavLink>
                <h3 className="text-lg font-light text-white mb-2">
                  {property.address.split(",")[0].trim()}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-gray-300 capitalize">
                    {property.status.toLowerCase()}
                  </span>
                </div>
                <button
                  onClick={() => navigate(propertyRoute)}
                  className="border border-white text-white px-8 py-4 mt-4 text-sm font-medium tracking-wide hover:text-black transition-all duration-300 ease-in-out
                  hover:bg-gray-200 hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)]
                  hover:scale-105 hover:cursor-pointer"
                >
                  VIEW HOME
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
