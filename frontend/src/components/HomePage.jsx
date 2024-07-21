import React, { useState } from 'react';
import CustomerForm from './CustomerForm';
import CustomerList from './CustomerList';
import EditCustomer from './EditCustomer';

const HomePage = () => {
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const [showCustomers, setShowCustomers] = useState(false);
  const [showEditCustomer, setShowEditCustomer] = useState(false);
  const [customerIdToEdit, setCustomerIdToEdit] = useState(null);

  const handleAddCustomer = () => {
    setShowCustomerForm(true);
    setShowCustomers(false);
    setShowEditCustomer(false);
  };

  const handleViewCustomers = () => {
    setShowCustomers(true);
    setShowCustomerForm(false);
    setShowEditCustomer(false);
  };

  const handleEditCustomer = (id) => {
    setCustomerIdToEdit(id);
    setShowEditCustomer(true);
    setShowCustomerForm(false);
    setShowCustomers(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4  mb-6 md:justify-end">
        <button
          onClick={handleViewCustomers}
          className="bg-white text-green-600 rounded-lg shadow-md hover:bg-zinc-200 p-2 md:p-4 font-medium"
        >
          View All Customers
        </button>
        <button
          onClick={handleAddCustomer}
          className="bg-green-600 p-2 md:p-4 hover:bg-green-400 text-white font-medium rounded-lg shadow-md"
        >
          Add Customer
        </button>
      </div>
      {showCustomerForm && <CustomerForm />}
      {showCustomers && <CustomerList onEdit={handleEditCustomer} />}
      {showEditCustomer && (
        <EditCustomer customerId={customerIdToEdit} onEditSuccess={handleViewCustomers} />
      )}
      {!showCustomerForm && !showCustomers && !showEditCustomer && (
        <h1 className="text-zinc-950 font-extrabold text-4xl p-6 mx-auto  flex flex-col md:flex-row  gap-2 justify-center items-center">
          Welcome to {' '} <span className="text-green-600">  Ride Evee!</span>
        </h1>
      )}
    </div>
  );
};

export default HomePage;
