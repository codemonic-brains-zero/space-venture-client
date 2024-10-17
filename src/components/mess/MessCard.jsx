import React from 'react';
import { Link } from 'react-router-dom';

const MessCard = ({ name, images = [], description, price, deliveryTime, rating }) => {
  return (
    <div className="bg-[#efe1de] rounded-lg shadow-md overflow-hidden flex flex-col items-center">

      {/* Image Section */}
      {images.length > 0 && (
        <div className="w-full flex flex-wrap justify-center">
          {images.map((image, index) => (
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt={`${name} ${index + 1}`}
              className="w-1/4 h-40 object-cover m-2"
            />
          ))}
        </div>
      )}

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

        {/* Buttons Section with Flexbox for Left and Right Alignment */}
        <div className="mt-6 flex w-full">
          <Link to="/ContactUs" className="flex-grow">
            <button className="bg-[#5b3846] text-white px-4 py-2 rounded-l-md w-full hover:bg-white hover:text-black">
              Contact Now
            </button>
          </Link>

          <Link to="/ExploreNow" className="flex-grow">
            <button className="bg-pink-500 text-black px-4 py-2 rounded-r-md w-full hover:bg-black hover:text-white">
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MessCard;
