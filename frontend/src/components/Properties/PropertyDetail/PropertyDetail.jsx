import { Navigate, useParams } from "react-router-dom";
import ContactForm from "../../ContactForm/ContactForm";
import Footer from "../../Footer/Footer";
import { exclusiveProperties } from "../PropertiesArray/exclusiveListings";
import { propertiesObj } from "../PropertiesArray/properties";
import Amenities from "./Amenities";
import Description from "./Description";
import Maps from "./Maps";
import Pictures from "./Pictures";
import TopMedia from "./TopMedia";

export default function PropertyDetail() {
  let { area, id } = useParams();
  id = Number(id);

  const validAreas = ["pinecrest", "miami-dade", "westcoast", "lee"];
  const isValidArea = validAreas.includes(area);

  // Check both regular properties and exclusive properties
  let property = null;
  if (isValidArea) {
    // First check regular properties
    property = propertiesObj[area]?.find((prop) => prop.id == id);

    // If not found in regular properties, check exclusive properties
    if (!property) {
      const exclusiveProps = exclusiveProperties[area] || [];
      property = exclusiveProps.find((prop) => prop.id == id);
    }
  }

  //   ✅ If invalid, route to your NotFound ("*") page
  if (!isValidArea || !property) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <section className="bg-black">
        <div className="mx-auto">
          {/* Hero Section */}
          <TopMedia property={property} />

          {/* Description section */}
          <section className="section-spacing">
            <Description property={property} />
          </section>

          {/* Amenities section */}
          <section className="section-spacing">
            <Amenities property={property} />
          </section>

          {/* Pictures Section */}
          <section className="section-spacing">
            <Pictures property={property} />
          </section>

          {/* Maps section */}
          <section className="section-spacing">
            <Maps property={property} />
          </section>

          <ContactForm />

          {/* Footer section */}
          <Footer />
        </div>
      </section>
    </>
  );
}
