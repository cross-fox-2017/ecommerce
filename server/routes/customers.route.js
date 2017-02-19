const express    = require('express');
const router     = express.Router();
const controller = require('../controller/customers.controller.js')

router.get('/', controller.getAllCustomer)

router.post('/create', controller.createCustomers)


module.exports = router;
