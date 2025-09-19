import main10801 from "../../../assets/Pinecrest/10801-images/main.webp";
import main6700 from "../../../assets/Pinecrest/6700-images/main-front.webp";
import main6290 from "../../../assets/Pinecrest/6290-images/main-side.webp";
import {Link} from "react-router-dom";

const Properties = () => {
  return (
    <>
      <section className="bg-black py-16">
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
                    to={{ pathname: `/properties/pinecrest/pinecrest/6` }}
                    className="hover:cursor-pointer"
                  >
                    <img
                      src={main10801}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <Link
                to={{ pathname: `/properties/pinecrest/pinecrest/6` }}
                className="hover:cursor-pointer"
              >
                <h3 className="text-xl font-light text-white text-center tracking-wide">
                  10801 SW 67 AVE
                </h3>
              </Link>
            </div>

            {/* Property 2 */}
            <div className="group hover:cursor-pointer">
              <div className="relative overflow-hidden mb-4">
                <div className="h-70 bg-gradient-to-br from-amber-800 via-amber-600 to-amber-700 rounded-sm">
                  <Link
                    to={{ pathname: `/properties/pinecrest/pinecrest/4` }}
                    className="hover:cursor-pointer"
                  >
                    <img
                      src={main6290}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                </div>
              </div>
              <Link
                to={{ pathname: `/properties/pinecrest/pinecrest/4` }}
                className="hover:cursor-pointer"
              >
                <h3 className="text-xl font-light text-white text-center tracking-wide">
                  6290 SW 130 TER
                </h3>
              </Link>
            </div>

            {/* Property 3 */}
            <div className="group">
              <div className="relative overflow-hidden mb-4">
                <div className="h-70 bg-gradient-to-br from-blue-800 via-blue-600 to-blue-700 rounded-sm">
                  <Link to={{pathname: `/properties/pinecrest/pinecrest/5`}} className="hover:cursor-pointer">
                  <img src={main6700} className="w-full h-full object-cover" />
                  </Link>
                </div>
              </div>
              <Link to={{pathname: `/properties/pinecrest/pinecrest/5`}} className="hover:cursor-pointer">
              <h3 className="text-xl font-light text-white text-center tracking-wide">
                6700 SW 115 ST
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
