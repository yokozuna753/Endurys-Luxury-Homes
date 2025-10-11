import React from "react";
import Footer from "../../Footer/Footer";
import ExclusiveListings from "./ExclusiveListings";
import Properties from "./Properties";

const Lee = () => { // ! COMPONENT WONT BE USED
  return (
    <section className="bg-black">
      <div className="mx-auto">
        {/* Properties section */}
        <Properties />

        {/* Exclusive Listings section */}
        <ExclusiveListings />

        {/* Footer section */}
        <Footer />
      </div>
    </section>
  );
};

export default Lee;
