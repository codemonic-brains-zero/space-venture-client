import React from 'react';
import { Link } from 'react-router-dom';

const MessNav = () => {
  return (
    <nav className="bg-[#5b3846] text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="text-white hover:text-yellow-300">MessLogo</Link>
        </div>

        {/* Nav Items */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
          <Link to="/contact-us" className="hover:text-yellow-300">Contact Us</Link>
          <Link to="/menu" className="hover:text-yellow-300">Our Menu</Link>
        </div>

        {/* Mobile Menu (Hamburger Icon) */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MessNav;
