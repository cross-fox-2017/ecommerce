var express = require('express');
var router = express.Router();
const carts = require('../controllers/carts');

router.post('/',carts.addCarts);

module.exports = router;
