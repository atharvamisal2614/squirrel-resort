// components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-modern bg-gray-900 text-white py-8 tracking-wider leading-10">
      <div className="footer-container max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* About Us Section */}
        <div className="footer-section">
          <h4 className="text-lg font-semibold mb-2 font-serif">About Us</h4>
          <p className="text-gray-300 font-serif">
            Discover the ultimate getaway at Squirrel Resort near the Diveagar Beach.
          </p>
        </div>

        {/* General Section */}
        <div className="footer-section">
          <h4 className="text-lg font-semibold mb-2 font-serif">General</h4>
          <ul>
            <li><a href="#" className="text-gray-400 hover:text-gray-200 font-serif">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-200 font-serif">Rooms</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-200 font-serif">Services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-200 font-serif">Experiences</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-200 font-serif">FAQ&apos;s</a></li>
          </ul>
        </div>

        {/* Connect Section */}
        <div className="footer-section">
          <h4 className="text-lg font-semibold mb-2 font-serif">Connect</h4>
          <ul>
            <li><a href="#" className="text-gray-400 hover:text-gray-200 font-serif">Facebook</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-200 font-serif">Instagram</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-200 font-serif">WhatsApp</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-200 font-serif">Tripadvisor</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-200 font-serif">YouTube</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="footer-section">
          <h4 className="text-lg font-semibold mb-2 font-serif">Contact Us</h4>
          <p className="text-gray-300 font-serif">
            Email: <a href="mailto:shivneri@gmail.com" className="text-gray-400 hover:text-gray-200 font-serif">shivneri@gmail.com</a>
          </p>
          <p className="text-gray-300 font-serif">
            Phone: <a href="tel:+919090064242" className="text-gray-400 hover:text-gray-200 font-serif">+91 9090064242</a>, 
            <a href="tel:+919090074242" className="text-gray-400 hover:text-gray-200 font-serif"> 9090074242</a>
          </p>
          <p className="text-gray-300 font-serif">
            Address: Gut No. 567/B Talani Pakhadi, Diveagar, Maharashtra 402404
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
