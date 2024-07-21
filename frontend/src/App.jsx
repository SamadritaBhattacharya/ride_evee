
import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage'; 
import CustomerForm from './components/CustomerForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
   
      <div>
        <Navbar />
        
      <Routes>
        <Route path="/"  element={<HomePage/>}/> 
        {/* <Route path="Customer" element={<CustomerForm />} />  */}
        

      </Routes>
    
        
       
      </div>
    
  );
};

export default App;
