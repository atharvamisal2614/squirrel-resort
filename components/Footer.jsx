// components/Footer.jsx
import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-orange-50 text-black py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and About Section */}
        <div className="footer-section text-center lg:text-left">
          <div className="flex justify-center lg:justify-start mb-4">
            <Image src="/images/squirrel-logo.png" alt="Squirrel Resort Logo" width={120} height={120} />
          </div>
          <h4 className="text-lg font-bold mb-2 font-serif">Squirrel Resort</h4>
          <p className="text-gray-400 font-serif leading-relaxed">
            Discover the ultimate getaway at Squirrel Resort, where luxury meets serenity.
          </p>
        </div>

        {/* General Links */}
        <div className="footer-section">
          <h4 className="text-lg font-semibold mb-2 font-serif">General</h4>
          <ul className="space-y-2">
            <li><a className="text-gray-800 hover:text-gray-500 font-serif">About Us</a></li>
            <li><a className="text-gray-700 hover:text-gray-500 font-serif">Rooms</a></li>
            <li><a className="text-gray-700 hover:text-gray-500 font-serif">Services</a></li>
            <li><a className="text-gray-700 hover:text-gray-500 font-serif">Experiences</a></li>
            <li><a className="text-gray-700 hover:text-gray-500 font-serif">FAQ&apos;s</a></li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div className="footer-section">
          <h4 className="text-lg font-semibold mb-2 font-serif">Connect</h4>
          <ul className="space-y-2">
            <li><a className="text-gray-700 hover:text-gray-500 font-serif">Facebook</a></li>
            <li><a className="text-gray-700 hover:text-gray-500 font-serif">Instagram</a></li>
            <li><a className="text-gray-700 hover:text-gray-500 font-serif">WhatsApp</a></li>
            <li><a className="text-gray-700 hover:text-gray-500 font-serif">Tripadvisor</a></li>
            <li><a className="text-gray-700 hover:text-gray-500 font-serif">YouTube</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h4 className="text-lg font-semibold mb-2 font-serif">Contact Us</h4>
          <p className="text-gray-700 font-serif">
            Email: <a href="mailto:squirrel@gmail.com" className="text-gray-700 hover:text-gray-500 font-serif">squirrel@gmail.com</a>
          </p>
          <p className="text-gray-700 font-serif">
            Phone: <a href="tel:+919090064242" className="text-gray-700 hover:text-gray-500 font-serif">+91 9999999999</a>, 
            <a href="tel:+919090074242" className="text-gray-700 hover:text-gray-500 font-serif">9999999999</a>
          </p>
          <p className="text-gray-700 font-serif">
            Address: Gut No. 876, abcde, abcde, Pune
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Squirrel Resort. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
