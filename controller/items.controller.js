const db = require('../models')
const Items = db.Item
module.exports = {
  create: function(req,res){
    Items.create({name:req.body.name,price:req.body.price,quantity:req.body.quantity,picture:req.body.picture}).then(function(data){
      res.send(data)
    })
  },
  show: function(req,res){
    Items.findAll().then(function(yeah){
      res.send(yeah)
    })
  }

}
