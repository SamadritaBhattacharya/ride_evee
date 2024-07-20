import React from 'react';
import { Link } from 'react-router-dom';
import {Bell, Users, LogOut} from 'lucide-react';

const Navbar = () => {
  return (
    <nav className=" p-4 sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg ">
      <div className="container mx-auto flex justify-between items-center    ">
        <Link to="/" className="text-zinc-950 text-xl font-bold">Hi,Super</Link>
        <div className="flex space-x-4">
            <div className=' bg-white px-6 rounded-full py-1 font-medium text-zinc-700'>
            <input
                type="text"
                placeholder="Search with ID, Number"
            />
            </div>
            <div className=' flex gap-4'>
                <Bell className=' fill-black' />
                <Users className=' fill-black' />
                <LogOut className="text-red-700 font-bold" />
               
            </div>
          {/* <Link to="/view-customers" className="text-zinc-900">View All Customers</Link>
          <Link to="/add-customer" className="text-zince-900">Add New Customer</Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
