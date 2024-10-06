import React, { useState } from 'react';
import UserNav from "../../components/client/UserNav";

const RoomBookingForm = () => {
  // Generate random room ID
  const [roomId] = useState(() => `ROOM-${Math.floor(1000 + Math.random() * 9000)}`);

  const [formData, setFormData] = useState({
    roomName: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    rentAmount: '',
    image: null,
  });

  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevState) => ({
        ...prevState,
        image: file,
      }));
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', { roomId, ...formData });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-light-pink">
         <UserNav/>
      <form 
        className="w-full max-w-lg p-8 rounded-lg" 
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold mt-12 text-center text-3A3238">
          Room Booking Form
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-bold mt-8">Room ID</label>
          <input
            type="text"
            value={roomId}
            disabled
            className="w-full p-3 border rounded bg-pink-200 cursor-not-allowed"
            style={{ borderColor: '#E8B4BC' }}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-black" htmlFor="roomName">Room Name</label>
          <input
            type="text"
            id="roomName"
            name="roomName"
            value={formData.roomName}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
            style={{ borderColor: '#E8B4BC' }}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-black" htmlFor="ownerName">Owner Name</label>
          <input
            type="text"
            id="ownerName"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
            style={{ borderColor: '#E8B4BC' }}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-black" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
            style={{ borderColor: '#E8B4BC' }}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-black" htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
            style={{ borderColor: '#E8B4BC' }}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-black"htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
            style={{ borderColor: '#E8B4BC' }}
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-black" htmlFor="rentAmount">Rent Amount</label>
          <input
            type="number"
            id="rentAmount"
            name="rentAmount"
            value={formData.rentAmount}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
            style={{ borderColor: '#E8B4BC' }}
          />
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-black" htmlFor="image">Upload Room Image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-3 border rounded bg-gray-200"
            style={{ borderColor: '#E8B4BC' }}
          />
        </div>

        {/* Preview the uploaded image */}
        {previewImage && (
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-black">Image Preview</label>
            <img
              src={previewImage}
              alt="Room Preview"
              className="w-full h-40 object-cover rounded border"
              style={{ borderColor: '#E8B4BC' }}
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full p-3 rounded text-white font-bold"
          style={{ backgroundColor: '#6E4555' }} // Button color
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RoomBookingForm;
