var express = require('express');
var router = express.Router();
const products = require('../controllers/controllers.products')
// var multer  = require('multer')
// var upload = multer({ dest: 'uploads/' })

/* GET home page. */
router.post('/addProducts',products.addProducts);

router.get('/',products.getAllProducts);

// router.post('/upload',upload.any(),function(req, res, next) {
//     console.log(req.files);
// });


module.exports = router;
