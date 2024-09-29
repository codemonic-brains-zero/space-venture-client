import React from 'react';
import UserNav from './UserNav';
import img1 from '../../assets/UserDashboard/1-.png'
import Gallery from './Gallery';
import Services from './Services';
import About from './About';

const UserDashboard = () => {
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
    <Gallery/>
    <Services/>
    <About/>
    </div>
    </>
  );
};

export default UserDashboard;
