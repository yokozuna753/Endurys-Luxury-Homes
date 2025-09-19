import { Navigate, useParams } from "react-router-dom";
import { propertiesObj } from "../PropertiesArray/properties";
import TopMedia from "./TopMedia";


export default function Amenities({ property }) {
  return (
    <>
      {" "}
      <section className="pt-10 mt-12">

        <div className="mx-auto"> {/* Property => Amenities ==== MARGIN */}
          
        <div className="flex items-center justify-center "> {/* Property => Amenities ==== CONTAINER */}
          {" "}
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-wider">
            Amenities
          </h2>
        </div>{" "}


        </div>{" "}
      </section>{" "}
    </>
  );
}
