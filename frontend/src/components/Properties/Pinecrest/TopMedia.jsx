import vid6290house from "../../../assets/Miami-Dade/video/6290-pinecrest.mp4";

const TopMedia = () => {
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
          <source src={vid6290house} type="video/mp4" />
        </video>

        {/* Centered text */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-6xl md:text-8xl font-light text-white mb-4 tracking-wider">
            AVAILABLE PROPERTIES
          </h1>
          <h2 className="text-5xl md:text-6xl font-light text-white tracking-wider">
            PINECREST
          </h2>
        </div>
      </section>

      {/* Pinecrest Description */}
      <section className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Living in Miami-Dade County, FL, is ideal for its peaceful and safe
            environment, perfect for families. It offers excellent public and
            private schools, recognized statewide. The community is surrounded
            by green areas and well-maintained parks, such as Pinecrest Gardens.
            Its location is strategic, close to Miami but away from the urban
            hustle and bustle. It also boasts a high quality of life and
            first-class services.
          </p>
          <button className="border border-white text-white px-8 py-3 text-sm font-medium tracking-wide hover:bg-white hover:text-black transition-colors">
            REQUEST INFORMATION
          </button>
        </div>
      </section>
    </>
  );
};

export default TopMedia;
