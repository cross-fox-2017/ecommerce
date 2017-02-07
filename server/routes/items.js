var express = require('express')
var router = express.Router()
const controllerItem = require('../controllers/controller.item')

/* GET book listing. */
router.get('/', controllerItem.getAllItem)
/* get one book */
router.get('/:itemid', controllerItem.getOneItem)
/* create book */
router.post('/', controllerItem.createItem)
/* edit book */
router.put('/:itemid', controllerItem.editOneItem)
/* delete book */
router.delete('/:itemid', controllerItem.deleteOneItem)

module.exports = router
