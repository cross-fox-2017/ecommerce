var express = require('express')
var router = express.Router()
let itemsController = require('../controllers/items')
let customersController = require('../controllers/customers')
let transactionsController = require('../controllers/transactions')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('index')
})

// Items

router.get('/items', itemsController.getItems)

router.get('/item/:itemid', itemsController.getItem)

router.post('/item', itemsController.createItem)

router.delete('/item/:itemid', itemsController.deleteItem)

router.put('/item/:itemid', itemsController.updateItem)

router.post('/item/checkout', itemsController.checkout)

// Customers

router.get('/customers', customersController.getCustomers)

router.get('/customer/:memberid', customersController.getCustomer)

router.post('/customer', customersController.createCustomer)

router.delete('/customer/:memberid', customersController.deleteCustomer)

router.put('/customer/:memberid', customersController.updateCustomer)

// Transactions

router.get('/transactions', transactionsController.getTransactions)

router.get('/transaction/:transactionid', transactionsController.getTransaction)

router.post('/transaction', transactionsController.createTransaction)

router.post('/transaction/:transactionid', transactionsController.addItem)

router.post('/item/:transactionid', transactionsController.populateItem)

router.delete('/transaction/:transactionid', transactionsController.deleteTransaction)

router.put('/transaction/:transactionid', transactionsController.updateTransaction)

module.exports = router
