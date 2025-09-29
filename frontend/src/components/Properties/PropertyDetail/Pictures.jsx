import { CheckIcon } from "@heroicons/react/24/solid";

export default function Pictures({ property }) {

    const images = property?.images;

  return (
    <section className="">
      <div className="mx-auto">
        {/* Pictures Flexbox */}
        <div className="flex items-center justify-center mt-8">
          <div className="flex flex-wrap justify-center">
            {images.map((image, index) => {
                return(
                    <div key={index} className="">
                        <img src={image} className="w-auto h-68 border-2 border-black"/>
                    </div>
                )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
