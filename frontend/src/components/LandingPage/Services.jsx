

const Services = () => {

    return (
        <section id="services" className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-white">
              OUR <span className="font-bold">SERVICES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center ">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-5xl">🏗️</span>
              </div>
              <h3 className="text-xl font-medium mb-4 text-white">
                CUSTOM HOMES
              </h3>
              <p className="text-white">
                From concept to completion, we craft architecturally significant
                custom homes.
              </p>
            </div>

            <div className="text-center ">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-5xl">🔨</span>
              </div>
              <h3 className="text-xl font-medium mb-4 text-white">
                RENOVATIONS
              </h3>
              <p className="text-white">
                Transformative renovations that enhance and modernize existing
                properties.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-5xl">🎯</span>
              </div>
              <h3 className="text-xl font-medium mb-4 text-white uppercase">
                Turnkey Luxury Living
              </h3>
              <p className="text-white">
                Complete luxury homes with professionally designed interiors, premium landscaping, and move-in ready convenience.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Services;