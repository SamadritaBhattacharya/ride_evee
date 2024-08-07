const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  // password: { type: String, required: true },
  alternatePhone: { type: String }
},
{timestamps: true});

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;