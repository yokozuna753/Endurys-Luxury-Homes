import TopMedia from "./TopMedia.jsx";
import ContactForm from "../ContactForm/ContactForm.jsx";
import Footer from "../Footer/Footer.jsx";
import ShowcaseProperties from "./ShowcaseProperties.jsx";

export default function ShowcaseCustomHomes() {
  //   ✅ If invalid, route to your NotFound ("*") page

  return (
    <>
      <section className="bg-black">
        <div className="mx-auto">
          {/* Hero Section */}
          <TopMedia />

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
