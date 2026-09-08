import { NavLink, useNavigate } from "react-router-dom";
import ContactForm from "../../../ContactForm/ContactForm";
import Footer from "../../../Footer/Footer";
import { exclusiveProperties } from "../../PropertiesArray/exclusiveListings";
export default function ExclusiveListingsAll() {
  const navigate = useNavigate();

  // Get all exclusive properties from all counties
  const allExclusiveProperties = [];

  for (let county in exclusiveProperties) {
    for (let property of exclusiveProperties[county]) {
      allExclusiveProperties.push(property);
    }
  }

  return (
    <section className="bg-black pt-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm italic mb-2">Explore Our</p>
          <h2 className="text-4xl md:text-5xl font-light text-[#c6a15b] tracking-wider mb-8">
            EXCLUSIVE LISTINGS
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Discover our handpicked collection of premium properties available
            exclusively through Endurys Luxury Homes
          </p>
        </div>

        {/* Property Grid */}
        {allExclusiveProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {allExclusiveProperties.map((property) => {
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
                  key={`${property.id}-${property.location}`}
                  className="group flex flex-col items-center text-center"
                >
                  <NavLink to={propertyRoute}>
                    <img
                      src={property.images[0]}
                      alt={property.address}
                      className="w-full h-80 object-cover mb-6 hover:cursor-pointer group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
                    />
                  </NavLink>

                  <div className="w-full">
                    <span className="inline-block text-xs tracking-[0.3em] border border-[#c6a15b]/70 text-[#c6a15b] px-4 py-1.5 mb-3">
                      EXCLUSIVE
                    </span>

                    <h3 className="font-display text-2xl font-light text-white mb-2 tracking-wide group-hover:text-[#c6a15b] transition-colors duration-500">
                      {property.address.split(",")[0].trim()}
                    </h3>

                    <p className="text-sm text-gray-400 mb-2 capitalize">
                      {property.location === "miami-dade"
                        ? "Miami-Dade County"
                        : property.location === "lee"
                        ? "Lee County"
                        : property.location}
                    </p>

                    <div className="text-xl font-light text-[#c6a15b] mb-4">
                      {property.sellPrice}
                    </div>

                    <div className="text-sm text-gray-400 mb-4">
                      {property.beds} Bed • {property.baths} Bath •{" "}
                      {property.livingArea} Sq.Ft.
                    </div>

                    <button
                      onClick={() => navigate(propertyRoute)}
                      className="btn-luxury mt-4 w-full"
                    >
                      VIEW HOME
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center text-white py-16">
            <p className="text-lg">
              No exclusive listings available at this time.
            </p>
          </div>
        )}
      </div>
      {/* Contact Form*/}
      <section className="section-spacing">
        <ContactForm />
      </section>

      <Footer />
    </section>
  );
}
