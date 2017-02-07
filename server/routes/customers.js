var express = require('express')
var router = express.Router()
const controllerCustomer = require('../controllers/controller.customer')

/* get customer listing. */
router.get('/', controllerCustomer.getAllCustomer)
/* get one customer */
router.get('/:customerid', controllerCustomer.getOneCustomer)
/* create customer */
router.post('/register', controllerCustomer.createCustomer)
/* edit customer */
router.put('/:customerid', controllerCustomer.editOneCustomer)
/* delete customer */
router.delete('/:customerid', controllerCustomer.deleteOneCustomer)

module.exports = router
