var express = require('express');
var router = express.Router();
var items = require('../models/item.js');
var itemController = require('../controller/itemController.js')


router.post('/', itemController.create);
router.get('/', itemController.findAll);

module.exports = router
