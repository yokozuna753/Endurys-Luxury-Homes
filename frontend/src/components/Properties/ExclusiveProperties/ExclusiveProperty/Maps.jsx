import { Navigate, useParams } from "react-router-dom";
import { propertiesObj } from "../../PropertiesArray/properties";
import TopMedia from "./TopMedia";
import { CheckIcon } from "@heroicons/react/24/solid";

export default function Maps({ property }) {
  const propertyAddress = encodeURIComponent(property?.address?.trim()); // safer than encodeURI

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY?.trim();

  // console.log("API KEY ====>      ", apiKey);

  const googleMapsURL = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${propertyAddress}`
    : "";
    //

  return (
    <section className="">
      <div className="mx-auto">
        {/* Heading */}
        <div className="flex items-center justify-center">
          <h2 className="text-2xl md:text-5xl font-light text-[#c6a15b] tracking-wider">
            Location
          </h2>
        </div>

        {/* Maps Flexbox */}
        <div className="flex flex-col items-center justify-center mt-8">
          <div className="w-full max-w-5xl px-4">
            <iframe
              className="map-top w-full aspect-video ring-1 ring-white/10"
              width="998"
              height="450"
              src={googleMapsURL}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
