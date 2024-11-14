"use client"
import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_zv5n18t',
        'template_s5c60vx',
        formData,
        'HfWzIrZ8qtk-pl0yC'
      );
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert('Something went wrong, please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Handle scroll event for showing scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Initialize AOS animation
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-back',
      once: true,
    });
  }, []);

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2
          className="font-extrabold text-4xl text-center mb-12"
          data-aos="fade-up"
        >
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Contact Info Section */}
          <div className="flex-1" data-aos="fade-right">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-customPink to-customBlue mb-4">
              {`Let's`} Talk
            </h3>
            <p>
              I am ready to discuss web development projects or partnership
              opportunities.
            </p>
            <div className="mb-4">
              <FaEnvelope className="inline-block text-customBlue mr-2" />
              <a href="mailto:shamaimk59@gmail.com" className="hover:underline">
                shamaimk59@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-customBlue mr-2" />
              <span>+92332-0215294</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-customBlue mr-2" />
              <span>Karachi, Pakistan</span>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="flex-1 w-full" data-aos="fade-left">
            <form
              className="space-y-4"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-customBlue"
                  placeholder="Enter Your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-customBlue"
                  placeholder="Enter Your Email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-customBlue"
                  placeholder="Enter Your Message"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-customPink to-customBlue text-black transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Scroll-to-top Button */}
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
