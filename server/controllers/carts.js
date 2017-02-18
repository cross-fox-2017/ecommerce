var Carts = require('../models/cart')

module.exports = {

  addCarts: function(req, res, next) {
    Carts.create({
      customersId: req.body.customersId,
      totalPrice: req.body.totalPrice,
      productsList: JSON.parse(req.body.productsList),
      jumlahBeli: JSON.parse(req.body.jumlahBeli),
      subTotal: JSON.parse(req.body.subTotal)
    })
    .then(function(custom){
      res.json(custom)
    })
    .catch(function(err){
      res.json('silahkan isi data dengan lengkap')
    })
  }
}
