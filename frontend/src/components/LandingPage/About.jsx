import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";

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
              <h2 className="text-center text-4xl lg:text-left md:text-5xl font-light mb-6 text-white">
                LEGACY BUILT
                <br />
                <span className="font-bold">SINCE 2006</span>
              </h2>
            </div>

            {/* First Paragraph */}
            <div
              className={`scroll-animate delay-200 ${
                sectionVisible ? "animate-fade-in-left" : ""
              }`}
            >
              <p className="text-center lg:text-left text-white text-lg leading-relaxed">
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
              <p className="text-center lg:text-left text-white text-lg leading-relaxed">
                With a legacy rooted in Pinecrest, Coral Gables, Boca Raton, and
                beyond, Hollub Group is trusted for exceptional craftsmanship,
                lasting value, and relationships that endure.
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
                className="bg-gray-900 text-white px-8 py-3 font-medium hover:bg-gray-800 transition-all duration-300 ease-in-out 
             hover:bg-gray-200 hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)]
             hover:scale-105 hover:cursor-pointer"
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
            <div className="overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80"
                alt="Luxury Interior"
                className="w-full h-96 object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
