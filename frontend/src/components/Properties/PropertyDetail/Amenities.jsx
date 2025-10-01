import { Navigate, useParams } from "react-router-dom";
import { propertiesObj } from "../PropertiesArray/properties";
import TopMedia from "./TopMedia";
import { CheckIcon } from "@heroicons/react/24/solid";

export default function Amenities({ property }) {
  const amenities = [
    "Contemporary Style",
    "Media Room & Office",
    "St. Andrews Country Club",
    "6 Bedroom",
    "Gym & Wellness Center",
    "9,219 AC SQ FT",
    "8.2 Bathroom | 3 Car Garage | Golf Cart Garage",
    "Pool, Spa, and BBQ",
    "11,954 Total SQ FT",
    "Separate Primary Bathrooms & Closets",
    "Elevator",
    "16,169 SQ FT Lot",
  ];

  return (
    <section className="">
      <div className="mx-auto">
        {/* Heading */}
        <div className="flex items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-light text-[#b28f4f] tracking-wider">
            Amenities
          </h2>
        </div>

        {/* Amenities Flexbox */}
        <div className="flex flex-col items-center justify-center xxxxxxs:pl-20 xxxxxs:pl-23 xxxxs:pl-30 xxxs:pl-45 xxs:pl-55 xs:pl-65 s:pl-70 md:pl-35 md-l:pl-50 lg:pl-40 mt-8">
          <div className="flex flex-wrap items-center justify-center w-fit gap-x-12 gap-y-6 ">
            {amenities.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-2 
                           w-full md:w-1/2 lg:w-1/4"
              >
                <CheckIcon className="h-5 w-5 text-white mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
