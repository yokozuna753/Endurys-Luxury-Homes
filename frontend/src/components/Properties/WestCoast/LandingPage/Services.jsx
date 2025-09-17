

const Services = () => {

    return (
        <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900">
              OUR <span className="font-bold">SERVICES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🏗️</span>
              </div>
              <h3 className="text-xl font-medium mb-4 text-gray-900">
                CUSTOM HOMES
              </h3>
              <p className="text-gray-600">
                From concept to completion, we craft architecturally significant
                custom homes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🔨</span>
              </div>
              <h3 className="text-xl font-medium mb-4 text-gray-900">
                RENOVATIONS
              </h3>
              <p className="text-gray-600">
                Transformative renovations that enhance and modernize existing
                properties.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-medium mb-4 text-gray-900">
                PROJECT MANAGEMENT
              </h3>
              <p className="text-gray-600">
                Full-service project management from lot acquisition to turnkey
                delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Services;