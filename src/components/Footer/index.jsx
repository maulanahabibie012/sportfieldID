//footer
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link to="/about" className="hover:text-gray-400">About Us</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
          <Link to="/privacy" className="hover:text-gray-400">Privacy Policy</Link>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400"><FaFacebook /></a>
          <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
          <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;