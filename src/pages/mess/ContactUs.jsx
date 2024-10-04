import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message Sent by ${formData.name}`);
    // Add logic to send formData to backend or email
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Contact Now</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        {/* Name Input */}
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 text-sm font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-lg"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email Input */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-lg"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Phone Number Input */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="mb-2 text-sm font-medium">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-lg"
            placeholder="Enter your phone number"
            pattern="[0-9]{10}"  // Only allows 10 digits
            required
          />
        </div>

        {/* Message Input */}
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 text-sm font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-lg"
            placeholder="Enter your message"
            rows="4"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
