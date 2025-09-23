import { Navigate, useParams } from "react-router-dom";
import { propertiesObj } from "../Properties/PropertiesArray/properties";
import heroImage from "../../assets/Pinecrest/6700-images/back-pool.webp";

export default function TopMedia() {
  let { area, id } = useParams();
  id = Number(id);

  const validAreas = ["pinecrest", "miamiDade", "westcoast"];
  const isValidArea = validAreas.includes(area);
  const property = isValidArea
    ? propertiesObj[area]?.find((prop) => prop.id == id) //
    : null;

    
    //   ✅ If invalid, route to your NotFound ("*") page
    if (!isValidArea || !property) {
      return <Navigate to="/" replace />;
    }
    
    const propertyAddress = property.address.split(',')[0].trim();

  return (
    <>

          {/* Hero Section */}
          <section className="relative w-full h-[90vh] flex items-center justify-center ">
            <div className="relative w-full h-full border-20 border-gray-700  overflow-hidden shadow">
              {/* Background image */}
              <img
                src={property?.images[0]}
                alt="Property"
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-60"></div>

              {/* Centered text block */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
                <div className="uppercase tracking-widest text-xs border bg-black/70 px-3 py-1 mb-4">
                  {property.status}
                </div>
                <h1 className="text-4xl md:text-6xl font-semibold tracking-wider mb-2">
                  {propertyAddress}
                </h1>
                <h2 className="text-lg md:text-2xl tracking-wider mb-6">
                  {property.location}
                </h2>
              </div>
            </div>
          </section>

    </>
  );
}
