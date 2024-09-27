import React from 'react';
import MessNav from './MessNav';

const MessCard = ({ name, image, description, rating }) => {
  return (

    <>
      <div>
        <MessNav></MessNav>
      </div>
      <div className="flex bg-[#efe1de] rounded-lg shadow-md overflow-hidden">
        <div className="flex-shrink-0">
          <img src={image} alt={name} className="w-64 h-96 object-cover" />
        </div>
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed whitespace-pre-line">
              {description}
            </p>
          </div>
          <div className="mt-6">
            <div className="flex space-x-4">
              <button className="bg-[#5b3846] text-white px-4 py-2 rounded-md hover:bg-white hover:text-black">
                Contact Now
              </button>
              <button className="bg-pink-500 text-black px-4 py-2 rounded-md hover:bg-black hover:text-white">
                Explore More
              </button>
            </div>
            <div className="mt-4">
              <span className="inline-block bg-yellow-400 text-yellow-800 font-semibold px-2 py-1 rounded">
                {rating} ★
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default MessCard;
