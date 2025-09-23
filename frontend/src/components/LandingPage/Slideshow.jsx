import React, { useEffect, useRef, useState } from "react";
import img1 from "../../assets/images/one.jpg"
import img2 from "../../assets/images/two.jpg"
import img3 from "../../assets/images/three.jpg"
import img4 from "../../assets/images/four.jpg"
import img5 from "../../assets/images/five.jpg"
import img6 from "../../assets/images/six.jpg"

const Slideshow = () => {
  const trackRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const requestRef = useRef(null);
  const lastTimeRef = useRef(performance.now());
  const offsetRef = useRef(0);

  // adjust for mobile: faster by default
  const normalSpeed = 0.05; // pixels per ms
  const slowSpeed = normalSpeed / 3;

  const slides = [
  {
    image: img1,
    title: "Oceanfront Villa",
    subtitle: "Luxury living by the beach",
  },
  {
    image: img2,
    title: "Modern Mansion",
    subtitle: "Architectural excellence",
  },
  {
    image: img3,
    title: "Interior Elegance",
    subtitle: "Transformative renovations",
  },
  {
    image: img4,
    title: "Tropical Garden Estate",
    subtitle: "Where nature meets design",
  },
  {
    image: img5,
    title: "Resort-Style Pool",
    subtitle: "Relax in luxury",
  },
  {
    image: img6,
    title: "HOTEL",
    subtitle: "Relax in luxury",
  },
  ];

  const animate = (time) => {
    const deltaTime = time - lastTimeRef.current;
    lastTimeRef.current = time;

    const speed = isHovered ? slowSpeed : normalSpeed;
    offsetRef.current += speed * deltaTime;

    const track = trackRef.current;
    if (track) {
      const trackWidth = track.scrollWidth / 2; // half (because duplicated)
      if (offsetRef.current >= trackWidth) {
        offsetRef.current -= trackWidth; // loop seamlessly
      }
      track.style.transform = `translateX(${-offsetRef.current}px)`;
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
<div
      className="overflow-hidden relative w-full h-[220px] my-20 py-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div ref={trackRef} className="flex will-change-transform">
        {[...slides, ...slides].map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[250px] h-[200px] mr-5 rounded-xl overflow-hidden relative"
          >
            {/* Property image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-contain"
            />
            {/* Overlay for text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-5 flex flex-col justify-end">
              <h3 className="text-lg font-semibold text-white">{slide.title}</h3>
              <p className="text-sm opacity-80 text-white">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
