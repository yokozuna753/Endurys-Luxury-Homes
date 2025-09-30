import { useNavigate } from "react-router-dom";

export default function Description() {

  const navigate = useNavigate();

  return (
    <section className=" bg-black">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-light tracking-wide text-[#b28f4f] mb-4">
          THE ART OF LUXURY LIVING
        </h2>
        <p className="text-lg md:text-xl font-light text-gray-400 mb-12">
          Building South Florida’s Finest Homes
        </p>

        {/* Main Intro */}
        <p className="text-md md:text-lg text-gray-400 leading-relaxed mb-8">
          At Endurys Luxury Homes, we believe a residence is more than a
          structure — it’s a reflection of your lifestyle, your aspirations, and
          your legacy. For over two decades, we have set the standard in bespoke
          homebuilding, crafting architectural statements that embody timeless
          design, enduring quality, and modern sophistication.
        </p>

        <p className="text-md md:text-lg text-gray-400 leading-relaxed mb-8">
          Our approach is rooted in uncompromising attention to detail and a
          deep understanding of South Florida’s most prestigious communities.
          Each project is guided by a philosophy that blends visionary
          architecture, refined craftsmanship, and seamless client
          collaboration.
        </p>

        {/* Key Points as Bullets */}
        <div className=" max-w-3xl mx-auto mb-12">
          {/* 1. list-none: REMOVES the old bullet (list-disc).
            2. p-0: Removes any default padding.
            3. space-y-4: Keeps your existing vertical spacing.
          */}
          <ul className="list-none p-0 flex flex-col items-start text-left space-y-4 text-gray-400 text-md md:text-lg leading-relaxed">
            {/* 4. li: ADD 'flex' and 'items-start' to make it a custom bullet.
            */}
            <li className="flex items-start">
              {/* 5. DIAMOND SPAN: 
                   - text-[<color>]: Uses an arbitrary value for your gold color.
                   - mr-3: Adds a clean space after the diamond.
                   - flex-shrink-0: Ensures the diamond doesn't wrap oddly.
              */}
              <span className="text-[#b28f4f] font-bold mr-3 mt-0.5 flex-shrink-0">
                ♦
              </span>
              <span>
                <span className="text-[#b28f4f] font-semibold">
                  Tailored Design Excellence:
                </span>
                {" "}Every home is a unique masterpiece, shaped to reflect your
                individuality and elevate the way you live.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#b28f4f] font-bold mr-3 mt-0.5 flex-shrink-0">
                ♦
              </span>
              <span>
                <span className="text-[#b28f4f] font-semibold">
                  Elite Partnerships:
                </span>
                {" "} We collaborate with the region’s most distinguished architects,
                artisans, and suppliers to ensure unparalleled quality.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#b28f4f] font-bold mr-3 mt-0.5 flex-shrink-0">
                ♦
              </span>
              <span>
                <span className="text-[#b28f4f] font-semibold">
                  Precision & Transparency:
                </span>
                {" "} From planning to final handover, every detail is managed with
                clarity, accountability, and integrity.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#b28f4f] font-bold mr-3 mt-0.5 flex-shrink-0">
                ♦
              </span>
              <span>
                <span className="text-[#b28f4f] font-semibold">
                  On-Time, Beyond Expectations:
                </span>
                {" "} Our disciplined project management ensures flawless execution
                without compromise.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#b28f4f] font-bold mr-3 mt-0.5 flex-shrink-0">
                ♦
              </span>
              <span className="">
                <span className="text-[#b28f4f] font-semibold">
                  Guidance Beyond Building:
                </span>
                {" "} From site selection to design development, we stand beside you at
                every stage of your journey.
              </span>
            </li>
          </ul>
        </div>

        {/* Closing Statement */}
        <p className="text-md md:text-lg text-gray-400 leading-relaxed max-w-4xl mx-auto">
          At Endurys Luxury Homes, we don’t just construct properties — we
          curate living experiences defined by elegance, innovation, and a
          lasting sense of place. Your vision becomes our blueprint, and
          together, we create a home that stands as the true embodiment of
          luxury.
        </p>
      <button onClick={() => navigate(`/contact`) } className="border border-white text-white px-8 py-4 mt-16 text-sm font-medium tracking-wide hover:text-black transition-all duration-300 ease-in-out 
             hover:bg-gray-200 hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)]
             hover:scale-105 hover:cursor-pointer">Request Information</button>
      </div>
    </section>
  );
}