'use strict'
var items = require('../models/item.js')

let itemController = {
  create : function(req, res){
    let data = {
      name : req.body.name,
      picture : req.body.picture,
      stock: req.body.stock,
      price: req.body.price
    }
    let newitems = items(data)
    newitems.save(function(err){
      if(err) throw err;
      res.json({
        msg: 'item Created!',
        item: newitems
      })
    })
  },
  findAll: function(req, res){
    items.find({}, function(err, items){
      if (err) throw err;
      res.json(items)
    })
  },
  updateStock: function(req, res) {
    let data = JSON.parse(req.body.cartItem);
    data.forEach(function(item){
      items.findOne({_id: item.id}, function(err, data){
        let prev = data.stock
        let update = prev - item.qty
        data.stock = update
        data.save(function(err) {
          if(err) throw err;
        })
      })
    })
    res.send({msg: 'berhasil'})
  }
}
module.exports = itemController
