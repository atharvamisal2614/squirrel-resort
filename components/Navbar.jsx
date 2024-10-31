// components/Navbar.jsx
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';

const slides = [
  {
    imageUrl: '/images/hotel1.jpg',
    title: 'Welcome to Squirrel Resort',
    subtitle: 'Your Ultimate Escape to Paradise',
    link: '/stay',
  },
  {
    imageUrl: '/images/hotel2.jpg',
    title: 'Welcome to Squirrel Resort',
    subtitle: 'Your Ultimate Escape to Paradise',
    link: '/stay',
  },
  {
    imageUrl: '/images/hotel3.jpg',
    title: 'Welcome to Squirrel Resort',
    subtitle: 'Your Ultimate Escape to Paradise',
    link: '/stay',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative text-gray-600 body-font">
      {/* Slider Container */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Slide Container */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition duration-700 ease-in-out transform ${
              index === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-95'
            }`}
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          >
            {/* Image Overlay */}
            <div className="absolute inset-0 bg-black opacity-40" />
            <div className="flex items-center justify-center h-full relative">
              <div className="text-center text-white p-4 md:p-8 z-10">
                <h2 className="text-lg md:text-xl font-semibold mb-2">{slide.title}</h2>
                <h1 className="text-2xl md:text-4xl font-bold mb-4">{slide.subtitle}</h1>
                <Link href={slide.link} className="inline-block px-4 py-2 mt-4 text-lg font-medium text-white border border-white rounded transition duration-300 opacity-90">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Sticky Navbar with Background Color */}
        <nav className="sticky top-0 left-0 w-full bg-opacity-70 text-white p-4 flex justify-between items-center z-50">
          <Link href="/" className="flex title-font font-medium items-center">
            <img src="/images/squirrel-logo.png" alt="Logo" className="w-28 h-20" />
          </Link>
          <div className="hidden md:flex md:ml-auto md:space-x-5">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/about" className="hover:text-gray-300">About Us</Link>
            <Link href="/" className="hover:text-gray-300">Accommodations</Link>
            <Link href="/" className="hover:text-gray-300">Gallery</Link>
            <Link href="/" className="hover:text-gray-300">Contact Us</Link>
            <Link href="/" className="hover:text-gray-300">Book Now</Link>
          </div>
          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-gray-900 focus:outline-none">
            <FaBars size={24} />
          </button>
        </nav>
      </div>

      {/* Mobile Navbar Links */}
      <nav className={`fixed top-0 right-0 w-full h-full bg-white text-black flex flex-col items-center justify-center space-y-6 transition-transform transform md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <Link href="/" className="hover:text-gray-300" onClick={toggleMenu}>Home</Link>
        <Link href="/" className="hover:text-gray-300" onClick={toggleMenu}>About Us</Link>
        <Link href="/" className="hover:text-gray-300" onClick={toggleMenu}>Accommodations</Link>
        <Link href="/" className="hover:text-gray-300" onClick={toggleMenu}>Gallery</Link>
        <Link href="/" className="hover:text-gray-300" onClick={toggleMenu}>Contact Us</Link>
        <Link href="/" className="hover:text-gray-300" onClick={toggleMenu}>Book Now</Link>
      </nav>
    </header>
  );
};

export default Navbar;
