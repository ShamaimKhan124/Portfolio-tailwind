"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    
    AOS.init({
      duration: 1000, 
      easing: 'ease-out-back',  
      once: true,  
    });
  }, []);

  return (
    <div className='bg-black text-white py-20' id='about'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 
          className='font-extrabold text-4xl text-center mb-12'
          data-aos="fade-up" 
        >
          About Me
        </h2>
      </div>

      <div className='flex flex-col md:flex-row items-center md:space-x-12'>
        {/* Image Section */}
        <div 
          className="w-72 h-80 ml-24 rounded object-cover mb-8 md:mb-0 sm:mx-9 lg:ml-24"
          data-aos="fade-right" 
        >
          <Image 
            src="/pl.png" 
            alt="sawera" 
            width={288} 
            height={320} 
            className="animate-pulse" 
          />
        </div>

        {/* Text Section */}
        <div className='flex-1' data-aos="fade-left"> 
          <p className='text-lg mb-8 lg:mr-24'>
            I am a passionate web developer focused on creating engaging, user-friendly websites. With a strong background in
            HTML, CSS, and JavaScript Tailwind, I thrive on turning ideas into seamless digital experiences. I love staying up-to-date with
            the latest technologies and collaborating with clients to bring their visions to life. {`Let's`} work together to build
            something amazing!
          </p>
          
          <div className='space-y-4 m-24'>
            {/* HTML & CSS Progress Bar */}
            <div className='flex items-center' data-aos="fade-up" data-aos-delay="200">
              <label htmlFor='htmlandcss' className='w-2/12'>
                HTML & CSS
              </label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-customPink to-customBlue h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'></div>
              </div>
            </div>

            {/* React JS Progress Bar */}
            <div className='flex items-center' data-aos="fade-up" data-aos-delay="400">
              <label htmlFor='reactjs' className='w-2/12'>
                React JS
              </label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-customPink to-customBlue h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'></div>
              </div>
            </div>

            {/* Next JS Progress Bar */}
            <div className='flex items-center' data-aos="fade-up" data-aos-delay="600">
              <label htmlFor='nextjs' className='w-1/12'>
                Next JS
              </label>
              <div className='grow bg-gray-800 rounded-full h-2.5'>
                <div className='bg-gradient-to-r from-customPink to-customBlue h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'></div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className='mt-12 m-24 flex justify-between text-center'>
            <div data-aos="fade-up" data-aos-delay="800">
              <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-customPink to-customBlue'>1+</h3>
              <p>Years Experience</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="1000">
              <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-customPink to-customBlue'>10+</h3>
              <p>Projects Completed</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="1200">
              <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-customPink to-customBlue'>5+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
