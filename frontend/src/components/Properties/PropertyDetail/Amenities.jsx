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
          <h2 className="text-3xl md:text-5xl font-light text-[#c6a15b] tracking-wider">
            Amenities
          </h2>
        </div>

        {/* Amenities Flexbox */}
        <div className="max-w-5xl mx-auto px-6 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6 ">
            {amenities.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3"
              >
                <CheckIcon className="h-5 w-5 text-[#c6a15b] mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
