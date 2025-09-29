import { Navigate, useParams } from "react-router-dom";
import { propertiesObj } from "../Properties/PropertiesArray/properties.js";
import TopMedia from "./TopMedia.jsx";
import Description from "./Description.jsx";
import ContactForm from "../ContactForm/ContactForm.jsx";
import Footer from "../Footer/Footer.jsx";
import ShowcaseProperties from "./ShowcaseProperties.jsx";

export default function CustomHomes() {
  //   ✅ If invalid, route to your NotFound ("*") page

  return (
    <>
      <section className="bg-black">
        <div className="mx-auto">
          {/* Hero Section */}
          <TopMedia />

          {/* Description section */}
          <section className="section-spacing">

          <Description />
          </section>

          {/* Amenities section */}
          <section className="section-spacing">
          <ShowcaseProperties />
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
