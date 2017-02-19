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

    console.log(req.body.username);
    console.log(req.body.address);
    console.log(req.body.zipcode);
    console.log(req.body.phone);

    var newCustomer = customers({
        username    : req.body.username,
        address     : req.body.address,
        zipcode     : req.body.zipcode,
        phone       : req.body.phone
    })

    newCustomer.save(function(err, data){
      if (err) res.json(err)
      res.json(data)
    })

    // customers.create({
    //   username    : req.body.username,
    //   address     : req.body.address,
    //   zipcode     : req.body.zipcode,
    //   phone       : req.body.phone
    // })
    // .then(function(err,data){
    //   res.send({
    //     message     : 'New Customer Has Been Created',
    //     username    : data.username,
    //     address     : data.address,
    //     zipcode     : data.zipcode
    //   })
    // })
  }

}
