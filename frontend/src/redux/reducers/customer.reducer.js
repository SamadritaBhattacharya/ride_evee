// src/redux/reducers/customerReducer.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchCustomers, addCustomer, deleteCustomer } from '../actions/customer.actions';

const customerSlice = createSlice({
  name: 'customers',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomers.fulfilled, (state, action) => action.payload)
      .addCase(addCustomer.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteCustomer.fulfilled, (state, action) => {
        return state.filter((customer) => customer._id !== action.payload);
      });
  },
});

export default customerSlice.reducer;
