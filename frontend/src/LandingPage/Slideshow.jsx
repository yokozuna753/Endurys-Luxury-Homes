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
    { title: "Description", subtitle: "Stream millions of songs" },
    { title: "Description", subtitle: "Original stories from the most creative minds" },
    { title: "Description", subtitle: "Play over 200 games with no ads" },
    { title: "Description", subtitle: "Workouts for every fitness level" },
    { title: "Description", subtitle: "Premium magazines and newspapers" },
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
            className="flex-shrink-0 w-[250px] h-[200px] mr-5 rounded-xl overflow-hidden relative 
                       bg-gradient-to-br from-indigo-400 to-purple-500 odd:from-pink-400 odd:to-red-400"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-5 flex flex-col justify-end">
              <h3 className="text-lg font-semibold">{slide.title}</h3>
              <p className="text-sm opacity-80">{slide.subtitle}</p>
            </div>
            {/* <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                <div className="ml-1 w-0 h-0 border-l-[15px] border-t-[10px] border-b-[10px] border-transparent border-l-black" />
              </div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
