var express = require('express');
var router = express.Router();
const controllers = require('../controllers/item');

/* GET home page. */
router.get('/item/all', controllers.getAllItems);

router.post('/item/new', controllers.newItem);

module.exports = router;
