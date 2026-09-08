import React from "react";
import sixImage from "../../assets/images/six.webp";

const FounderMessage = () => {
  return (
    <section className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="flex flex-col items-center justify-center lg:grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: Image */}
          <div className="relative w-full frame-gold">
            <div className="overflow-hidden">
              <img
                src={sixImage}
                alt="Our Founder"
                className="w-full h-[32rem] md:h-[36rem] lg:h-[42rem] object-contain object-center bg-black transition-transform duration-1000 hover:scale-[1.03]"
                loading="eager"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="text-center lg:text-left flex flex-col h-full justify-center items-center space-y-6 md:space-y-10">
            <p className="eyebrow">Our Owner</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4">
              A message from our Founder
            </h2>
            <div className="text-white text-left border-l-2 border-[#c6a15b] pl-6">
              <p className="text-xl md:text-2xl font-light italic tracking-wide text-gray-100"
                style={{ fontFamily: "var(--font-display)" }}>
                “Let’s craft your dream home — with unmatched quality,
                precision, and care.”
              </p>
            </div>
            <div className="text-gray-400 font-light leading-loose space-y-6 md:space-y-7 text-base md:text-lg">
              <p>
                Endurys Eddy Espinosa — President, Endurys Luxury Homes. We
                bring decades of combined experience, a precision mindset, and
                an unwavering commitment to integrity on every project.
              </p>
              <p>
                From boutique luxury homes to large-scale builds, our team
                delivers scalable, high-quality results tailored to your vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
