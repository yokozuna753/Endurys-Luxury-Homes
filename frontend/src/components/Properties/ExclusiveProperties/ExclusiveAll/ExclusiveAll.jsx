import TopMedia from "./TopMedia.jsx";
import ContactForm from "../../../ContactForm/ContactForm.jsx";
import Footer from "../../../Footer/Footer.jsx";
import ShowcaseProperties from "./ShowcaseProperties.jsx";
import { exclusiveProperties } from "../../PropertiesArray/exclusiveListings.js";
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";

export default function ExclusiveAll() {
  const { county } = useParams();

  const validAreas = ["pinecrest", "miami-dade", "lee", "westcoast"];
  const isValidArea = validAreas.includes(county);

  const dataKey =
    county === "miami-dade"
      ? "miami-dade"
      : county === "lee"
      ? "lee"
      : county === "pinecrest"
      ? "pinecrest"
      : null;

  const exclusiveListings = isValidArea && exclusiveProperties[dataKey]; // get the :area in the url and access the array of objects

    if (!isValidArea || !exclusiveListings) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <section className="bg-black">
        <div className="mx-auto">
          {/* Hero Section */}
          <TopMedia />

          {/* Amenities section */}
          <section className="section-spacing">
            <ShowcaseProperties properties={exclusiveListings} />
          </section>

          {/* Contact Form Section */}
          <ContactForm />

          {/* Footer section */}
          <Footer />
        </div>
      </section>
    </>
  );
}
