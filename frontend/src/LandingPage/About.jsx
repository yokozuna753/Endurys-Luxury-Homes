const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
              LEGACY BUILT
              <br />
              <span className="font-bold">SINCE 1954</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              From lot acquisition to turnkey delivery, our fully integrated,
              concierge-level approach ensures a seamless, personalized
              experience for discerning clients.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              With a legacy rooted in Pinecrest, Coral Gables, Boca Raton, and
              beyond, Hollub Group is trusted for exceptional craftsmanship,
              lasting value, and relationships that endure.
            </p>
            <button className="bg-gray-900 text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors duration-300">
              LEARN MORE
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80"
              alt="Luxury Interior"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
