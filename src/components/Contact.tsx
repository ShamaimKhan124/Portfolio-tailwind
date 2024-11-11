"use client"
import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from 'react-icons/fa';

const Contact = () => {
  const [visible, setVisible] = useState(false);

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true); 
      } else {
        setVisible(false); 
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="font-extrabold text-4xl text-center mb-12">Contact Me</h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-customPink to-customBlue mb-4">
              {`Let's Talk`}
            </h3>
            <p>I am ready to discuss web development projects or partnership opportunities.</p>
            <div className="mb-4">
              <FaEnvelope className="inline-block text-customBlue mr-2" aria-label="Email" />
              <a href="mailto:shamaimk59@gmail.com" className="hover:underline">shamaimk59@gmail.com</a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-customBlue mr-2" aria-label="Phone" />
              <span>+92332-0215294</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-customBlue mr-2" aria-label="Address" />
              <span>Karachi, Pakistan</span>
            </div>
          </div>

          <div className="flex-1 w-full">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-customBlue"
                  placeholder="Enter Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-customBlue"
                  placeholder="Enter Your Email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-customBlue"
                  placeholder="Enter Your Message"
                />
              </div>

              <button className="bg-gradient-to-r from-customPink to-customBlue text-black transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-customPink to-customBlue text-white px-6 py-3 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none"
          aria-label="Back to Top"
        >
          ↑ Top
        </button>
      )}
    </div>
  );
};

export default Contact;
