// src/components/CustomerList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCustomers, deleteCustomer } from '../redux/actions/customer.actions';

const CustomerList = () => {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customers);

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteCustomer(id));
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6">All Customers</h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">First Name</th>
            <th className="border p-2">Last Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer._id} className="border-t">
              <td className="border p-2">{customer.firstName}</td>
              <td className="border p-2">{customer.lastName}</td>
              <td className="border p-2">{customer.email}</td>
              <td className="border p-2">{customer.phone}</td>
              <td className="border p-2">
                <button className="bg-red-500 text-white p-1 rounded mr-2" onClick={() => handleDelete(customer._id)}>Delete</button>
                <button className="bg-yellow-500 text-white p-1 rounded">Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
