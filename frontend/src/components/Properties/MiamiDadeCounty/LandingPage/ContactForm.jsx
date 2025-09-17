

const ContactForm = () => {

    return (
        <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
            START YOUR <span className="font-bold">JOURNEY</span>
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Ready to build your dream home? Contact us today to discuss your
            vision and learn how we can bring it to life.
          </p>

          <div className="grid grid-cols-1 gap-8 mb-12">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
              />
            </div>
            <div>
              <input
                type="address"
                placeholder="Property Address"
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
              />
            </div>
          </div>

          <div className="mb-8">
            <textarea
              rows="5"
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors resize-none"
            ></textarea>
          </div>

          <button className="bg-gray-900 text-white px-12 py-4 hover:cursor-pointer font-medium hover:bg-gray-800 transition-colors duration-300">
            SEND MESSAGE
          </button>
        </div>
      </section>
    )
}

export default ContactForm;