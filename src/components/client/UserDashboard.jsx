import React from 'react';
import img1 from '../../assets/UserDashboard/user.png'

const UserDashboard = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col h-full w-full">
      {/* Navbar */}

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

export default UserDashboard;
