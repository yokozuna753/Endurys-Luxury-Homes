import nightShot from "../../../assets/Miami-Dade/9669-images/night-shot.webp";
import nightBackShot from "../../../assets/Miami-Dade/9765-images/night-backshot.webp";
import mainFront from "../../../assets/Miami-Dade/11035-images/main.webp";
import { Link } from "react-router-dom";

const Properties = () => {
  return (
    <>
      <section className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-light text-[#c6a15b] tracking-[0.15em] mb-8">
              PROPERTIES
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Property 1 */}
            <div className="group">
              <div className="card-media mb-6">
                <div className="h-70 bg-[#131313]">
                  <Link
                    to={{ pathname: `/properties/miami-dade/miami-dade/1` }}
                    className="hover:cursor-pointer"
                  >
                    <img
                      src={nightShot}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <Link
                to={{ pathname: `/properties/miami-dade/miami-dade/1` }}
                className="hover:cursor-pointer"
              >
                {" "}
                <h3 className="text-2xl font-light text-white text-center tracking-[0.15em] group-hover:text-[#c6a15b] transition-colors duration-500">
                  9669 SW 96 ST
                </h3>{" "}
              </Link>
            </div>

            {/* Property 2 */}
            <div className="group hover:cursor-pointer">
              <div className="card-media mb-6">
                <div className="h-70 bg-[#131313]">
                  <Link
                    to={{ pathname: `/properties/miami-dade/miami-dade/3` }}
                    className="hover:cursor-pointer"
                  >
                    {" "}
                    <img
                      src={mainFront}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </div>
              </div>
              <Link
                to={{ pathname: `/properties/miami-dade/miami-dade/3` }}
                className="hover:cursor-pointer"
              >
                <h3 className="text-2xl font-light text-white text-center tracking-[0.15em] group-hover:text-[#c6a15b] transition-colors duration-500">
                  11035 SW 93 ST
                </h3>
              </Link>
            </div>

            {/* Property 3 */}
            <div className="group">
              <div className="card-media mb-6">
                <div className="h-70 bg-[#131313]">
                  {" "}
                  <Link
                    to={{ pathname: `/properties/miami-dade/miami-dade/2` }}
                    className="hover:cursor-pointer"
                  >
                    <img
                      src={nightBackShot}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </div>
              </div>
              <Link
                to={{ pathname: `/properties/miami-dade/miami-dade/2` }}
                className="hover:cursor-pointer"
              >
                <h3 className="text-2xl font-light text-white text-center tracking-[0.15em] group-hover:text-[#c6a15b] transition-colors duration-500">
                  9765 SW 110 ST
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Properties;
