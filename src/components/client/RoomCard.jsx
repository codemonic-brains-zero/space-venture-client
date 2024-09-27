import React from "react";

const RoomCard = ({ image, location, type,desc, vacancy, price, onBook }) => {
  return (
    <div className="flex bg-light-pink shadow-md rounded-lg overflow-hidden mb-4">
      <div className="w-1/3">
      <img src={image} alt={location} className="room-image" />
      </div>
      <div className="w-2/3 p-4">
  <h2 className="text-[#3A3238] text-xl font-semibold mb-2">
    {location} - {type}
  </h2>
  <p className="text-dark-grayish-brown mb-2">{desc}</p>
  <p className="text-dark-grayish-brown mb-2 mt-4">Vacancy: {vacancy}</p>
  <p className="text-dark-grayish-brown font-bold mb-4">Price: ₹{price}/month</p>
  <div className="flex space-x-4 mt-10">
    <button 
      className="bg-[#6E4555] text-light-pink px-4 py-2 rounded-md w-full"
      onClick={onBook}
    >
      Book Now
    </button>
    <button 
      className="bg-[#6E4555] text-light-pink px-4 py-2 rounded-md w-full flex items-center justify-center"
      onClick={() => window.location.href = 'tel:7620722964'}
    >
      Contact
    </button>
  </div>
</div>
</div>

  );
};

export default RoomCard;
