const express = require('express');
const { getAllCustomers, addCustomer, deleteCustomer, updateCustomer, getCustomerDetails } = require('../controllers/customer.controller.js');
const router = express.Router();

router.get('/customers', getAllCustomers);
router.post('/customers', addCustomer);
router.delete('/customers/:id', deleteCustomer);
router.put('/customers/:id', updateCustomer);
router.get('/customers/:id', getCustomerDetails);

module.exports = router;
