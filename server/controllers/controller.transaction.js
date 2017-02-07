const modelTransaction = require('../models/model.transaction');

var controllerTransaction = {
  /* create new book */
  createTransaction : function(req, res, next){

    // create a new customer
    var newTransaction = modelTransaction({
      memberid: req.body.memberid,
      days: req.body.days,
      fine: req.body.fine,
      booklist: req.body.book
    });

    // save the customer
    newTransaction.save(function(err, data) {
      if (err) throw err;
      res.json("Transaction has been succesfully created : " +  data)
    });

  },
  /* get All customer */
  getAllTransaction : function(req, res, next){
    modelTransaction.find({}, function(err, data){
      res.json(data);
    })
  },
  /* find one customer */
  getOneTransaction : function(req, res, next){
    modelTransaction.find({ _id: req.params.transactionID }, function(err, data){
      res.json(data);
    })
  },
  /* edit customer */
  /*
  editOneTransaction : function(req, res, next){
    modelTransaction.findOneAndUpdate({ _id: req.params.transactionID}, {
    },{
      new : true
    }, function(err, data) {
      if (err) throw err;
      // we have the updated book returned to us
      res.json("data has been updated : ", data);
    });
  },
  */
  /* delete customer */
  /*
  deleteOneTransaction : function(req, res, next){
    modelTransaction.findOneAndRemove({ _id: req.params.transactionID }, function(err, data) {
      if (err) throw err;
      res.json("transaction with transactionID : " + data._id + " has been deleted");
    });
  }
  */
}

module.exports = controllerTransaction
