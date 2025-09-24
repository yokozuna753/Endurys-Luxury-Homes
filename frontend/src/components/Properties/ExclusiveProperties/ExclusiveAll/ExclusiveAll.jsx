import TopMedia from "./TopMedia.jsx";
import ContactForm from "../../../ContactForm/ContactForm.jsx";
import Footer from "../../../Footer/Footer.jsx";
import ShowcaseProperties from "./ShowcaseProperties.jsx";
import { exclusiveProperties } from "../../PropertiesArray/exclusiveListings.js";
import { useParams } from "react-router";

export default function ExclusiveAll() {
  const { area } = useParams();

  const exclusiveListings =
    exclusiveProperties[
      area.includes("miami-dade")
        ? "miamiDade"
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
