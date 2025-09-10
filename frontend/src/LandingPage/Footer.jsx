

const Footer = () => {

    return (
        <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Endurys Luxury Homes</h3>
              <p className="text-gray-400 mb-4">
                Building South Florida's finest homes since 1954.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4">CONTACT INFO</h4>
              <p className="text-gray-400 mb-2">Miami, Florida</p>
              <p className="text-gray-400 mb-2">(305) 555-5555</p>
              <p className="text-gray-400">info@endurysluxuryhomes.com</p>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4">QUICK LINKS</h4>
              <div className="space-y-2">
                <a
                  href="#about"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#services"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8 text-center">
            <p className="text-gray-400">
              © 2025 Endurys Luxury Homes. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
}

export default Footer;