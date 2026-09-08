import { Navigate } from "react-router-dom";

export default function TopMedia({ property }) {

  // If property not found, show fallback or return early
  // if (!property) {
  //   console.log("TopMedia - No property provided");
  //   return <Navigate to="/" replace />;
  // }

  const propertyAddress = property.address?.split(",")[0]?.trim() || "Property Address";

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full overflow-hidden">
          {/* Background image */}
          <img
            src={property?.images?.[0]}
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
            <h2 className="scroll-animate animate-fade-in-up delay-500 text-lg md:text-2xl tracking-[0.3em] mb-6 uppercase text-gray-200">
              {property.location}
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
