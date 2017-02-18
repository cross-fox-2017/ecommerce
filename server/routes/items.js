var express = require('express');
var router = express.Router();
const items = require('../controllers/items');

router.post('/',items.addItems);
router.get('/',items.getAllItems);
router.put('/',items.checkOutItems)

module.exports = router;
