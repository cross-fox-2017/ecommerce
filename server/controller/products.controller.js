const products = require('../models/products.model')

module.exports = {

  getAllProduct : function (req, res) {
    products.find({}, {
      __v   : false
    },(err, data) => {
      res.send(data)
    })
  },

  createProduct : function methodName (req, res) {
    products.create({
      name        : req.body.name,
      description : req.body.description,
      price       : req.body.price,
      stock       : req.body.stock,
      imageUrl    : req.body.imageUrl
    })
    .then(function(data){
      res.send({
        message     : 'New Product Has Been Created',
        name        : data.name,
        description : data.description,
        price       : data.price,
        stock       : data.stock,
        imageUrl    : data.imageUrl
      })
    })
  }
}
