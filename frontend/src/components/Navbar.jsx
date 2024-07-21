import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Users, LogOut } from 'lucide-react';

const Navbar = () => {
  return (
    // <nav className="p-4 sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg">
    //   <div className="container mx-auto flex justify-between items-center flex-wrap">
    //     <Link to="/" className="text-zinc-950 text-xl font-bold">Hi, Super</Link>
    //     <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
    //       <div className='bg-white px-4 py-1 rounded-full font-medium text-zinc-700 flex-1 md:flex-none'>
    //         <input
    //           type="text"
    //           placeholder="Search with ID, Number"
    //           className="w-full border-none outline-none"
    //         />
    //       </div>
    //       <div className='flex gap-4 items-center'>
    //         <Bell className='fill-black' />
    //         <Users className='fill-black' />
    //         <LogOut className="text-red-700 font-bold" />
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    
      
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
    <div className="text-lg font-semibold">Hi, Super</div>
    <div className="flex items-center space-x-4">
      {/* Search bar hidden on small screens */}
      <div className="relative hidden sm:block">
        <input
          type="text"
          placeholder="Search with ID, Number"
          className="px-4 py-2 rounded-full shadow-inner border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <Bell className="cursor-pointer fill-black" />
      <Users className="cursor-pointer" />
      <LogOut className="cursor-pointer text-red-600" />
    </div>
  </div>
  );
};

export default Navbar;
