const express    = require('express');
const router     = express.Router();
const controller = require('../controller/products.controller.js')

router.get('/', controller.getAllProduct)

router.post('/create', controller.createProduct)


module.exports = router;
