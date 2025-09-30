import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { exclusiveProperties } from "../PropertiesArray/exclusiveListings";
import { useNavigate } from "react-router-dom";

const ExclusiveListings = () => {
  const navigate = useNavigate();

  const propertyOne = exclusiveProperties["miami-dade"][0];
  const propertyTwo = exclusiveProperties["miami-dade"][1];

  console.table(propertyOne, propertyTwo);

  const [indexOne, setIndexOne] = useState(0);
  const [indexTwo, setIndexTwo] = useState(0);

  const [loadingOne, setLoadingOne] = useState(false);
  const [loadingTwo, setLoadingTwo] = useState(false);

  const changeImage = (setter, setLoading, length, index, dir) => {
    setLoading(true);
    setTimeout(() => {
      setter(
        dir === "next" ? (index + 1) % length : (index - 1 + length) % length
      );
      setLoading(false);
    }, 300); // 300ms delay
  };

  const prevImageOne = () =>
    changeImage(
      setIndexOne,
      setLoadingOne,
      propertyOne.images.length,
      indexOne,
      "prev"
    );
  const nextImageOne = () =>
    changeImage(
      setIndexOne,
      setLoadingOne,
      propertyOne.images.length,
      indexOne,
      "next"
    );

  const prevImageTwo = () =>
    changeImage(
      setIndexTwo,
      setLoadingTwo,
      propertyTwo.images.length,
      indexTwo,
      "prev"
    );
  const nextImageTwo = () =>
    changeImage(
      setIndexTwo,
      setLoadingTwo,
      propertyTwo.images.length,
      indexTwo,
      "next"
    );

  const ImageWithLoader = ({ src, alt, loading, property }) => (
    <div className="relative h-80 w-full">
      {/* Image */}
      <img
        onClick={
          () =>
            navigate(`/properties/miami-dade/exclusive-listings/${property.id}`) // /properties/miami-dade/exclusive-listings/all
        }
        src={src}
        alt={alt}
        className={`h-80 w-full object-cover transition-opacity duration-500 ${
          loading ? "opacity-0" : "opacity-100"
        } hover:cursor-pointer`}
      />
      {/* Loader */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}
    </div>
  );

  return (
    <section className="bg-black">
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
          {/* Listing 1 */}
          <div className="bg-gray-900 rounded-sm overflow-hidden">
            <div className="relative group">
              <ImageWithLoader
                src={propertyOne.images[indexOne]}
                alt={propertyOne.address}
                loading={loadingOne}
                property={propertyOne}
                className="hover:cursor-pointer"
              />
              {/* Buttons */}
              <button
                onClick={prevImageOne}
                className="absolute left-4 top-1/2 -translate-y-1/2 opacity-100 lg:opacity-0 
                  lg:group-hover:opacity-100 transition-all duration-500 bg-black/40 
                  hover:bg-black/60 rounded-full p-2 text-white hover:cursor-pointer"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImageOne}
                className="absolute right-4 top-1/2 -translate-y-1/2 opacity-100 lg:opacity-0 
                  lg:group-hover:opacity-100 transition-all duration-500 bg-black/40 
                  hover:bg-black/60 rounded-full p-2 text-white hover:cursor-pointer"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="text-2xl font-light text-white">
                {propertyOne.sellPrice}
              </div>
              <div className="text-gray-400 mb-2">
                {propertyOne.beds} Bed(s) • {propertyOne.baths} Bath(s) •{" "}
                {propertyOne.livingArea} Sq.Ft.
              </div>
              <div className="text-gray-400 text-sm">{propertyOne.address}</div>
            </div>
          </div>

          {/* Listing 2 */}
          <div className="bg-gray-900 rounded-sm overflow-hidden">
            <div className="relative group">
              <ImageWithLoader
                src={propertyTwo.images[indexTwo]}
                alt={propertyTwo.address}
                loading={loadingTwo}
                property={propertyTwo}
              />
              {/* Buttons */}
              <button
                onClick={prevImageTwo}
                className="absolute left-4 top-1/2 -translate-y-1/2 opacity-100 lg:opacity-0 
                  lg:group-hover:opacity-100 transition-all duration-500 bg-black/40 
                  hover:bg-black/60 rounded-full p-2 text-white hover:cursor-pointer"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImageTwo}
                className="absolute right-4 top-1/2 -translate-y-1/2 opacity-100 lg:opacity-0 
                  lg:group-hover:opacity-100 transition-all duration-500 bg-black/40 
                  hover:bg-black/60 rounded-full p-2 text-white hover:cursor-pointer"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="text-2xl font-light text-white">
                {propertyTwo.sellPrice}
              </div>
              <div className="text-gray-400 mb-2">
                {propertyTwo.beds} Bed(s) • {propertyTwo.baths} Bath(s) •{" "}
                {propertyTwo.livingArea} Sq.Ft.
              </div>
              <div className="text-gray-400 text-sm">{propertyTwo.address}</div>
            </div>
          </div>
        </div>

        {/* View All button */}
        <div className="text-center">
          <button
            onClick={() =>
              navigate(`/properties/miami-dade/exclusive-listings/all`)
            }
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
