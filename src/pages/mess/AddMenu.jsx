import React, { useState } from 'react';

const AddMenu = () => {
  const [formData, setFormData] = useState({
    messOutletName: '',
    menuItemName: '',
    description: '',
    price: '',
    images: []
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      images: files
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send the data to your server or store it in your database
    console.log(formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6">Add Mess Menu</h2>
      <form onSubmit={handleSubmit}>
        {/* Mess Outlet Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="messOutletName">Mess Outlet Name</label>
          <input
            type="text"
            name="messOutletName"
            value={formData.messOutletName}
            onChange={handleChange}
            placeholder="Enter Mess Outlet Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Menu Item Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="menuItemName">Menu Item Name</label>
          <input
            type="text"
            name="menuItemName"
            value={formData.menuItemName}
            onChange={handleChange}
            placeholder="Enter Menu Item Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter Description"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
            required
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter Price"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="images">Upload Menu Images (Max 4)</label>
          <input
            type="file"
            name="images"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {formData.images.length > 4 && (
            <p className="text-red-500 text-sm">You can only upload up to 4 images</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled={formData.images.length > 4}
          >
            Add Menu
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMenu;
