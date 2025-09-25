import { Navigate, useParams } from "react-router-dom";
import { exclusiveProperties } from "../../PropertiesArray/exclusiveListings";
import TopMedia from "./TopMedia";
import Description from "./Description";
import Amenities from "./Amenities";
import Pictures from "./Pictures";
import Maps from "./Maps";
import Footer from "../../../Footer/Footer";
import ContactForm from "../../../ContactForm/ContactForm";

export default function ExclusiveProperty() {
  let { area, id } = useParams();

  id = Number(id);

  const validAreas = ["pinecrest", "miami-dade", "lee", "westcoast"];
  const isValidArea = validAreas.includes(area);

  // TEMPORARILY DISABLE THIS REDIRECT
  // if (!isValidArea) {
  //   console.log(`Invalid area: ${area}`);
  //   return <Navigate to="/" replace />;
  // }

  // Map URL area to data structure key (same logic as in ExclusiveAll)
  const dataKey =
    area === "miami-dade"
      ? "miamiDade"
      : area === "lee"
      ? "lee"
      : area === "pinecrest"
      ? "pinecrest"
      : null;

  // TEMPORARILY DISABLE THIS REDIRECT
  // if (!dataKey) {
  //   console.log(`No data key found for area: ${area}`);
  //   return <Navigate to="/" replace />;
  // }

  // Use the mapped key to access the data
  const propertyArray = exclusiveProperties[dataKey];

  // TEMPORARILY DISABLE THIS REDIRECT
  // if (!propertyArray) {
  //   console.log(`No properties found for key: ${dataKey}`);
  //   return <Navigate to="/" replace />;
  // }

  const property = propertyArray?.find((prop) => prop.id === id);

  // TEMPORARILY DISABLE THIS REDIRECT
  // if (!property) {
  //   console.log(`Property with ID ${id} not found in ${dataKey}`);
  //   return <Navigate to="/" replace />;
  // }

  return (
    <>
      <section className="bg-black">
        <div className="mx-auto">
          {/* Hero Section */}
          <TopMedia property={property} />
          {/* Description section */}
          <Description property={property} />
          {/* Amenities section */}
          <Amenities property={property} />
          {/* Pictures Section */}
          <Pictures property={property} />
          {/* Maps section */}
          <Maps property={property} />
          <ContactForm />
          {/* Footer section */}
          <Footer />
        </div>
      </section>
    </>
  );
}
