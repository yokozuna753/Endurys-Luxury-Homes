import { Navigate, useParams } from "react-router-dom";
import { propertiesObj } from "../Properties/PropertiesArray/properties.js";
import TopMedia from "./TopMedia";
import Description from "./Description";
import Amenities from "./Amenities";
import Pictures from "./Pictures";
import Maps from "./Maps";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";

export default function CustomHomes() {

  //   ✅ If invalid, route to your NotFound ("*") page

  return (
    <>
      <section className="bg-black">
        <div className="mx-auto">
          {/* Hero Section */}
          <TopMedia />

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
