import { Navigate, useParams } from "react-router-dom";
import { propertiesObj } from "../PropertiesArray/properties";
import TopMedia from "./TopMedia";
export default function Description({ property }) {
  return (
    <>
      {" "}
      <section className=" w-full flex items-center justify-center overflow-x-hidden">
        {/* Property => heading, attributes, description ==== MARGIN */}
        <div className="mx-auto">
          {/* Property => heading, attributes, description ==== CONTAINER */}
          <div className="flex flex-col items-center  max-w-7xl mx-auto lg:px-8">
            {" "}
            <h2 className="text-2xl md:text-5xl font-light text-[#c6a15b] tracking-wider mb-8">
              {" "}
              {property.heading}
            </h2>{" "}
            <div className="flex justify-between md:justify-center gap-4 md:gap-16 w-full px-4 mb-8 mt-8">
              {/* Stat 1 */}
              <div className="flex flex-col items-center">
                <div className="font-display text-2xl md:text-4xl font-light text-[#c6a15b] mb-2">
                  {property.sellPrice}{" "}
                </div>
                <div className="text-xs md:text-sm tracking-[0.25em] text-gray-400 uppercase">
                  {property.status}
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center">
                <div className="font-display text-2xl md:text-4xl font-light text-[#c6a15b] mb-2">
                  {property.beds}
                </div>
                <div className="text-xs md:text-sm tracking-[0.25em] text-gray-400 uppercase">
                  Beds
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center">
                <div className="font-display text-2xl md:text-4xl font-light text-[#c6a15b] mb-2">
                  {property.baths}
                </div>
                <div className="text-xs md:text-sm tracking-[0.25em] text-gray-400 uppercase">
                  Baths
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col items-center">
                <div className="font-display text-2xl md:text-4xl font-light text-[#c6a15b] mb-2">
                  {property.livingArea}
                </div>
                <div className="text-xs md:text-sm tracking-[0.25em] text-gray-400 uppercase">
                  Living Size
                </div>
              </div>
            </div>
            <div className="mt-8"> {/* Description */}
                <p className="text-center text-gray-400 font-light leading-loose text-lg max-w-3xl mx-auto">
                    {property.description}
                </p>
            </div>
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </>
  );
}
