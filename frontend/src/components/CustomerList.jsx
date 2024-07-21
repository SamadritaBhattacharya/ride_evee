import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Edit3, Trash2, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomerList = ({ onEdit, onSee }) => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('/api/customers');
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/customer/${id}`);
      setCustomers((prevCustomers) => prevCustomers.filter((customer) => customer._id !== id));
    } catch (error) {
      console.error('Error deleting customer:', error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6">View All Customers</h2>
      {/* Desktop/Table View */}
      <div className="hidden sm:block">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-green-500 text-white">
              <th className="border p-2">Sr No</th>
              <th className="border p-2">Customer Name</th>
              <th className="border p-2">Contact Number</th>
              <th className="border p-2">Alternate Number</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Registered On</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Booking History</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.length > 0 ? (
              customers.map((customer, index) => (
                <tr key={customer._id} className="border-t">
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{customer.firstName} {customer.lastName}</td>
                  <td className="border p-2">{customer.phone}</td>
                  <td className="border p-2">{customer.alternateNumber}</td>
                  <td className="border p-2">{customer.email}</td>
                  <td className="border p-2">{new Date(customer.createdAt).toLocaleDateString()}</td>
                  <td className="border p-2">Active</td>
                  <td className="border p-2">Shown</td>
                  <td className="border p-4 flex flex-row items-center">
                    <Link to={`/customer/${customer._id}`}>
                      <button className="bg-green-500 text-white p-1 rounded mr-2">
                        <Eye size={16} />
                      </button>
                    </Link>
                    <button
                      className="bg-red-500 text-white p-1 rounded mr-2"
                      onClick={() => handleDelete(customer._id)}
                    >
                      <Trash2 size={16} />
                    </button>
                    <button
                      className="bg-yellow-500 text-white p-1 rounded"
                      onClick={() => onEdit(customer._id)}
                    >
                      <Edit3 size={16} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center p-4">No customers found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="block sm:hidden">
        {customers.length > 0 ? (
          customers.map((customer, index) => (
            <div key={customer._id} className="border-b border-gray-200 mb-4 p-4">
              <h3 className="text-lg font-semibold">Customer {index + 1}</h3>
              <div className="mt-2">
                <p><span className="font-bold">Name:</span> {customer.firstName} {customer.lastName}</p>
                <p><span className="font-bold">Contact Number:</span> {customer.phone}</p>
                <p><span className="font-bold">Alternate Number:</span> {customer.alternateNumber}</p>
                <p><span className="font-bold">Email:</span> {customer.email}</p>
                <p><span className="font-bold">Registered On:</span> {new Date(customer.createdAt).toLocaleDateString()}</p>
                <p><span className="font-bold">Status:</span> Active</p>
                <p><span className="font-bold">Booking History:</span> Shown</p>
                <div className="mt-4 flex space-x-2">
                  <Link to={`/customer/${customer._id}`}>
                    <button className="bg-green-500 text-white p-2 rounded">
                      <Eye size={16} />
                    </button>
                  </Link>
                  <button
                    className="bg-red-500 text-white p-2 rounded"
                    onClick={() => handleDelete(customer._id)}
                  >
                    <Trash2 size={16} />
                  </button>
                  <button
                    className="bg-yellow-500 text-white p-2 rounded"
                    onClick={() => onEdit(customer._id)}
                  >
                    <Edit3 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center p-4">No customers found</div>
        )}
      </div>
    </div>
  );
};

export default CustomerList;
