// components/ResortInfoSection.jsx
import React from 'react';
import Link from 'next/link';

const ResortInfoSection = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:mb-20">
      {/* Intro Text */}
      <div className="text-center mb-8">
        <p className="text-2xl tracking-wider leading-10 text-gray-600 font-serif">
          Read More about our resort through our blogs
        </p> <br/>
        <h2 className="text-2xl md:text-4xl tracking-wider leading-10 text-gray-800 font-serif">
          Unwind in Elegance and Discover Serenity at <br /> Squirrel Resort
        </h2>
      </div>

      {/* Blog Links Grid */}
      <div className="vlog grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:mt-20">
        <div className="col text-center text-xl">
          <p>
            <Link href="/blogs/diveagar-beach" className="text-gray-600 tracking-wider leading-10 hover:text-gray-800 font-serif">
            
              Blog 1
              
            </Link>
          </p>
        </div>
        <div className="col text-center text-xl">
          <p>
            <Link href="/blogs/phansad-wildlife-sanctuary" className="text-gray-600 tracking-wider leading-10 hover:text-gray-800 font-serif">
          
           Blog 2
     
            </Link>
          </p>
        </div>
        <div className="col text-center text-xl">
          <p>
            <Link href="/blogs/shrivardhan-beach" className="text-gray-600 tracking-wider leading-10 hover:text-gray-800 font-serif">
         
                Blog 3
           
            </Link>
          </p>
        </div>
        <div className="col text-center text-xl">
          <p>
            <Link href="/blogs/harihareshwar-temple-beach" className="text-gray-600 tracking-wider leading-10 hover:text-gray-800 font-serif">
          
              Blog 4
         
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResortInfoSection;
