var express = require('express');
var router = express.Router();
const controllerTransaction = require('../controllers/controller.transaction');

/* get transaction listing. */
router.get('/', controllerTransaction.getAllTransaction);
/* get one transaction */
router.get('/:transactionID', controllerTransaction.getOneTransaction);
/* create transaction */
router.post('/', controllerTransaction.createTransaction);
/* edit transaction */
// router.put('/:transactionID', controllerTransaction.editOneTransaction);
/* delete transaction */
// router.delete('/:transactionID', controllerTransaction.deleteOneTransaction);

module.exports = router;
