import logo from "../../assets/images/logo.webp";

const Footer = () => {
  return (
    <>
      <footer className="bg-black section-spacing border-t border-white/5 pt-20 pb-10">
        <div className="flex flex-col items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-70 bg-transparent font-light">
                <img src={logo} style={{ clipPath: "inset(1px 0 0 0)" }} />
              </div>

              <div className="space-y-2 text-gray-400 font-light tracking-[0.12em] mt-6">
                <div className="text-white text-lg tracking-[0.2em]">Endurys Espinosa</div>
                <div className="text-[#c6a15b] text-xs uppercase tracking-[0.3em]">CEO</div>
                <div className="hover:text-[#c6a15b] transition-colors duration-300">305.783.7710</div>
                <div>7766 NW 46 ST DORAL, FL, 33166</div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-16 pt-10 w-full">
            <div className="text-xs text-gray-500 font-light leading-relaxed mb-4 max-w-4xl mx-auto text-center">
              Endurys Luxury Homes is affiliated to A & E Development Plus Inc.
              A licensed, certified, general contractor in the state of Florida.
              All material presented herein is intended for informational
              purposes only. Information is compiled from sources deemed
              reliable but is subject to errors, omissions, changes in price,
              condition, sale, or withdrawal without notice. No statement is
              made as to accuracy of any description. All measurements and
              square footages are approximate. This is not intended to solicit
              property already listed. Nothing herein shall be construed as
              legal, accounting or other professional advice outside the realm
              of real estate brokerage.
            </div>

            <div className="flex flex-col md:flex-row gap-3 justify-between items-center">
              <div className="text-xs text-gray-500 tracking-[0.15em]">
                © 2025 All Rights Reserved
              </div>
              <div className="text-xs tracking-[0.12em]">
                <span className="text-[#c6a15b]">Endurys Luxury Homes </span>
                {/* <span className="text-blue-400">GROUP</span>{" "} */}
                <span className="text-gray-400">Powered by</span>{" "}
                <span className="text-gray-300">A & E Development Plus Inc</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
