var express = require('express');
var router = express.Router();
const controllerBook = require('../controllers/controller.book');

/* GET book listing. */
router.get('/', controllerBook.getAllBook);
/* get one book */
router.get('/:isbn', controllerBook.getOneBook);
/* create book */
router.post('/', controllerBook.createBook);
/* edit book */
router.put('/:isbn', controllerBook.editOneBook);
/* delete book */
router.delete('/:isbn', controllerBook.deleteOneBook);

module.exports = router;
