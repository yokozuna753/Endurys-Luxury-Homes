import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { exclusiveProperties } from "../PropertiesArray/exclusiveListings";
import { useNavigate } from "react-router";

const ExclusiveListings = () => {
  const miamiDadeProperties = exclusiveProperties["pinecrest"] || [];
  const displayProperties = miamiDadeProperties.slice(0, 2);

  const navigate = useNavigate();

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const AnimatedImageCarousel = ({
    property,
    currentIndex,
    direction,
    paginate,
  }) => (
    <div className="relative h-80 w-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={currentIndex}
          src={property.images[currentIndex]}
          alt={property.address}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: false, stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          onClick={() => navigate(`/properties/pinecrest/exclusive-listings/${property.id}`)}
          className="absolute h-80 w-full object-cover cursor-pointer"
        />
      </AnimatePresence>
    </div>
  );

  const ListingCard = ({ property }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginate = (newDirection) => {
      setDirection(newDirection);
      setCurrentIndex((prev) => {
        if (newDirection === 1) {
          return (prev + 1) % property.images.length;
        } else {
          return (prev - 1 + property.images.length) % property.images.length;
        }
      });
    };

    const prevImage = () => paginate(-1);
    const nextImage = () => paginate(1);

    return (
      <div className="bg-gray-900 rounded-sm overflow-hidden">
        <div className="relative group">
          <AnimatedImageCarousel
            property={property}
            currentIndex={currentIndex}
            direction={direction}
            paginate={paginate}
          />
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 opacity-100 lg:opacity-0 
                  lg:group-hover:opacity-100 transition-all duration-500 bg-black/40 
                  hover:bg-black/60 rounded-full p-2 text-white hover:cursor-pointer z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 opacity-100 lg:opacity-0 
                  lg:group-hover:opacity-100 transition-all duration-500 bg-black/40 
                  hover:bg-black/60 rounded-full p-2 text-white hover:cursor-pointer z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6">
          <div className="text-2xl font-light text-white">
            {property.sellPrice}
          </div>
          <div className="text-gray-400 mb-2">
            {property.beds} Bed(s) • {property.baths} Bath(s) •{" "}
            {property.livingArea} Sq.Ft.
          </div>
          <div className="text-gray-400 text-sm">{property.address}</div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm italic mb-2">Explore Our</p>
          <h2 className="text-4xl md:text-5xl font-light text-[#b28f4f] tracking-wider">
            EXCLUSIVE LISTINGS
          </h2>
        </div>

        {/* Listings */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {displayProperties.map((property) => (
            <ListingCard key={property.id} property={property} />
          ))}
        </div>

        {/* View All button */}
        <div className="text-center">
          <button
            onClick={() => navigate("/properties/miami-dade/exclusive-listings/all")}
            className="border border-white text-white px-8 py-3 text-sm font-medium tracking-wide hover:text-black transition-all duration-300 ease-in-out 
             hover:bg-gray-200 hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)]
             hover:scale-105 hover:cursor-pointer"
          >
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveListings;
