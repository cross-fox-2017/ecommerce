const modelCustomer = require('../models/model.customer')

var controllerCustomer = {
  /* create new book */
  createCustomer: function (req, res, next) {
    // create a new customer
    var newCustomer = modelCustomer({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password
    })
    // save the customer
    newCustomer.save(function (err, data) {
      if (err) res.json(err)
      res.json(data)
    })
  },
  /* get All customer */
  getAllCustomer: function (req, res, next) {
    modelCustomer.find({}, function (err, data) {
      if (err) res.json(err)
      res.json(data)
    })
  },
  /* find one customer */
  getOneCustomer: function (req, res, next) {
    modelCustomer.find({memberid: req.params.customerid}, function (err, data) {
      if (err) res.json(err)
      res.json(data)
    })
  },
  /* edit customer */
  editOneCustomer: function (req, res, next) {
    modelCustomer.findOneAndUpdate({ memberid: req.params.customerid}, {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone
    }, {
      new: true
    }, function (err, data) {
      if (err) res.json(err)
      // we have the updated book returned to us
      res.json('data has been updated : ' + data)
    })
  },
  /* delete customer */
  deleteOneCustomer: function (req, res, next) {
    modelCustomer.findOneAndRemove({ memberid: req.params.memberid }, function (err, data) {
      if (err) {
        res.json(err)
      } else if (data.memberid != null) {
        res.json('member with memberid : ' + data.memberid + ' has been deleted')
      }
    })
  }
}

module.exports = controllerCustomer
