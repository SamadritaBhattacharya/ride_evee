import React from 'react';

const AddCustomer = () => {
  return (
    <div className="container mx-auto p-4 flex-col-1">
      <div className="bg-green-600 text-white p-2 rounded-t-lg">
        Add Customer
      </div>
      <div className="bg-white shadow-lg p-4 rounded-b-lg  space-y-4">
        <div className="flex flex-wrap justify-between ">
          <div className="w-full md:w-1/2 p-2 space-y-4 ">
            <div > 
              <label className="block text-sm font-medium text-gray-700 ">First Name</label>
              <input
                type="text"
                placeholder="Type First Name"
                className="w-full p-2 border  shadow rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Primary Mobile No.</label>
              <div className="flex">
                <select className="p-2 border rounded-l shadow">
                  <option>India (+91)</option>
                  {/* Add other country options here */}
                </select>
                <input
                  type="text"
                  placeholder="Type Mobile Number"
                  className="w-full p-2 border-t border-r border-b rounded-r shadow rounded-lg"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="Type Email Address"
                className="w-full p-2 border  shadow rounded-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 p-2 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                placeholder="Type Last Name"
                className="w-full p-2 border  shadow rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Alternate Mobile No.</label>
              <div className="flex">
                <select className="p-2 border rounded-2 shadow">
                  <option>India (+91)</option>
                  {/* Add other country options here */}
                </select>
                <input
                  type="text"
                  placeholder="Alternate Mobile Number"
                  className="w-full p-2 border-t border-r border-b rounded-r shadow rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-green-600 text-white px-1 py-2 rounded-full md:w-1/4 shadow-lg">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCustomer;