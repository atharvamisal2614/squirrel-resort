import React, { useRef } from 'react';
import Flickity from 'react-flickity-component';
import Link from 'next/link';
import Image from 'next/image';
import 'flickity/css/flickity.css'; 

const AccommodationCarousel = () => {
  const flickityRef = useRef(null);

  const flickityOptions = {
    wrapAround: true,
    autoPlay: false,
    pauseAutoPlayOnHover: true,
    prevNextButtons: false, 
    pageDots: false,
    groupCells: 1,
  };

  const handlePrev = () => {
    if (flickityRef.current) {
      flickityRef.current.previous();
    }
  };

  const handleNext = () => {
    if (flickityRef.current) {
      flickityRef.current.next();
    }
  };

  return (
    <div className="w-full py-12 bg-orange-50">
      <div className="acc_div text-center mb-8">
        {/* <p className="text-xl text-orange-900 font-serif tracking-widest">ACCOMMODATION</p> */}
        <h1 className="text-2xl md:text-4xl mb-2 text-customOrange font-serif tracking-wide">Elevate Your Stay</h1>
        <h2 className="text-md md:text-lg font-medium text-gray-800 font-serif tracking-widest">
          A cozy room often features warm lighting, soft textures, and inviting decor.
        </h2>
      </div>

      {/* Custom Carousel Layout */}
      <div className="relative flex items-center justify-center">
        {/* Left Button */}
        <button
          className="absolute left-10 z-10 w-10 md:w-12 h-10 md:h-12 bg-transparent border-2 hover:bg-customOrange hover:text-white border-orange-800 text-2xl font-bold text-customOrange flex items-center justify-center rounded-full hover:opacity-80"
          onClick={handlePrev}
        >
          &#8249;
        </button>

        {/* Flickity Carousel */}
        <div className="w-[80%]">
          <Flickity
            className={'carousel'} // Custom Flickity class
            flickityRef={(c) => (flickityRef.current = c)} // Set Flickity instance
            options={flickityOptions}
          >
            {/* Carousel Cells */}
            <div className="relative w-full h-96 md:h-[600px]">
              <Image
                src="/images/squirrel-beds.jpg"
                alt="Deluxe Room"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="gradient-overlay absolute inset-0 " />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold font-serif tracking-widest">
                Deluxe Room
              </div>
            </div>

            <div className="relative w-full h-96 md:h-[600px]">
              <Image
                src="/images/squirrel-bedroom.jpg"
                alt="Premium Deluxe Room"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="gradient-overlay absolute inset-0 " />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold font-serif tracking-widest">
                Premium Deluxe Room
              </div>
            </div>

            <div className="relative w-full h-96 md:h-[600px]">
              <Image
                src="/images/squirrel-hall.jpg"
                alt="Super Deluxe Room"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="gradient-overlay absolute inset-0" />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold font-serif tracking-widest">
               Squirrel Super Deluxe Room
              </div>
            </div>

            <div className="relative w-full h-96 md:h-[600px]">
              <Image
                src="/images/squirrel-swimmingpool-1.jpg"
                alt="Super Deluxe Room"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="gradient-overlay absolute inset-0" />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold font-serif tracking-widest">
               Squirrel Wide Swimmingpool
              </div>
            </div>

            <div className="relative w-full h-96 md:h-[600px]">
              <Image
                src="/images/squirrel-swimmingpool-2.jpg"
                alt="Super Deluxe Room"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="gradient-overlay absolute inset-0" />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold font-serif tracking-widest">
               Squirrel Swimmingpool
              </div>
            </div>

            <div className="relative w-full h-96 md:h-[600px]">
              <Image
                src="/images/squirrel-tent-1.jpg"
                alt="Super Deluxe Room"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="gradient-overlay absolute inset-0" />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold font-serif tracking-widest">
               Squirrel Townships
              </div>
            </div>

            <div className="relative w-full h-96 md:h-[600px]">
              <Image
                src="/images/squirrel-tent.jpg"
                alt="Super Deluxe Room"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="gradient-overlay absolute inset-0" />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold font-serif tracking-widest">
               Squirrel Township
              </div>
            </div>

          </Flickity>
        </div>

        {/* Right Button */}
        <button
          className="absolute right-10 z-10 w-10 md:w-12 h-10 md:h-12 bg-transparent border-2 hover:bg-customOrange hover:text-white border-orange-800 font-bold text-2xl text-customOrange flex items-center justify-center rounded-full hover:opacity-80"
          onClick={handleNext}
        >
          &#8250;
        </button>
      </div>

      {/* Book Now Button */}
      <div className="flex justify-center items-center my-8">
        <Link
          href={'/'}
          className="inline-block px-4 py-2 mt-4 text-lg font-medium bg-transparent text-customOrange border border-customOrange rounded-lg  transition duration-300 opacity-90 hover:bg-customOrange hover:text-white"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default AccommodationCarousel;
