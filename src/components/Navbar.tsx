"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from '../../public/Logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 600, // Animation duration in ms
      easing: 'ease-in-out', // Easing function
      once: true, // Animation occurs only once
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white px-6 sm:px-8 md:px-16 lg:px-24">
      <div
        className="container mx-auto py-3 flex justify-between items-center"
        data-aos="fade-down"
      >
        {/* Logo */}
        <Image
          src={Logo}
          className="hidden sm:inline" // Hide on xs screen, show on sm and up
          alt="sold"
          width={80}
          height={80}
          data-aos="zoom-in"
        />

        {/* Hamburger menu (visible on small screens) */}
        <button
          onClick={toggleMenu}
          className="sm:hidden text-white focus:outline-none"
          data-aos="fade-up"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navbar links (hidden on small screens, visible on larger screens) */}
        <div className="hidden sm:flex space-x-6 items-center">
          <a href="#home" className="hover:text-gray-400" data-aos="fade-up">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400" data-aos="fade-up" data-aos-delay="50">
            About Me
          </a>
          <a href="#services" className="hover:text-gray-400" data-aos="fade-up" data-aos-delay="100">
            Services
          </a>
          <a href="#contact" className="hover:text-gray-400" data-aos="fade-up" data-aos-delay="150">
            Contact Me
          </a>

          {/* Connect Me button (visible on medium screens and up) */}
          <button
            className="bg-gradient-to-r from-customPink to-customBlue text-black hidden sm:inline-block transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Connect Me
          </button>
        </div>
      </div>

      {/* Mobile menu (visible on smaller screens only) */}
      {isMenuOpen && (
        <div
          className="sm:hidden bg-black text-white p-4 space-y-4"
          data-aos="fade-up"
        >
          <a href="#home" className="block hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="block hover:text-gray-400">
            About Me
          </a>
          <a href="#services" className="block hover:text-gray-400">
            Services
          </a>
          <a href="#contact" className="block hover:text-gray-400">
            Contact Me
          </a>

          <button
            className="bg-gradient-to-r from-customPink to-customBlue text-black w-full transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
            data-aos="zoom-in"
          >
            Connect Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
