import TopMedia from './TopMedia';
import Properties from './Properties';
import ExclusiveListings from './ExclusiveListings';
import Footer from '../../Footer/Footer';
import ContactForm from '../../ContactForm/ContactForm';

export default function MiamiDade() {

  return (
    <div className="min-h-screen bg-black text-black">

      {/* Hero Section with Aerial Background */}
        <TopMedia />

      {/* Properties Section */}
        <Properties />

      {/* Exclusive Listings Section */}
        <ExclusiveListings />

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
        <Footer/>
    </div>
  );
}