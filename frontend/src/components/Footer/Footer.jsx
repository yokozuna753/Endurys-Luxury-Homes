import logo from "../../assets/images/logo.webp";

const Footer = () => {
  return (
    <>
      <footer className="bg-black section-spacing">
        <div className="flex flex-col items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gap-12">
            <div>
              <div className="w-70 bg-transparent font-light">
                <img src={logo} style={{ clipPath: "inset(1px 0 0 0)" }} />
              </div>

              <div className=" space-y-2 text-gray-400">
                <div>Endurys Espinosa</div>
                <div>CEO</div>
                <div>305.783.7710</div>
                <div>7766 NW 46 ST DORAL, FL, 33166</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 section-spacing">
            <div className="text-xs text-gray-500 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>

            <div className="flex justify-between items-center">
              <div className="text-xs text-gray-500">
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>{" "}
                |{" "}
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>{" "}
                |{" "}
                <a href="#" className="hover:text-white">
                  Accessibility
                </a>{" "}
                | © 2025 All Rights Reserved
              </div>
              <div className="text-xs text-blue-400">
                <span className="text-white">Endurys Luxury Homes </span>
                {/* <span className="text-blue-400">GROUP</span>{" "} */}
                <span className="text-white">Powered by</span>{" "}
                <span className="text-white">A & E Development Plus Inc</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
