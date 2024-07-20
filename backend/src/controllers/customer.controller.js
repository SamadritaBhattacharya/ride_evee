const Customer = require('../models/customer.model');
const nodemailer = require('nodemailer');

// Function to send confirmation email
const sendConfirmationEmail = async (email) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Customer Registration Confirmation',
    text: 'Thank you for registering!'
  };

  await transporter.sendMail(mailOptions);
};

// Get all customers
const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new customer
const addCustomer = async (req, res) => {
  const { firstName, lastName, email, phone, password, alternatePhone } = req.body;

  const newCustomer = new Customer({ firstName, lastName, email, phone, password, alternatePhone });

  try {
    const savedCustomer = await newCustomer.save();
    await sendConfirmationEmail(email);
    res.status(201).json(savedCustomer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a customer
const deleteCustomer = async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Customer deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update customer details
const updateCustomer = async (req, res) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get customer details
const getCustomerDetails = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export  {getAllCustomers, updateCustomer, deleteCustomer, addCustomer, getCustomerDetails}
