import React, { useState } from 'react';

const RoomBookingForm = () => {
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
    <div className="min-h-screen flex items-center justify-center bg-[#f5e3e0] py-6">
      <form 
        className="w-full max-w-lg p-8 rounded-lg bg-white shadow-lg " 
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-center text-[#3a3238] mb-6">
          Room Booking Form
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-bold text-[#3a3238]">Room ID</label>
          <input
            type="text"
            value={roomId}
            disabled
            className="w-full p-3 border rounded bg-[#e8b4bc] cursor-not-allowed"
            style={{ borderColor: '#e8b4bc' }}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-[#3a3238]" htmlFor="roomName">Room Name</label>
          <input
            type="text"
            id="roomName"
            name="roomName"
            value={formData.roomName}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
            style={{ borderColor: '#e8b4bc' }}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-[#3a3238]" htmlFor="ownerName">Owner Name</label>
          <input
            type="text"
            id="ownerName"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
            style={{ borderColor: '#e8b4bc' }}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-[#3a3238]" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
            style={{ borderColor: '#e8b4bc' }}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-[#3a3238]" htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
            style={{ borderColor: '#e8b4bc' }}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-[#3a3238]" htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
            style={{ borderColor: '#e8b4bc' }}
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-[#3a3238]" htmlFor="rentAmount">Rent Amount</label>
          <input
            type="number"
            id="rentAmount"
            name="rentAmount"
            value={formData.rentAmount}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
            style={{ borderColor: '#e8b4bc' }}
          />
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-[#3a3238]" htmlFor="image">Upload Room Image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-3 border rounded bg-[#f5e3e0]"
            style={{ borderColor: '#e8b4bc' }}
          />
        </div>

        {/* Preview the uploaded image */}
        {previewImage && (
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-[#3a3238]">Image Preview</label>
            <img
              src={previewImage}
              alt="Room Preview"
              className="w-full h-40 object-cover rounded border"
              style={{ borderColor: '#e8b4bc' }}
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full p-3 rounded text-white font-bold"
          style={{ backgroundColor: '#6e4555' }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RoomBookingForm;
