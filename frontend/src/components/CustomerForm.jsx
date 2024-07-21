import React, { useState } from 'react';
import axios from 'axios';

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    alternatePhone: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/addCustomer', formData);
      console.log('Customer added:', response.data);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        alternatePhone: '',
      });
      alert("Customer added successfully!");
    } catch (error) {
      console.error('Error adding customer:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-green-600 text-white text-xl font-semibold p-2 rounded-t-lg">
        Add Customer
      </div>
      <form onSubmit={handleSubmit} className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-lg">
        <div className="flex flex-col space-y-4 md:grid md:grid-cols-2 md:gap-4">
          <div className="mb-4">
            <label className="block font-medium text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              placeholder="Type First Name"
              className="w-full px-3 py-2 border shadow rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Type Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border shadow rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium text-gray-700">Phone</label>
            <div className="flex flex-col md:flex-row">
              <select className="border rounded-t md:rounded-l-md px-3 py-2 bg-gray-100">
                <option>India (+91)</option>
                {/* Add more country codes as needed */}
              </select>
              <input
                type="text"
                name="phone"
                placeholder="Type Mobile Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border md:border-t-0 md:border-l-0 rounded-md md:rounded-r-md"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-medium text-gray-700">Alternate Phone</label>
            <div className="flex flex-col md:flex-row">
              <select className="border rounded-t md:rounded-l-md px-3 py-2 bg-gray-100">
                <option>India (+91)</option>
                {/* Add more country codes as needed */}
              </select>
              <input
                type="text"
                placeholder="Alternate Mobile Number"
                name="alternatePhone"
                value={formData.alternatePhone}
                onChange={handleChange}
                className="w-full px-3 py-2 border md:border-t-0 md:border-l-0 rounded-md md:rounded-r-md"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Type Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border shadow rounded-md"
            />
          </div>
        </div>
        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-800 text-white px-6 py-2 rounded-full shadow-lg"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerForm;
