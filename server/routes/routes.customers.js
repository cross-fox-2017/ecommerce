var express = require('express');
var router = express.Router();
const customers = require('../controllers/controllers.customers');

/* GET home page. */
router.post('/registerCustomers',customers.registerCustomers);

module.exports = router;
