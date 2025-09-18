import TopMedia from './TopMedia';
import Properties from './Properties';
import ExclusiveListings from './ExclusiveListings';
import Footer from './Footer';

export default function MiamiDade() {

  return (
    <div className="min-h-screen bg-white text-black">

      {/* Hero Section with Aerial Background */}
        <TopMedia />

      {/* Properties Section */}
        <Properties />

      {/* Exclusive Listings Section */}
        <ExclusiveListings />

      {/* Footer */}
        <Footer/>
    </div>
  );
}