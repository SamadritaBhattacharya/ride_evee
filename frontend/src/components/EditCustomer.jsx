import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditCustomer = ({ customerId, onEditSuccess }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    alternatePhone: '',
  });

  useEffect(() => {
    fetchCustomerDetails();
  }, []);

  const fetchCustomerDetails = async () => {
    try {
      const response = await axios.get(`/api/customers/${customerId}`);
      setFormData(response.data);
    } catch (error) {
      console.error('Error fetching customer details:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/customer/${customerId}`, formData);
      onEditSuccess();
      alert('Customer updated successfully!');
    } catch (error) {
      console.error('Error updating customer:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Edit Customer</h2>
      <div className="mb-4">
        <label className="block text-gray-700">First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Alternate Phone:</label>
        <input
          type="text"
          name="alternatePhone"
          value={formData.alternatePhone}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500">
        Update Customer
      </button>
    </form>
  );
};

export default EditCustomer;
