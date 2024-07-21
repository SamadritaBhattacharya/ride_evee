// // CustomerDetails.jsx
// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';

// const CustomerDetails = () => {
//   const { id } = useParams();
//   const [customer, setCustomer] = useState(null);

//   useEffect(() => {
//     fetchCustomerDetails();
//   }, [id]);

//   const fetchCustomerDetails = async () => {
//     try {
//       const response = await axios.get(`/api/customer/${id}`);
//       setCustomer(response.data);
//     } catch (error) {
//       console.error('Error fetching customer details:', error);
//     }
//   };

//   if (!customer) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow-md">
//       <h2 className="text-2xl font-bold mb-6">Customer Profile Information</h2>
//       <div className="bg-green-500 text-white p-4 rounded mb-6">
//         <p>Customer Profile Information</p>
//       </div>
//       <table className="w-full table-auto border-collapse mb-6">
//         <tbody>
//           <tr>
//             <td className="border p-2 font-bold">First Name</td>
//             <td className="border p-2">{customer.firstName}</td>
//             <td className="border p-2 font-bold">Last Name</td>
//             <td className="border p-2">{customer.lastName}</td>
//             <td className="border p-2 font-bold">Email Address</td>
//             <td className="border p-2">{customer.email}</td>
//           </tr>
//           <tr>
//             <td className="border p-2 font-bold">Primary Mobile No.</td>
//             <td className="border p-2">{customer.phone}</td>
//             <td className="border p-2 font-bold">Alternate Mobile No.</td>
//             <td className="border p-2">{customer.alternateNumber}</td>
//             <td className="border p-2"></td>
//             <td className="border p-2">
//               <button className="bg-green-500 text-white p-2 rounded">Reset Password</button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//       <Link to="/" className="bg-green-500 text-white p-2 rounded">View All Customer</Link>
//     </div>
//   );
// };

// export default CustomerDetails;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerDetails = ({ customerId, onEditSuccess }) => {
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
      await axios.get(`/api/customer/${customerId}`, formData);
      onEditSuccess();
      alert('Customer updated successfully!');
    } catch (error) {
      console.error('Error updating customer:', error);
    }
  };

  return (
    // <form onSubmit={handleSubmit} className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
    //   <h2 className="text-2xl font-bold mb-4">Edit Customer</h2>
    //   <div className="mb-4">
    //     <label className="block text-gray-700">First Name:</label>
    //     <input
    //       type="text"
    //       name="firstName"
    //       value={formData.firstName}
    //       onChange={handleChange}
    //       required
    //       className="w-full px-3 py-2 border rounded-md"
    //     />
    //   </div>
    //   <div className="mb-4">
    //     <label className="block text-gray-700">Last Name:</label>
    //     <input
    //       type="text"
    //       name="lastName"
    //       value={formData.lastName}
    //       onChange={handleChange}
    //       required
    //       className="w-full px-3 py-2 border rounded-md"
    //     />
    //   </div>
    //   <div className="mb-4">
    //     <label className="block text-gray-700">Email:</label>
    //     <input
    //       type="email"
    //       name="email"
    //       value={formData.email}
    //       onChange={handleChange}
    //       required
    //       className="w-full px-3 py-2 border rounded-md"
    //     />
    //   </div>
    //   <div className="mb-4">
    //     <label className="block text-gray-700">Phone:</label>
    //     <input
    //       type="text"
    //       name="phone"
    //       value={formData.phone}
    //       onChange={handleChange}
    //       required
    //       className="w-full px-3 py-2 border rounded-md"
    //     />
    //   </div>
    //   <div className="mb-4">
    //     <label className="block text-gray-700">Alternate Phone:</label>
    //     <input
    //       type="text"
    //       name="alternatePhone"
    //       value={formData.alternatePhone}
    //       onChange={handleChange}
    //       className="w-full px-3 py-2 border rounded-md"
    //     />
    //   </div>
    //   <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500">
    //     Update Customer
    //   </button>
    // </form>
    <div>
        Customer details
    </div>
  );
};

export default CustomerDetails;
