import { Navigate, useParams } from "react-router-dom";
import { propertiesObj } from "../PropertiesArray/properties";
import TopMedia from "./TopMedia";

export default function Description({property}) {
    console.log(`Here is the property ===>   ${property}`);
  return (
    <>
      <section className="py-16">
        <div className="mx-auto">
          <div className="flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-wider mb-8">Property Heading</h2>
          </div>
        </div>
      </section>
    </>
  );
}
