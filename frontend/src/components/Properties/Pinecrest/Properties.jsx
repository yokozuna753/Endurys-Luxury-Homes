import nightShot from "../../../assets/Miami-Dade/9669-images/night-shot.webp";
import nightBackShot from "../../../assets/Miami-Dade/9765-images/night-backshot.webp";
import mainFront from "../../../assets/Miami-Dade/11035-images/main.webp";

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
                  <img src={nightShot} className="w-full h-full object-cover" alt="" />
                </div>
              </div>
              <h3 className="text-xl font-light text-white text-center tracking-wide">
                10801 SW 67 AVE
              </h3>
            </div>

            {/* Property 2 */}
            <div className="group hover:cursor-pointer">
              <div className="relative overflow-hidden mb-4">
                <div className="h-70 bg-gradient-to-br from-amber-800 via-amber-600 to-amber-700 rounded-sm">
                  <img src={mainFront} className="w-full h-full object-cover"/>
                </div>
              </div>
              <h3 className="text-xl font-light text-white text-center tracking-wide">
                6700 SW 115 ST
              </h3>
            </div>

            {/* Property 3 */}
            <div className="group">
              <div className="relative overflow-hidden mb-4">
                <div className="h-70 bg-gradient-to-br from-blue-800 via-blue-600 to-blue-700 rounded-sm">
                  <img src={nightBackShot} className="w-full h-full object-cover"/>
                </div>
              </div>
              <h3 className="text-xl font-light text-white text-center tracking-wide">
                6290 SW 130 TER
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Properties;
