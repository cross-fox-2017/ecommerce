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
    },
    checkOutProducts: function(req, res, next) {
      var IdProductsList = JSON.parse(req.body.IdProductsList)
      var jumlahBeli = JSON.parse(req.body.jumlahBeli)
      for (var i = 0; i < IdProductsList.length; i++) {
        var j = 0
        modelsProducts.findById(IdProductsList[i], function(err, updateProducts) {
          if(err){
            res.send(err)
          }else{
            updateProducts.stock = updateProducts.stock - jumlahBeli[j]
            updateProducts.save()
          }
          j++
        })
      }
      res.send("Transaksi Berhasil !!!!")
    }
}

module.exports = Products
