import { div } from 'motion/react-client';
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='w-full bg-base-300'>
      <div className="container mx-auto  py-8 px-12">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {/* Company Info */}
        <div>
          <h2 className="text-3xl font-bold text-primary mb-4">Restaurant Management 🍽️</h2>
          <p className="text-lg text-gray-600 mb-4">
            We are seeking a skilled MERN Stack Developer to help us enhance our Restaurant Management Website. Join us and become a part of something amazing.
          </p>
          <p className="text-sm text-gray-500">
            &copy; 2024 Restaurant Management. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-4">Quick Links</h3>
          <ul className="text-lg text-gray-600">
            <li className="mb-2">
              <Link to="/" className="hover:text-primary">Home</Link>
            </li>
            <li className="mb-2">
              <Link to="/allfoods" className="hover:text-primary">All Food</Link>
            </li>
            <li className="mb-2">
              <Link to="/gallery" className="hover:text-primary">Gallery</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-8">Follow Us</h3>
          <div className="flex justify-start gap-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} className="text-gray-600 hover:text-blue-600" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} className="text-gray-600 hover:text-blue-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} className="text-gray-600 hover:text-blue-700" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} className="text-gray-600 hover:text-pink-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Job Call-to-Action */}
      <div className="mt-8 text-center">
        <p className="text-lg text-gray-700 mb-3">
          Join our team! We are looking for a MERN Stack Developer to help us build the future of Restaurant Management.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Footer;
