
import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage'; 
import CustomerForm from './components/CustomerForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomerDetails from './components/CustomerDetails';

const App = () => {
  return (
   
      <div>
        <Navbar />
        
      <Routes>
        <Route path="/"  element={<HomePage/>}/> 
        <Route path="/customer/:id" element={<CustomerDetails />} /> 
        

      </Routes>
    
        
       
      </div>
    
  );
};

export default App;
