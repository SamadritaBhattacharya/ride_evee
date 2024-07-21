import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const CustomerDetails = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    fetchCustomerDetails();
  }, [id]);

  const fetchCustomerDetails = async () => {
    try {
      const response = await axios.get(`/api/customer/${id}`);
      setCustomer(response.data);
    } catch (error) {
      console.error('Error fetching customer details:', error);
    }
  };

  if (!customer) {
    return <div>Loading...</div>;
  }

  return (<div>
    <div className="bg-green-500  max-w-6xl mx-auto mt-6 text-white p-4 rounded ">
        <p>Customer Profile Information</p>
        </div>
    <div className=" max-w-6xl mx-auto bg-white p-6 rounded shadow-md">
      
      
      
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse mb-6">
          <tbody>
            <tr>
              <td className="border p-2 font-bold">First Name</td>
              <td className="border p-2">{customer.firstName}</td>
              <td className="border p-2 font-bold">Last Name</td>
              <td className="border p-2">{customer.lastName}</td>
              <td className="border p-2 font-bold">Email Address</td>
              <td className="border p-2">{customer.email}</td>
            </tr>
            <tr>
              <td className="border p-2 font-bold">Primary Mobile No.</td>
              <td className="border p-2">{customer.phone}</td>
              <td className="border p-2 font-bold">Alternate Mobile No.</td>
              <td className="border p-2">{customer.alternateNumber}</td>
              <td className="border p-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <Link to="/" className="bg-green-500 text-white p-2 rounded inline-block">View All Customers</Link>
    </div>
    </div>
  );
};

export default CustomerDetails;
