"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../public/Logo.png';
import AOS from "aos";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div
        className='container py-2 flex justify-between items-center'
        data-aos='fade-down' // Add AOS fade-down animation
      >
        <Image
          src={Logo}
          className='hidden md:inline'
          alt='sold'
          width={100}
          height={100}
          data-aos='zoom-in' // Add AOS zoom-in animation to logo
        />

        {/* Hamburger menu (visible on small screens) */}
        <button
          onClick={toggleMenu}
          className='md:hidden text-white focus:outline-none'
          data-aos='fade-up' // Add AOS fade-up animation to the hamburger icon
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>

        {/* Navbar links */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex space-x-6 items-center`}
        >
          <a href='#home' className='hover:text-gray-400 sm:hidden' data-aos='fade-up'>
            Home
          </a>
          <a href='#about' className='hover:text-gray-400 sm:hidden' data-aos='fade-up'>
            About Me
          </a>
          <a href='#services' className='hover:text-gray-400 sm:hidden' data-aos='fade-up'>
            Services
          </a>
          <a href='#contact' className='hover:text-gray-400 sm:hidden' data-aos='fade-up'>
            Contact Me
          </a>

          {/* Connect Me button (visible on medium screens and up) */}
          <button
            className='bg-gradient-to-r from-customPink to-customBlue text-black hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
            data-aos='zoom-in' // Add AOS zoom-in animation to the button
          >
            Connect Me
          </button>
        </div>
      </div>

      {/* Mobile version of the menu (visible on smaller screens) */}
      {isMenuOpen && (
        <div
          className='md:hidden bg-black text-white p-4 space-y-4'
          data-aos='fade-up' // Add fade-up animation for the mobile menu
        >
          <a href='#home' className='block hover:text-gray-400'>
            Home
          </a>
          <a href='#about' className='block hover:text-gray-400'>
            About Me
          </a>
          <a href='#services' className='block hover:text-gray-400'>
            Services
          </a>
          <a href='#contact' className='block hover:text-gray-400'>
            Contact Me
          </a>

          <button
            className='bg-gradient-to-r from-customPink to-customBlue text-black w-full transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
            data-aos='zoom-in' // Add zoom-in animation for the mobile button
          >
            Connect Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
