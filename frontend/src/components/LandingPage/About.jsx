import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { livingRoom6290 } from "../../assets/Pinecrest/6290-images";

const useScrollAnimation = (
  threshold = 0.1,
  rootMargin = "0px 0px -100px 0px"
) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin]);

  return [elementRef, isVisible];
};

const About = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation(0.2);
  const navigate = useNavigate();

  return (
    <section id="about" className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="flex flex-col space-y-6">
            {/* Title */}
            <div
              className={`scroll-animate ${
                sectionVisible ? "animate-fade-in-left" : ""
              }`}
            >
              <h2 className="text-center text-4xl lg:text-left md:text-6xl font-light tracking-[0.08em] mb-2 text-gray-100">
                LEGACY BUILT
                <br />
                <span className="font-semibold text-[#c6a15b]">SINCE 2006</span>
              </h2>
              <div className="gold-rule-left mx-auto lg:mx-0"></div>
            </div>

            {/* First Paragraph */}
            <div
              className={`scroll-animate delay-200 ${
                sectionVisible ? "animate-fade-in-left" : ""
              }`}
            >
              <p className="text-center lg:text-left text-gray-300 text-lg font-light leading-loose">
                From lot acquisition to turnkey delivery, our fully integrated,
                concierge-level approach ensures a seamless, personalized
                experience for discerning clients.
              </p>
            </div>

            {/* Second Paragraph */}
            <div
              className={`scroll-animate delay-300 ${
                sectionVisible ? "animate-fade-in-left" : ""
              }`}
            >
              <p className="text-center lg:text-left text-gray-300 text-lg font-light leading-loose">
                With a legacy rooted in Pinecrest, Miami, and Florida's West
                Coast, Endurys Luxury Homes is trusted for exceptional
                craftsmanship, lasting value, and relationships that endure.
              </p>
            </div>

            {/* Button */}
            <div
              className={`flex justify-center lg:justify-start scroll-animate delay-400 ${
                sectionVisible ? "animate-fade-in-up" : ""
              }`}
            >
              <button
                onClick={() => navigate("/contact")}
                className="btn-luxury mb-8"
              >
                LEARN MORE
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`relative scroll-animate delay-500 ${
              sectionVisible ? "animate-fade-in-right" : ""
            }`}
          >
            <div className="frame-gold">
              <div className="card-media shadow-2xl">
                <img
                  src={livingRoom6290}
                  alt="Luxury Interior"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
