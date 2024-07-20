// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './reducers/customer.reducer';

const store = configureStore({
  reducer: {
    customers: customerReducer,
  },
});

export default store;
