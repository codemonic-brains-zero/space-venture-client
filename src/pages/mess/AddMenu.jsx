import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import firebase from 'firebase/app'; // Make sure to configure Firebase as per your project
import 'firebase/database'; // Import Firebase database if you are using Firebase Realtime Database

const AddMenu = () => {
  const [formData, setFormData] = useState({
    name: '',
    images: [],
    description: '',
    price: '',
    deliveryTime: '',
    rating: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 4);
    setFormData({
      ...formData,
      images: files
    });
  };

  const uploadImagesToCloudinary = async (images) => {
    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload`; // Update with your Cloudinary cloud name
    const cloudinaryPreset = 'YOUR_PRESET'; // Update with your upload preset

    const uploadedImageUrls = await Promise.all(
      images.map(async (image) => {
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', cloudinaryPreset);

        const response = await axios.post(cloudinaryUrl, formData);
        return response.data.secure_url; // Return the URL of the uploaded image
      })
    );

    return uploadedImageUrls; // Return all uploaded image URLs
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Upload images and get their URLs
      const imageUrls = await uploadImagesToCloudinary(formData.images);

      // Prepare data to store in Firebase
      const dataToSubmit = {
        name: formData.name,
        description: formData.description,
        price: formData.price,
        deliveryTime: formData.deliveryTime,
        rating: formData.rating,
        images: imageUrls // Store Cloudinary URLs
      };

      // Store data in Firebase
      const newEntryRef = firebase.database().ref('messCards').push(); // Change 'messCards' to your desired path
      await newEntryRef.set(dataToSubmit);

      alert('Mess card added successfully!');
      // Reset form or redirect as needed
      setFormData({
        name: '',
        images: [],
        description: '',
        price: '',
        deliveryTime: '',
        rating: ''
      });
    } catch (error) {
      console.error('Error submitting form', error);
      alert('Failed to add mess card');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="bg-misty-rose p-6 sm:p-8 shadow-md rounded-lg max-w-md w-full transition-transform transform hover:scale-105"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center text-eggplant">Add New Mess Card</h2>

        <div className="mb-4">
          <label className="block text-eggplant">Mess Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border border-orchid-pink rounded-md focus:outline-none focus:ring-2 focus:ring-thulian-pink"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-eggplant">Mess Images (Max 4):</label>
          <input
            type="file"
            name="images"
            accept="image/*"
            multiple
            onChange={handleImagesChange}
            className="w-full p-2 border border-orchid-pink rounded-md focus:outline-none focus:ring-2 focus:ring-thulian-pink"
            required
          />
        </div>

        <div className="flex mb-4 space-x-4">
          <div className="flex-1">
            <label className="block text-eggplant">Price:</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full p-2 border border-orchid-pink rounded-md focus:outline-none focus:ring-2 focus:ring-thulian-pink"
              required
            />
          </div>

          <div className="flex-1">
            <label className="block text-eggplant">Delivery Time:</label>
            <input
              type="text"
              name="deliveryTime"
              value={formData.deliveryTime}
              onChange={handleInputChange}
              className="w-full p-2 border border-orchid-pink rounded-md focus:outline-none focus:ring-2 focus:ring-thulian-pink"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-eggplant">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full p-2 border border-orchid-pink rounded-md focus:outline-none focus:ring-2 focus:ring-thulian-pink"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-eggplant">Rating: (1.0 - 5.0)</label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleInputChange}
            className="w-full p-2 border border-orchid-pink rounded-md focus:outline-none focus:ring-2 focus:ring-thulian-pink"
            step="0.1"
            max="5"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-eggplant text-white px-4 py-2 rounded-md hover:bg-thulian-pink w-full transition-colors duration-200"
        >
          Add Mess Card
        </button>
      </form>
    </div>
  );
};

export default AddMenu;
