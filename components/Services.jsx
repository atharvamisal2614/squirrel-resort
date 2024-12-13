import React from 'react';
import { FaSwimmer, FaUtensils, FaSpa, FaCocktail, FaCarAlt, FaCampground, FaWifi, FaUmbrellaBeach, FaConciergeBell, FaDumbbell, FaHiking, FaMusic } from 'react-icons/fa';

const Services = () => {
  const services = [
    { name: 'Swimming Pool', icon: <FaSwimmer /> },
    { name: 'Dining', icon: <FaUtensils /> },
    { name: 'Spa', icon: <FaSpa /> },
    { name: 'Bar', icon: <FaCocktail /> },
    { name: 'Parking', icon: <FaCarAlt /> },
    { name: 'Camping', icon: <FaCampground /> },
    { name: 'Free Wi-Fi', icon: <FaWifi /> },
    { name: 'Beach Access', icon: <FaUmbrellaBeach /> },
    { name: 'Room Service', icon: <FaConciergeBell /> },
    { name: 'Gym', icon: <FaDumbbell /> },
    { name: 'Adventure Activities', icon: <FaHiking /> },
    { name: 'Live Music', icon: <FaMusic /> },
  ];

  return (
    <div className="w-full py-12 bg-orange-50">
      <div className="text-center mb-8">
    
        <h1 className="text-2xl md:text-4xl mb-2 text-customOrange font-serif tracking-wide">Our Premium Services</h1>
        <h2 className="text-md md:text-lg font-medium text-gray-800 font-serif tracking-widest">
          Everything you need for an unforgettable stay
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center 
            bg-orange-50 
            p-6 
            transition-all 
            duration-300"
          >
            <div className="text-orange-700 text-4xl mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-gray-700 font-serif tracking-widest">
              {service.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
