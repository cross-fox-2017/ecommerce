var express = require('express');
var router = express.Router();
const transactions = require('../controllers/controllers.transactions')
/* GET home page. */

router.post('/addNewTransactions',transactions.addNewTransactions)

module.exports = router;
