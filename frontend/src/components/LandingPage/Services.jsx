

const Services = () => {

    return (
        <section id="services" className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-light tracking-[0.08em] mb-4 text-gray-100">
              OUR <span className="font-semibold text-[#c6a15b]">SERVICES</span>
            </h2>
            <div className="gold-rule"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="service-tile">
              <div className="service-icon">
                <span className="text-white text-4xl">🏗️</span>
              </div>
              <h3 className="text-2xl font-medium tracking-[0.15em] mb-4 text-white">
                CUSTOM HOMES
              </h3>
              <p className="text-gray-400 font-light leading-loose">
                From concept to completion, we craft architecturally significant
                custom homes.
              </p>
            </div>

            <div className="service-tile">
              <div className="service-icon">
                <span className="text-white text-4xl">🔨</span>
              </div>
              <h3 className="text-2xl font-medium tracking-[0.15em] mb-4 text-white">
                RENOVATIONS
              </h3>
              <p className="text-gray-400 font-light leading-loose">
                Transformative renovations that enhance and modernize existing
                properties.
              </p>
            </div>

            <div className="service-tile">
              <div className="service-icon">
                <span className="text-white text-4xl">🎯</span>
              </div>
              <h3 className="text-2xl font-medium tracking-[0.15em] mb-4 text-white uppercase">
                Turnkey Luxury Living
              </h3>
              <p className="text-gray-400 font-light leading-loose">
                Complete luxury homes with professionally designed interiors, premium landscaping, and move-in ready convenience.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Services;