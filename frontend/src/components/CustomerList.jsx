// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Edit3, Trash2, Eye } from 'lucide-react';
// import CustomerDetails from './CustomerDetails';

// const CustomerList = ({ onEdit, onSee }) => {
//   const [customers, setCustomers] = useState([]);
//   const [selectedCustomer, setSelectedCustomer] = useState(null);

//   useEffect(() => {
//     fetchCustomers();
//   }, []);

//   const fetchCustomers = async () => {
//     try {
//       const response = await axios.get('/api/customers');
//       setCustomers(response.data);
//     } catch (error) {
//       console.error('Error fetching customers:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`/api/customer/${id}`);
//       setCustomers(customers.filter((customer) => customer._id !== id));
//     } catch (error) {
//       console.error('Error deleting customer:', error);
//     }
//   };

//   const handleView = async (id) => {
//     try {
//       const response = await axios.get(`/api/custome/${id}`);
//       <CustomerDetails />
//       setSelectedCustomer(response.data);
//       // <CustomerDetails customer={selectedCustomer} onClose={() => setSelectedCustomer(null)} />
//     } catch (error) {
//       console.error('Error fetching customer details:', error);
//     }
//   };

  

//   return (
//     <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow-md">
//       <h2 className="text-2xl font-bold mb-6">View All Customers</h2>
//       <table className="w-full table-auto border-collapse">
//         <thead>
//           <tr className="bg-green-500 text-white">
//             <th className="border p-2">Sr No</th>
//             <th className="border p-2">Customer Name</th>
//             <th className="border p-2">Contact Number</th>
//             <th className="border p-2">Alternate Number</th>
//             <th className="border p-2">Email</th>
//             <th className="border p-2">Registered On</th>
//             <th className="border p-2">Status</th>
//             <th className="border p-2">Booking History</th>
//             <th className="border p-2">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {customers.map((customer, index) => (
//             <tr key={customer._id} className="border-t">
//               <td className="border p-2">{index + 1}</td>
//               <td className="border p-2">{customer.firstName} {customer.lastName}</td>
//               <td className="border p-2">{customer.phone}</td>
//               <td className="border p-2">{customer.alternateNumber}</td>
//               <td className="border p-2">{customer.email}</td>
//               <td className="border p-2">{new Date(customer.createdAt).toLocaleDateString()}</td>
//               <td className="border p-2">Active</td>
//               <td className="border p-2">
//                 {selectedCustomer && selectedCustomer._id === customer._id && (
//                   <ul>
//                     {selectedCustomer.bookingHistory.map((booking, idx) => (
//                       <li key={idx}>{booking}</li>
//                     ))}
//                   </ul>
//                 )}
//               </td>
//               <td className="border p-4 flex flex-row items-center">
//                 <button className="bg-green-500 text-white p-1 rounded mr-2" onClick={() => onSee(customer._id)}><Eye size={16} /></button>
//                 <button className="bg-red-500 text-white p-1 rounded mr-2" onClick={() => handleDelete(customer._id)}><Trash2 size={16} /></button>
//                 <button className="bg-yellow-500 text-white p-1 rounded" onClick={() => onEdit(customer._id)}><Edit3 size={16} 
                
//                 /></button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {/* {selectedCustomer && (
//         <CustomerDetails customer={selectedCustomer} onClose={() => setSelectedCustomer(null)} />
//       )} */}
//     </div>
//   );
// };

// export default CustomerList;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Edit3, Trash2, Eye } from 'lucide-react';
import CustomerDetails from './CustomerDetails';

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
      // You can show an error message to the user here
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/customer/${id}`);
      setCustomers((prevCustomers) => prevCustomers.filter((customer) => customer._id !== id));
    } catch (error) {
      console.error('Error deleting customer:', error);
      // You can show an error message to the user here
    }
  };

  const handleView = async (id) => {
    try {
      const response = await axios.get(`/api/customer/${id}`);
      setSelectedCustomer(response.data);
    } catch (error) {
      console.error('Error fetching customer details:', error);
      // You can show an error message to the user here
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6">View All Customers</h2>
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
                <td className="border p-2">
                  {/* {selectedCustomer && selectedCustomer._id === customer._id && (
                    <ul>
                      {selectedCustomer.bookingHistory.map((booking, idx) => (
                        <li key={idx}>{booking}Shown
                        </li>
                      ))}
                    </ul>
                  )} */}
                  Shown
                </td>
                <td className="border p-4 flex flex-row items-center">
                  <button
                    className="bg-green-500 text-white p-1 rounded mr-2"
                    onClick={() => handleView(customer._id)}
                  >
                    <Eye size={16} />
                  </button>
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
      {selectedCustomer && (
        <CustomerDetails
          customer={selectedCustomer}
          onClose={() => setSelectedCustomer(null)}
        />
      )}
    </div>
  );
};

export default CustomerList;

