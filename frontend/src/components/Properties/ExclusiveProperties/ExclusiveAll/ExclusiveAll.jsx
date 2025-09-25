import TopMedia from "./TopMedia.jsx";
import ContactForm from "../../../ContactForm/ContactForm.jsx";
import Footer from "../../../Footer/Footer.jsx";
import ShowcaseProperties from "./ShowcaseProperties.jsx";
import { exclusiveProperties } from "../../PropertiesArray/exclusiveListings.js";
import { useParams } from "react-router";

export default function ExclusiveAll() {
  const { county } = useParams();

  const validAreas = ["pinecrest", "miami-dade", "lee", "westcoast"];
  const isValidArea = validAreas.includes(county);

  const exclusiveListings = // get the :area in the url and access the array of objects
  isValidArea &&
    exclusiveProperties[
      county.includes("miami-dade")
        ? "miami-dade"
        : area.includes("lee")
        ? "lee"
        : "pinecrest"
    ];

  return (
    <>
      <section className="bg-black">
        <div className="mx-auto">
          {/* Hero Section */}
          <TopMedia />

          {/* Amenities section */}
          <ShowcaseProperties properties={exclusiveListings} />

          {/* Contact Form Section */}
          <ContactForm />

          {/* Footer section */}
          <Footer />
        </div>
      </section>
    </>
  );
}
