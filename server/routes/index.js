var express = require('express')
var router = express.Router()
const controllers = require('../controllers/setup')
const itemControllers = require('../controllers/item')

/* GET home page. */
router.get('/setup', controllers.seed)

router.get('/items', itemControllers.getAll)

router.post('/cart', itemControllers.create)
router.get('/cart', itemControllers.getAllcart)
router.post('/checkout', itemControllers.checkout)

module.exports = router
