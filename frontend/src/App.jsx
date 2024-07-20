import React from 'react';
import Navbar from './components/Navbar';
import AddCustomer from './components/AddCustomer';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <AddCustomer />
      </div>
    </div>
  );
};

export default App;
