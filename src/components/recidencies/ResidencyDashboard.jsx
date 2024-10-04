import React from 'react';
import img1 from '../../assets/ResidencyDashboard/1-.png'
import UserNav from '../recidencies/ResidencyNav';
import Gallery from '../recidencies/Gallery';
import Services from '../recidencies/Services';
import About from '../recidencies/About';

const UserDashboard = () => {
  return (
    <>
      <div className="bg-pink-100 min-h-screen flex flex-col h-full w-full">
        <UserNav/>
        {/* Full Width Image */}
        <div className="flex justify-center h-full w-full my-8">
          <img
            src={img1}
            alt="Dashboard Image 1"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
      <Gallery/>
      <Services/>
      <About/>
    </>
  );
};

export default UserDashboard;
