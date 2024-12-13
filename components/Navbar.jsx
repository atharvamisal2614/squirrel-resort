import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      imageUrl: '/images/hotel1.jpg',
      title: 'Discover Serenity',
      subtitle: 'Where Luxury Meets Nature',
      link: '/stay',
    },
    {
      imageUrl: '/images/hotel2.jpg',
      title: 'Experience Elegance',
      subtitle: 'Your Perfect Getaway Awaits',
      link: '/stay',
    },
    {
      imageUrl: '/images/hotel3.jpg',
      title: 'Welcome to Squirrel Resort',
      subtitle: 'Redefining Comfort and Style',
      link: '/stay',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <header>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-orange-50 p-4 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src="/images/squirrel-logo.png" alt="Logo" className="w-32 h-20" />
           
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-gray-800 hover:text-orange-400">Home</Link>
            <Link href="/about" className="text-gray-800 hover:text-orange-400">About Us</Link>
            <Link href="/rooms" className="text-gray-800 hover:text-orange-400">Rooms</Link>
            <Link href="/gallery" className="text-gray-800 hover:text-orange-400">Gallery</Link>
            <Link href="/contact" className="text-gray-800 hover:text-orange-400">Contact</Link>
            <button
              onClick={toggleSearch}
              className="text-gray-800 hover:text-orange-400 flex items-center"
            >
              <FaSearch size={18} />
            </button>
            <Link
              href="/book"
              className="bg-customOrange text-white px-4 py-2 rounded shadow-lg hover:bg-orange-600"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-customOrange focus:outline-none"
          >
            <FaBars size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-3/4 h-full bg-orange-50 text-gray-800 transition-transform transform md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-customOrange focus:outline-none"
          >
            <FaTimes size={24} />
          </button>
          <div className="flex flex-col items-center space-y-6 mt-16">
            <Link href="/" className="hover:text-orange-400" onClick={toggleMenu}>Home</Link>
            <Link href="/about" className="hover:text-orange-400" onClick={toggleMenu}>About Us</Link>
            <Link href="/rooms" className="hover:text-orange-400" onClick={toggleMenu}>Rooms</Link>
            <Link href="/gallery" className="hover:text-orange-400" onClick={toggleMenu}>Gallery</Link>
            <Link href="/contact" className="hover:text-orange-400" onClick={toggleMenu}>Contact</Link>
            <Link href="/book" className="bg-customOrange px-4 py-2 text-white rounded shadow-lg hover:bg-orange-600" onClick={toggleMenu}>Book Now</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Slider */}
      <div className="relative w-full h-screen overflow-hidden mt-16">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition duration-700 ease-in-out transform ${
              index === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-95'
            }`}
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          >
            <div className="absolute inset-0 bg-black opacity-40" />
            <div className="flex items-center justify-center h-full relative">
              <div className="text-center text-white p-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-2xl mb-6 animate-fade-in-slow">
                  {slide.subtitle}
                </p>
                <Link
                  href={slide.link}
                  className="px-6 py-3 text-lg font-medium bg-customOrange hover:bg-orange-600 rounded shadow-lg transition duration-300"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Search Bar */}
      {searchOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="relative bg-white rounded-lg p-4 w-4/5 max-w-md">
            <button
              onClick={toggleSearch}
              className="absolute top-2 right-2 text-gray-500 focus:outline-none"
            >
              <FaTimes size={20} />
            </button>
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
