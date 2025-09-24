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

  const validAreas = ["pinecrest", "miamiDade", "westcoast", "lee"];
  const isValidArea = validAreas.includes(area);
  const property = isValidArea
    ? propertiesObj[area]?.find((prop) => prop.id == id) //
    : null;

  //   ✅ If invalid, route to your NotFound ("*") page
  if (!isValidArea || !property) {
    return <Navigate to="/" replace />;
  }

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
