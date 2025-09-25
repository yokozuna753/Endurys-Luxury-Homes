import logo from "../../assets/images/logo.webp"

const Footer = () => {
  return (
    <>
      <footer className="bg-black py-10">
        <div className="flex flex-col items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gap-12">
            <div>
              <div className="w-70 bg-transparent font-light mb-8">
                <img src={logo}  style={{ clipPath: "inset(1px 0 0 0)" }} />
              </div>

              <div className=" space-y-2 text-gray-400 mb-8">
                <div>Endurys Espinosa</div>
                <div>CEO</div>
                <div>305.783.7710</div>
                <div>7766 NW 46 ST DORAL, FL, 33166</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="text-xs text-gray-500 leading-relaxed mb-4">
              Amy Marcus Hollub is a real estate advisor affiliated with
              Compass, a licensed real estate broker and abides by Equal Housing
              Opportunity laws. All material presented herein is intended for
              informational purposes only. Information is compiled from sources
              deemed reliable but is subject to errors, omissions, changes in
              price, condition, sale, or withdrawal without notice. No statement
              is made as to accuracy of any description. All measurements and
              square footages are approximate. This is not intended to solicit
              property already listed. Nothing herein shall be construed as
              legal, accounting or other professional advice outside the realm
              of real estate brokerage.
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
                <span className="text-white">TREM</span>
                <span className="text-blue-400">GROUP</span>{" "}
                <span className="text-white">Powered by</span>{" "}
                <span className="text-white">
                  The Real Estate Marketing Group
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
