const customers   = require('../models/customers.model')

module.exports = {
  getAllCustomer : function (req, res) {
    customers.find({}, {
      __v   : false
    }, (err, data) => {
      res.send(data)
    })
  },

  createCustomers : function (req, res) {
    customers.create({
      name        : req.body.name,
      address     : req.body.address,
      zipcode     : req.body.zipcode,
      phone       : req.body.phone
    })
    .then(function(data){
      res.send({
        message     : 'New Customer Has Been Created',
        name        : data.name,
        address     : data.address,
        zipcode     : data.zipcode
      })
    })
  }

}
