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
  let { county, id } = useParams();

  
  id = Number(id);
  
  const validCounties = ["pinecrest", "miami-dade", "lee", "westcoast"];
  const isValidArea = validCounties.includes(county);

  
  // Map URL area to data structure key (same logic as in ExclusiveAll)
  const dataKey =
  county === "miami-dade"
  ? "miami-dade"
  : county === "lee"
  ? "lee"
  : county === "westcoast"
  ? "westcoast"
  // : county === "pinecrest"
  : "pinecrest"
  // : null;
  
  
  const propertyArray = exclusiveProperties[dataKey];
  
  console.log(`ExclusiveProperty.jsx ===>  county: ${county}, ID: ${id}, valid: ${isValidArea}, key: ${dataKey}`);
  console.table(propertyArray);
  
  const property = propertyArray?.find((prop) => prop.id === id);

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
