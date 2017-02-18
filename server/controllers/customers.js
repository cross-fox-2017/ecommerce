var Customers = require('../models/customer')

module.exports = {

  addCustomers: function(req, res, next) {
    Customers.create({
      name: req.body.customersname,
      address: req.body.address
    })
    .then(function(custom){
      res.send(custom)
    })
    .catch(function(err){
      res.json('silahkan isi data dengan lengkap')
    })
  }
}
