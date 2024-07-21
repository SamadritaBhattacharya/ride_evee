// src/actions/customer.actions.jsx
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Ensure axios instance has the correct base URL if needed
axios.defaults.baseURL = 'http://localhost:5000'; // Make sure this matches your backend URL

// Fetch all customers
export const fetchCustomers = createAsyncThunk('customers/fetchCustomers', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/api/customers');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Add a new customer
export const addCustomer = createAsyncThunk('customers/addCustomer', async (customer, thunkAPI) => {
  try {
    const response = await axios.post('/api/addCustomer', customer);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Delete a customer by ID
export const deleteCustomer = createAsyncThunk('customers/deleteCustomer', async (id, thunkAPI) => {
  try {
    await axios.delete(`/api/customers/${id}`);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
