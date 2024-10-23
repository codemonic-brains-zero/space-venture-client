import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MessNav from './MessNav';

const MessCard = ({ messOutlets }) => {
  // States for mess search and location search
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');

  // Filter the mess outlets based on the search query and location query
  const filteredMessOutlets = messOutlets?.filter((mess) => {
    const messName = mess.name ? mess.name.toLowerCase() : ''; // Fallback to empty string if undefined
    const messLocation = mess.location ? mess.location.toLowerCase() : ''; // Fallback to empty string if undefined
    return messName.includes(searchQuery.toLowerCase()) &&
      messLocation.includes(locationQuery.toLowerCase());
  });

  return (
    <>
      <MessNav />
      <div className=' min-h-screen  w-screen  py-8'>

        {/* Search Bars in the center */}
        <div className='flex justify-center items-center gap-56 bg-thulian-pink h-20 space-x-4 mb-8'>
          {/* Mess Search Bar */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Mess Outlet..."
            className="w-full max-w-sm px-4 py-2  text-black rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
          />

          {/* Location Search Bar */}
          <input
            type="text"
            value={locationQuery}
            onChange={(e) => setLocationQuery(e.target.value)}
            placeholder="Search by Location..."
            className="w-full max-w-sm px-4 py-2  text-black  rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        {/* Mess Outlets List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-center px-4">
          {filteredMessOutlets?.length > 0 ? (
            filteredMessOutlets.map((mess) => (
              <div
                key={mess.id || mess.name} // Use a unique key if available
                className="bg-[#F7D7DC] border-3 border-red-400 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105"
              >
                {/* Image Section */}
                <div className="flex-shrink-0">
                  <img src={mess.image} alt={mess.name} className="w-full h-48 object-cover rounded-t-lg" />
                </div>

                {/* Content Section */}
                <div className="p-4 flex flex-col justify-between w-full">
                  <h2 className="text-xl font-semibold text-gray-800 text-center">{mess.name}</h2>

                  <p className="mt-2 text-sm text-black font-semibold leading-relaxed text-center">
                    {mess.description}
                  </p>

                  <div className="mt-2 text-gray-700 text-center">
                    <p className="text-sm font-semibold">Price: {mess.price}</p>
                    <p className="text-xs text-black font-semibold">Delivery Time: {mess.deliveryTime}</p>
                  </div>

                  <div className="mt-2 text-center">
                    <span className="text-sm font-semibold text-gray-700">
                      Rating: {mess.rating} / 5
                    </span>
                  </div>

                  {/* Display Location */}
                  <div className="mt-2 text-center">
                    <span className="text-sm font-semibold text-gray-700">
                      Location: {mess.location}
                    </span>
                  </div>

                  {/* Buttons Section */}
                  <div className="mt-4 flex justify-center space-x-4">
                    {/* Contact Now Button */}
                    <Link to="/ContactUs">
                      <button className="bg-[#5b3846] text-white px-3 py-1 rounded-md transition-all duration-300 ease-in-out transform hover:bg-white hover:text-black hover:scale-105">
                        Contact Now
                      </button>
                    </Link>

                    <Link to="/ExploreNow">
                      <button className="bg-pink-500 text-black px-3 py-1 rounded-md transition-all duration-300 ease-in-out transform hover:bg-black hover:text-white hover:scale-105">
                        Explore More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No mess outlets found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MessCard;
