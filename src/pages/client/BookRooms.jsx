import React, { useState } from "react";
import UserNav from "../../components/client/UserNav";

const BookRooms = ({ room = {}, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [moveInDate, setMoveInDate] = useState("");
  const [occupants, setOccupants] = useState(1);
  const [requests, setRequests] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the backend
    alert(`Booking confirmed for ${room.location} - ${room.type}`);
    onClose(); // Close the modal after submission
  };

  return (
    <div className="fixed inset-0 bg-light-pink flex flex-col z-50">
      <UserNav/>
      <div className="flex flex-grow items-center justify-center overflow-y-auto">
        <div className="bg-f5e3e0 p-8 rounded-lg w-11/12 md:w-1/2 lg:w-1/3">
          <h2 className="text-d282a6 text-2xl mt-7 font-bold mb-4 items-center">
            Book {room.location} - {room.type}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-6e4555">Name</label>
              <input 
                type="text" 
                className="w-full border rounded-md px-4 py-2 mt-2 bg-e8b4bc text-6e4555"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-6e4555">Email</label>
              <input 
                type="email" 
                className="w-full border rounded-md px-4 py-2 mt-2 bg-e8b4bc text-6e4555"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-6e4555">Phone Number</label>
              <input 
                type="tel" 
                className="w-full border rounded-md px-4 py-2 mt-2 bg-e8b4bc text-6e4555"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-6e4555">Move-in Date</label>
              <input 
                type="date" 
                className="w-full border rounded-md px-4 py-2 mt-2 bg-e8b4bc text-6e4555"
                value={moveInDate}
                onChange={(e) => setMoveInDate(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-6e4555">Number of Occupants</label>
              <input 
                type="number" 
                className="w-full border rounded-md px-4 py-2 mt-2 bg-e8b4bc text-6e4555"
                value={occupants}
                onChange={(e) => setOccupants(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-6e4555">Special Requests</label>
              <textarea 
                className="w-full border rounded-md px-4 py-2 mt-2 bg-e8b4bc text-6e4555"
                value={requests}
                onChange={(e) => setRequests(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center">
              <button 
                type="submit" 
                className="bg-[#6E4555] text-white px-6 py-2 rounded-md"
              >
                Confirm Booking
              </button>
              <button 
                type="button" 
                className="bg-[#6E4555] text-white px-6 py-2 rounded-md"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookRooms ;
