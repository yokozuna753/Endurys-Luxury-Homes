

const TopMedia = () => {

  return (
    <>
      {/* Hero Section with Aerial Background */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMkY0RjRGIi8+CjxjaXJjbGUgY3g9IjQwMCIgY3k9IjMwMCIgcj0iODAiIGZpbGw9IiMzRjVGM0YiLz4KPGNpcmNsZSBjeD0iODAwIiBjeT0iNjAwIiByPSIxMDAiIGZpbGw9IiMzRjVGM0YiLz4KPGNpcmNsZSBjeD0iMTIwMCIgY3k9IjQwMCIgcj0iNjAiIGZpbGw9IiMzRjVGM0YiLz4KPC9zdmc+')`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-light text-white mb-4 tracking-wider">
              AVAILABLE PROPERTIES
            </h1>
          </div>
        </div>

        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
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
