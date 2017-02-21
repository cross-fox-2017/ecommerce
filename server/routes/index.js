var express = require('express');
var router = express.Router();
const controllers = require('../controllers/itemController');

/* GET home page. */
router.get('/item', controllers.getAllItems);

router.post('/item', controllers.newItem);

router.post('/item/update', controllers.updateQuantity);

module.exports = router;
