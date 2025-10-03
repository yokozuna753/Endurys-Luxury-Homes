import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Pictures = ({ property }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

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
    <>
      <section className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-gray-400 text-sm italic mb-2">View Property</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#b28f4f] tracking-wider">
              IMAGES
            </h2>
          </div>

          {/* Main Image Carousel */}
          <div className="flex flex-col items-center gap-8 mb-8">
            <div className="flex flex-col items-center w-full max-w-5xl bg-transparent rounded-md overflow-hidden">
              <div className="relative group w-full h-[500px] overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    key={currentIndex}
                    src={property.images[currentIndex]}
                    alt={`${property.address} - Image ${currentIndex + 1}`}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
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
                    className="absolute w-full h-full object-cover cursor-pointer"
                    onClick={() => setIsModalOpen(true)}
                  />
                </AnimatePresence>

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 opacity-100 lg:opacity-0 
                    lg:group-hover:opacity-100 transition-all duration-300 bg-black/40 
                    hover:bg-black/60 rounded-full p-2 text-white z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6 hover:cursor-pointer" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 opacity-100 lg:opacity-0 
                    lg:group-hover:opacity-100 transition-all duration-300 bg-black/40 
                    hover:bg-black/60 rounded-full p-2 text-white z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6 hover:cursor-pointer" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
                  {currentIndex + 1} / {property.images.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Gallery */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 overflow-y-auto"
            onClick={() => setIsModalOpen(false)}
          >
            <div className="min-h-screen px-4 py-8">
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="fixed top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition-colors z-50 hover:cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Header */}
              <div className="text-center mb-8 pt-4">
                <h3 className="text-2xl md:text-3xl font-light text-[#b28f4f] tracking-wider">
                  ALL IMAGES
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  {property.address}
                </p>
              </div>

              {/* Image Grid */}
              <div
                className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
                onClick={(e) => e.stopPropagation()}
              >
                {property.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="relative group overflow-hidden rounded-lg"
                  >
                    <img
                      src={image}
                      alt={`${property.address} - Image ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                    {/* Image Number Overlay */}
                    <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                      {index + 1}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Padding */}
              <div className="h-8" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Pictures;