var modelsTransactions = require('../models/models.transactions')

var Transactions = {
    addNewTransactions: function(req, res, next) {
      var saveTransactions = new modelsTransactions({
        customersId: req.body.customersId,
        totalPrice: req.body.totalPrice,
        productsList: JSON.parse(req.body.productsList),
        jumlahBeli: JSON.parse(req.body.jumlahBeli),
        subTotal: JSON.parse(req.body.subTotal)
      })
      saveTransactions.save(function(err, result){
        if(err){
          res.send(err)
        }else{
          res.send(result)
        }
      })
    }
}

module.exports = Transactions
