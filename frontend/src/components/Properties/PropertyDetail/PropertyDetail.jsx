import { Navigate, useParams } from "react-router-dom";
import { propertiesObj } from "../PropertiesArray/properties";
import TopMedia from "./TopMedia";
import Description from "./Description";
import Amenities from "./Amenities";

export default function PropertyDetail() {
  let { area, id } = useParams();
  id = Number(id);

  const validAreas = ["pinecrest", "miamiDade", "westcoast"];
  const isValidArea = validAreas.includes(area);
  const property = isValidArea
    ? propertiesObj[area]?.find((prop) => prop.id == id) //
    : null;

  console.log(`is the area valid? => ${isValidArea}`);
  console.log(`was the property found? => ${property}`);
  console.log(`is the ID a number? => ${typeof id}`);

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

          {/* Property details section */}
          <Description property={property} />

          {/* Property details section */}
          <Amenities property={property} />
        </div>
      </section>
    </>
  );
}
