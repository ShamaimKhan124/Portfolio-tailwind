"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from "aos";
import 'aos/dist/aos.css'; 

const Hero = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-out', 
      once: true, 
      offset: 200, 
    });
  }, []);

  return (
    <div className="bg-black text-white text-center py-16 px-8 md:px-16 lg:px-24">
      {/* Profile Image */}
      <Image
        src="/pl.png"
        alt="Sawera"
        width={200}
        height={200}
        className="mx-auto mb-8 w-48 animate-pulse rounded-2xl object-cover transform transition-transform duration-300 hover:scale-105"
        data-aos="fade-up"
      />

      {/* Name & Role */}
      <h1
        className="text-4xl font-bold"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {`I'm`} {""}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-customPink to-customBlue">
          Shamaim Khan
        </span>
        , Web Developer
      </h1>

      {/* Description */}
      <p
        className="mt-4 text-lg text-gray-300"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        I specialize in building modern and responsive web applications.
      </p>

      {/* Buttons */}
      <div className="mt-8 space-y-4 md:space-x-4 md:space-y-0 flex flex-col md:flex-row items-center justify-center">
        <button
          className="bg-gradient-to-r from-customPink to-customBlue font-semibold text-black transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full w-full md:w-auto"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Contact With Me
        </button>
        <button
          className="bg-gradient-to-r from-customPink to-customBlue font-semibold text-black transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full w-full md:w-auto"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
