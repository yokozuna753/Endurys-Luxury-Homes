import TopMedia from "./TopMedia";
import Properties from "./Properties";
import ExclusiveListings from "./ExclusiveListings";
import Footer from "../../Footer/Footer";
import ContactForm from "../../ContactForm/ContactForm";

export default function Pinecrest() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Aerial Background */}
      <TopMedia />

      {/* Properties Section */}
      <section className="section-spacing">
      <Properties />
      </section>

      {/* Exclusive Listings Section */}
      <section className="section-spacing">
      <ExclusiveListings />
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
}
