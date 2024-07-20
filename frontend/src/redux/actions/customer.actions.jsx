// src/redux/actions/customerActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCustomers = createAsyncThunk('customers/fetchCustomers', async () => {
  const response = await axios.get('/api/customers');
  return response.data;
});

export const addCustomer = createAsyncThunk('customers/addCustomer', async (customer) => {
  const response = await axios.post('/api/customers', customer);
  return response.data;
});

export const deleteCustomer = createAsyncThunk('customers/deleteCustomer', async (id) => {
  await axios.delete(`/api/customers/${id}`);
  return id;
});
