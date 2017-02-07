var modelsProducts = require('../models/models.products')

var Products = {
    addProducts: function(req, res, next) {
        var saveProducts = new modelsProducts({
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            category: req.body.category,
            price: req.body.price,
            stock: req.body.stock
        })
        saveProducts.save(function(err, data) {
          console.log(data);
          if(err){
            res.send(err)
          }else{
            res.send(data)
          }
        })
    },
    getAllProducts: function(req, res, next) {
      modelsProducts.find({}, function(err, data) {
          res.send(data)
      })
    }
}

module.exports = Products
