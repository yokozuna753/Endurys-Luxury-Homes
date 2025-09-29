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
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-wider mb-8">
              PROPERTIES
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Property 1 */}
            <div className="group">
              <div className="relative overflow-hidden mb-4">
                <div className="h-70 bg-gradient-to-br from-green-800 via-green-600 to-green-700 rounded-sm">
                  <Link
                    to={{ pathname: `/properties/miami-dade/miami-dade/1` }}
                    className="hover:cursor-pointer"
                  >
                    <img
                      src={nightShot}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
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
                <h3 className="text-xl font-light text-white text-center tracking-wide">
                  9669 SW 96 ST
                </h3>{" "}
              </Link>
            </div>

            {/* Property 2 */}
            <div className="group hover:cursor-pointer">
              <div className="relative overflow-hidden mb-4">
                <div className="h-70 bg-gradient-to-br from-amber-800 via-amber-600 to-amber-700 rounded-sm">
                  <Link
                    to={{ pathname: `/properties/miami-dade/miami-dade/3` }}
                    className="hover:cursor-pointer"
                  >
                    {" "}
                    <img
                      src={mainFront}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </Link>
                </div>
              </div>
              <Link
                to={{ pathname: `/properties/miami-dade/miami-dade/3` }}
                className="hover:cursor-pointer"
              >
                <h3 className="text-xl font-light text-white text-center tracking-wide">
                  11035 SW 93 ST
                </h3>
              </Link>
            </div>

            {/* Property 3 */}
            <div className="group">
              <div className="relative overflow-hidden mb-4">
                <div className="h-70 bg-gradient-to-br from-blue-800 via-blue-600 to-blue-700 rounded-sm">
                  {" "}
                  <Link
                    to={{ pathname: `/properties/miami-dade/miami-dade/2` }}
                    className="hover:cursor-pointer"
                  >
                    <img
                      src={nightBackShot}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </Link>
                </div>
              </div>
              <Link
                to={{ pathname: `/properties/miami-dade/miami-dade/2` }}
                className="hover:cursor-pointer"
              >
                <h3 className="text-xl font-light text-white text-center tracking-wide">
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
