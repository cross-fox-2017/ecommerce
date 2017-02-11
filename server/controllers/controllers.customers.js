var modelsCustomers = require('../models/models.customers')

var Customers = {
    registerCustomers: function(req, res, next) {
        var saveCustomers = new modelsCustomers({
            name: req.body.customersname,
            address: req.body.address,
            phone: req.body.phone
        })
        saveCustomers.save(function(err, data) {
            if (err) {
                res.send(err)
            } else {
                res.send(data)
            }
        })
    }
}

module.exports = Customers
