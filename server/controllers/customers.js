var Customers = require('../models/customers')

module.exports = {

  addCustomers: function(req, res, next) {
    Customers.create({
      name: req.body.customersname,
      address: req.body.address,
      phone: req.body.phone
    })
    .then(function(custom){
      res.json(custom)
    })
    .catch(function(err){
      res.json('silahkan isi data dengan lengkap')
    })
  }
}
