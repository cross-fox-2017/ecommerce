var express = require('express');
var router = express.Router();
const products = require('../controllers/controllers.products')


/* GET home page. */
router.post('/addProducts',products.addProducts);

module.exports = router;
