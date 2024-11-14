"use client";
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
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-6 sm:px-8 md:px-16 lg:px-24">
        <h2
          className="font-extrabold text-3xl sm:text-4xl text-center mb-12"
          data-aos="fade-up"
        >
          About Me
        </h2>
        
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Image Section */}
          <div
            className="w-60 h-60 sm:w-72 sm:h-80 rounded-lg mb-8 md:mb-0 mx-auto md:mx-0"
            data-aos="fade-right"
          >
            <Image
              src="/pl.png"
              alt="Sawera"
              width={288}
              height={320}
              className="rounded-2xl object-cover"
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 px-4 sm:px-0" data-aos="fade-left">
            <p className="text-lg mb-8">
              I am a passionate web developer focused on creating engaging, user-friendly websites. With a strong background in HTML, CSS, JavaScript, and Tailwind, I thrive on turning ideas into seamless digital experiences. I love staying up-to-date with the latest technologies and collaborating with clients to bring their visions to life. {`Let's`} work together to build something amazing!
            </p>
            
            <div className="space-y-4 mb-12">
              {/* HTML & CSS Progress Bar */}
              <div className="flex items-center" data-aos="fade-up" data-aos-delay="200">
                <label htmlFor="htmlandcss" className="w-2/12 sm:w-1/6">HTML & CSS</label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-customPink to-customBlue h-2.5 rounded-full transition-transform duration-300 w-10/12"></div>
                </div>
              </div>

              {/* React JS Progress Bar */}
              <div className="flex items-center" data-aos="fade-up" data-aos-delay="400">
                <label htmlFor="reactjs" className="w-2/12 sm:w-1/6">React JS</label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-customPink to-customBlue h-2.5 rounded-full transition-transform duration-300 w-9/12"></div>
                </div>
              </div>

              {/* Next JS Progress Bar */}
              <div className="flex items-center" data-aos="fade-up" data-aos-delay="600">
                <label htmlFor="nextjs" className="w-2/12 sm:w-1/6">Next JS</label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-customPink to-customBlue h-2.5 rounded-full transition-transform duration-300 w-9/12"></div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-12 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
              <div data-aos="fade-up" data-aos-delay="800">
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-customPink to-customBlue">1+</h3>
                <p>Years Experience</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="1000">
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-customPink to-customBlue">10+</h3>
                <p>Projects Completed</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="1200">
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-customPink to-customBlue">5+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
