const express = require('express');
const router = express.Router();
const multer = require('multer')

const bookController = require('../controller/controllerBook');
const customerController = require('../controller/controllerCustomer');

/* Book */
router.get('/book', bookController.getAllBook);
// router.post('/book', bookController.createNewBook);
router.delete('/book', bookController.deleteBook);
router.put('/book', bookController.updateBook);
/* customer */
router.get('/customer', customerController.getAllCustomer );
router.post('/customer', customerController.createNewCustomer );
router.delete('/customer', customerController.deleteCustomer );
router.put('/customer', customerController.updateCustomer );

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = multer({
  storage: storage
})

router.post('/book', upload.any(), bookController.createNewBook)


module.exports = router;
