const Item = require('../models/items');

module.exports = {
  newItem: function(req,res) {
    let newItem = Item({
      name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity,
      picture: req.body.picture
    })
    newItem.save().then(function(data){
      res.send(data)
    })
  },
  getAllItems: function(req,res) {
    Item.find().then(function(data){
      res.send(data)
    })
  },
  updateQuantity: function(req,res) {
    Item.find({_id: req.body.id},{
      quantity: quantity - req.body.quantity,
      updatedAt: new Date()
    },{new: true}).then(function(data){
      res.send(data)
    })
  }
}
