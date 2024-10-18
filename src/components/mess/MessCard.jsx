import React from 'react';
import { Link } from 'react-router-dom';

const MessCard = ({ name, image, description, price, deliveryTime, rating }) => {
  return (
    <>
      {/* Mess Card */}
      <div className="flex bg-pink-200 border-2 border-pink-500 rounded-lg shadow-md overflow-hidden mb-6">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img src={image} alt={name} className="w-64 h-96 object-cover" />
        </div>
    

        {/* Content Section */}
        <div className="p-6 flex flex-col justify-between w-full">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">{name}</h2>

          <p className="mt-4 text-lg text-gray-600 leading-relaxed whitespace-pre-line text-center">
            {description}
          </p>

          <div className="mt-4 text-gray-700 text-center">
            <p className="text-lg font-semibold">Price: {price}</p>
            <p className="text-sm">Delivery Time: {deliveryTime}</p>
          </div>

          <div className="mt-4 text-center">
            <span className="text-lg font-semibold text-gray-700">
              Rating: {rating} / 5
            </span>
          </div>

          {/* Buttons Section */}
          <div className="mt-6 flex space-x-4">
            {/* Contact Now Button (React internal navigation) */}
            <Link to="/ContactUs">
              <button className="bg-[#5b3846] text-white px-4 py-2 rounded-md hover:bg-white hover:text-black">
                Contact Now
              </button>
            </Link>


            <Link to="/ExploreNow">
              <button className="bg-pink-500 text-black px-4 py-2 rounded-md hover:bg-black hover:text-white">
                Explore More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessCard;
