const express = require('express');
const { getAllCustomers, addCustomer, deleteCustomer, updateCustomer, getCustomerDetails } = require('../controllers/customer.controller.js');
const router = express.Router();

router.get('/customers', getAllCustomers);
router.post('/addCustomer', addCustomer);
router.delete('/customer/:id', deleteCustomer);
router.put('/customer/:id', updateCustomer);
router.get('/customer/:id', getCustomerDetails);

module.exports = router;
