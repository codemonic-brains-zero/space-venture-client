import React from 'react';
import UserNav from './UserNav';
import img1 from '../../assets/UserDashboard/1-.png';
import img2 from '../../assets/UserDashboard/2.png';
import img3 from '../../assets/UserDashboard/3.png';
import img6 from '../../assets/UserDashboard/1.png';
import img4 from '../../assets/UserDashboard/4.png';
import img5 from '../../assets/UserDashboard/5.png';
import img7 from '../../assets/UserDashboard/6.png';
import img8 from '../../assets/UserDashboard/7.png';
import img9 from '../../assets/UserDashboard/8.png';
import img10 from '../../assets/UserDashboard/9.png';

const UserDashboard = () => {
  return (
    <div className="bg-pink-100 min-h-screen flex flex-col h-full w-full">
      {/* Navbar */}
      <UserNav />

      {/* Full Width Image */}
      <div className="flex justify-center h-full w-full my-8">
        <img
          src={img1}
          alt="Dashboard Image 1"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>

      {/* Gallery Section */}
      <div className="bg-pink-100 h-full flex flex-col items-center justify-center py-12">
        <div className="w-full max-w-6xl">
          <h1 className="text-6xl font-extrabold text-[#6E4555] mb-8 text-center">
            GALLERY OF ROOM QUEST
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* Image 1 */}
            <div className="gallery-item bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-110">
              <img
                src={img3}
                alt="Gallery Image 1"
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="gallery-item bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-110">
              <img
                src={img2}
                alt="Gallery Image 2"
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Image 3 */}
            <div className="gallery-item bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-110">
              <img
                src={img4}
                alt="Gallery Image 3"
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Image 4 */}
            <div className="gallery-item bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-110">
              <img
                src={img5}
                alt="Gallery Image 4"
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Image 5 */}
            <div className="gallery-item bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-110">
              <img
                src={img6}
                alt="Gallery Image 5"
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Image 6 */}
            <div className="gallery-item bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-110">
              <img
                src={img7}
                alt="Gallery Image 6"
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Image 7 */}
            <div className="gallery-item bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-110">
              <img
                src={img8}
                alt="Gallery Image 7"
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Image 8 */}
            <div className="gallery-item bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-110">
              <img
                src={img9}
                alt="Gallery Image 8"
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Image 9 */}
            <div className="gallery-item bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-110">
              <img
                src={img10}
                alt="Gallery Image 9"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
