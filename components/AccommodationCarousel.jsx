import React from 'react';
import Flickity from 'react-flickity-component';
import Link from 'next/link';
import Image from 'next/image';
import 'flickity/css/flickity.css'; // Import Flickity styles

const AccommodationCarousel = () => {
  const flickityOptions = {
    wrapAround: true,
    autoPlay: false,
    pauseAutoPlayOnHover: true,
    prevNextButtons: true,
    pageDots: false,
    groupCells: 1,
  };

  return (
    <div className="container mx-auto py-12">
      <div className="acc_div text-center mb-8">
        <p className="text-xl text-gray-400 font-serif tracking-widest">ACCOMMODATION</p> <br/>
        <h1 className="text-2xl md:text-4xl  mb-2 text-gray-800 font-serif tracking-wide">Elevate Your Stay </h1>
        <h2 className="text-md md:text-lg font-medium text-gray-600 font-serif tracking-widest">
          A cozy room often features warm lighting, soft textures, and inviting decor.
        </h2>
      </div>

      {/* Flickity Carousel */}
      <Flickity className={'carousel1'} options={flickityOptions}>
        {/* Carousel Cells */}
        <div className="carousel-cell1 relative w-full md:w-1/2 lg:w-1/3 h-72 md:h-96">
          <Image
            src="/images/hotel1.jpg"
            alt="Deluxe Room"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="gradient-overlay absolute inset-0 bg-black opacity-50" />
          <div className="caption1 absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold font-serif tracking-widest">Deluxe Room</div>
        </div>

        <div className="carousel-cell1 relative w-full md:w-1/2 lg:w-1/3 h-72 md:h-96">
          <Image
            src="/images/hotel2.jpg"
            alt="Premium Deluxe Room"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="gradient-overlay absolute inset-0 bg-black opacity-50" />
          <div className="caption1 absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold font-serif tracking-widest">Premium Deluxe Room</div>
        </div>

        <div className="carousel-cell1 relative w-full md:w-1/2 lg:w-1/3 h-72 md:h-96">
          <Image
            src="/images/hotel3.jpg"
            alt="Super Deluxe Room"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="gradient-overlay absolute inset-0 bg-black opacity-50" />
          <div className="caption1 absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold font-serif tracking-widest">Super Deluxe Room</div>
        </div>
      </Flickity>
      <div className="flex justify-center items-center my-8">
      <Link href={'/'} className="inline-block px-4 py-2 mt-4 text-lg font-medium text-black border border-black rounded transition duration-300 opacity-90">
                  Book Now
                </Link>
    </div>
  
    </div>
  )
     
};

export default AccommodationCarousel;
