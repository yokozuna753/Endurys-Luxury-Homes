import React, { useEffect, useRef, useState } from "react";

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
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd1y0acf6fr5315.cloudfront.net%2Fwp-content%2Fuploads%2Fsites%2F80%2F2022%2F08%2F30173852%2Falair-interior-design-trends-2000x1325.png&f=1&nofb=1&ipt=4e07d6a46846dfc0b716be0ead9208b9e8343947f537aab2faf19f9cb58d4482",
    title: "Oceanfront Villa",
    subtitle: "Luxury living by the beach",
  },
  {
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd1y0acf6fr5315.cloudfront.net%2Fwp-content%2Fuploads%2Fsites%2F80%2F2022%2F08%2F30173852%2Falair-interior-design-trends-2000x1325.png&f=1&nofb=1&ipt=4e07d6a46846dfc0b716be0ead9208b9e8343947f537aab2faf19f9cb58d4482",
    title: "Modern Mansion",
    subtitle: "Architectural excellence",
  },
  {
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd1y0acf6fr5315.cloudfront.net%2Fwp-content%2Fuploads%2Fsites%2F80%2F2022%2F08%2F30173852%2Falair-interior-design-trends-2000x1325.png&f=1&nofb=1&ipt=4e07d6a46846dfc0b716be0ead9208b9e8343947f537aab2faf19f9cb58d4482",
    title: "Interior Elegance",
    subtitle: "Transformative renovations",
  },
  {
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd1y0acf6fr5315.cloudfront.net%2Fwp-content%2Fuploads%2Fsites%2F80%2F2022%2F08%2F30173852%2Falair-interior-design-trends-2000x1325.png&f=1&nofb=1&ipt=4e07d6a46846dfc0b716be0ead9208b9e8343947f537aab2faf19f9cb58d4482",
    title: "Tropical Garden Estate",
    subtitle: "Where nature meets design",
  },
  {
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd1y0acf6fr5315.cloudfront.net%2Fwp-content%2Fuploads%2Fsites%2F80%2F2022%2F08%2F30173852%2Falair-interior-design-trends-2000x1325.png&f=1&nofb=1&ipt=4e07d6a46846dfc0b716be0ead9208b9e8343947f537aab2faf19f9cb58d4482",
    title: "Resort-Style Pool",
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
      className="overflow-hidden relative w-full h-[220px] my-10"
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
              className="w-full h-full object-cover"
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
