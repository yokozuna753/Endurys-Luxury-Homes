import { Navigate, useParams } from "react-router-dom";
import { propertiesObj } from "../../PropertiesArray/properties";
import TopMedia from "./TopMedia";
export default function Description({ property }) {

  return (
    <>
      {" "}
      <section className="">
        {/* Property => heading, attributes, description ==== MARGIN */}
        <div className="mx-auto">
          {/* Property => heading, attributes, description ==== CONTAINER */}
          <div className="flex flex-col items-center justify-between justify-center max-w-7xl mx-auto lg:px-8">
            {" "}
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-wider mb-8">
              {" "}
              Enter Property Main Heading
            </h2>{" "}
            <div className="flex justify-center gap-16 w-full mb-8 mt-8">
              {/* Stat 1 */}
              <div className="flex flex-col items-center">
                <div className="text-3xl font-light text-white mb-2">
                  {property.sellPrice}{" "}
                </div>
                <div className="text-sm tracking-widest text-gray-300 uppercase">
                  {property.status}
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center">
                <div className="text-3xl font-light text-white mb-2">
                  {property.beds}
                </div>
                <div className="text-sm tracking-widest text-gray-300 uppercase">
                  Beds
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center">
                <div className="text-3xl font-light text-white mb-2">
                  {property.baths}
                </div>
                <div className="text-sm tracking-widest text-gray-300 uppercase">
                  Baths
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col items-center">
                <div className="text-3xl font-light text-white mb-2">
                  {property.livingArea}
                </div>
                <div className="text-sm tracking-widest text-gray-300 uppercase">
                  Living Size
                </div>
              </div>
            </div>
            <div className="mt-8"> {/* Description */}
                <p className="text-center text-white">
                    {property.description}
                </p>
            </div>
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </>
  );
}
