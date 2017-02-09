let Customers = require('../models/customers')

module.exports = {
  getCustomers: (req, res) => {
    Customers.find().then(function (data) {
      res.send({Customers: data})
    }).catch(function (err) {
      res.json(err)
    })
  },
  getCustomer: (req, res) => {
    Customers.find({memberid: req.params.memberid}).then(function (data) {
      res.send({Customer: data})
    }).catch(function (err) {
      res.json(err)
    })
  },
  createCustomer: (req, res) => {
    Customers.create({
      name: req.body.name,
      memberid: req.body.memberid,
      address: req.body.address
    }).then(function (data) {
      res.json(data)
    }).catch(function (err) {
      res.json(err)
    })
  },
  deleteCustomer: (req, res) => {
    Customers.findOneAndRemove({memberid: req.params.memberid}).then(function (data) {
      res.send(`Deleted Customer with MemberId: ${req.params.memberid}`)
    }).catch(function (err) {
      res.json(err)
    })
  },
  updateCustomer: (req, res) => {
    Customers.findOneAndUpdate({memberid: req.params.memberid}, req.body, {new: true}).then(function (data) {
      res.json(data)
    }).catch(function (err) {
      res.json(err)
    })
  }
}
