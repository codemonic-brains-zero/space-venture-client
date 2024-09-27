import React from 'react';
import UserNav from '../../components/client/UserNav';
import img1 from '../../assets/MessDashboard/img1.png'

const MessDashboard = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col h-full w-full">
      {/* Navbar */}
      <UserNav/>

      {/* Image */}
      <div className="flex justify-center">
        <img 
          src={img1}
          alt="Dashboard Image" 
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default MessDashboard;
