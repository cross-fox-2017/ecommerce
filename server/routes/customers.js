var express = require('express');
var router = express.Router();
const customers = require('../controllers/customers');

router.post('/',customers.addCustomers);

module.exports = router;
