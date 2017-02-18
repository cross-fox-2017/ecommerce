var Items = require('../models/items')

module.exports = {

  addItems: function(req, res, next) {
    Items.create({
      name: req.body.name,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      price: req.body.price,
      stock: req.body.stock
    })
    .then(function(custom){
      res.json(custom)
    })
    .catch(function(err){
      res.json('silahkan isi data dengan lengkap')
    })
  },

  getAllItems: function(req, res, next) {
    Items.find({}, function(err, data) {
        res.send(data)
    })
  },

  checkOutItems: function(req, res, next) {
    var IdProductsList = JSON.parse(req.body.IdProductsList)
    var jumlahBeli = JSON.parse(req.body.jumlahBeli)
    for (var i = 0; i < IdProductsList.length; i++) {
      var j = 0
      Items.findById(IdProductsList[i], function(err, updateProducts) {
        if(err){
          res.send(err)
        }else{
          updateProducts.stock = updateProducts.stock - jumlahBeli[j]
          updateProducts.save()
        }
        j++
      })
    }
    res.send("succes")
  }
}
