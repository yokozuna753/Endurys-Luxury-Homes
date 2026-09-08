import vid10801house from "../../../assets/Pinecrest/video/10801-pinecrest.mp4";
import { useNavigate } from "react-router-dom";

const TopMedia = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative h-screen overflow-hidden">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
        >
          <source src={vid10801house} type="video/mp4" />
        </video>

        {/* Overlay for depth & readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80"></div>

        {/* Centered text */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-6xl md:text-8xl font-light text-white mb-4 animate-track-in drop-shadow-[0_4px_18px_rgba(0,0,0,0.85)]">
            OUR PROPERTIES
          </h1>
          <div className="gold-rule animate-rule-grow mb-8"></div>
          <h2 className="scroll-animate animate-fade-in-up delay-500 text-4xl md:text-5xl font-light text-[#dfc08a] tracking-[0.2em]">
            PINECREST
          </h2>
        </div>
      </section>

      {/* Pinecrest Description */}
      <section className="bg-black section-spacing">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-300 font-light leading-loose tracking-wide mb-10">
            Living in Pinecrest, FL, is ideal for its peaceful and safe
            environment, perfect for families. It offers excellent public and
            private schools, recognized statewide. The community is surrounded
            by green areas and well-maintained parks. Its location is strategic,
            close to Miami but away from the urban hustle and bustle. It also
            boasts a high quality of life and first-class services.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="btn-luxury"
          >
            REQUEST INFORMATION
          </button>
        </div>
      </section>
    </>
  );
};

export default TopMedia;
