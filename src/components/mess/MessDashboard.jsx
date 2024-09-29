import React from 'react';
import UserNav from '../client/UserNav'
import img1 from '../../assets/MessDashboard/img1.png'
import Gallery from '../mess/Gallery';
import Services from '../mess/Services'
import About from '../mess/About';

const MessDashboard = () => {
  return (
    <>
    <div className="bg-pink-100 min-h-screen flex flex-col h-full w-full">
      {/* Navbar */}
      <UserNav />

      {/* Full Width Image */}
      <div className="flex justify-center h-full w-full my-8">
        <img
          src={img1}
          alt="Dashboard Image 1"
          className="rounded-lg max-w-full h-auto"
        />
      </div>
    </div>
    <Gallery/>
    <Services/>
    <About/>
    </>
  );
};

export default MessDashboard;
