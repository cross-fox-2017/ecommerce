const db = require('../models')
const trans = db.UserTransaction

module.exports = {
  create: function(req,res){
    trans.findOne({where:{CustomerId:req.body.customer,ItemId:req.body.item,status:'cart'}}).then(function(barang){
      console.log(barang);
      if(barang){
        console.log("kesatu");
        barang.quantity = barang.quantity+1
        barang.save({fields: ['quantity']}).then(function(data) {
        res.send(data)
        })
          // barang.updateAttributes({quantity:barang.quantity+1},{where:{id:barang.id,
          //   status:'cart',CustomerId:barang.CustomerId,ItemId:barang.ItemId}}).then(function(data){
          //     res.send(data)
          //   })
      }
      else{
        console.log('kedua');
        trans.create({CustomerId:req.body.customer,ItemId:req.body.item,status:'cart',quantity:1}).then(function(data){
          res.send(data)
        })
      }
    })

  },
  show: function(req,res){
    trans.findAll({where:{CustomerId:req.params.cus,status:'cart'},include:db.Item}).then(function(cart){
      res.send(cart)
    })
  },
  deleteCart: function(req,res){
    trans.findOne({where:{id:req.body.id}}).then(function(data){
      data.destroy().then(function(){

      })
    })
  },
  checkout: function(req,res){
    trans.findAll({where:{CustomerId:req.body.cus,status:'cart'}}).then(function(cart){
        cart.forEach(function(barang){
          barang.update({where:{id:barang.id},status:'done'}).then(function(y){
            db.Item.findOne({where:{id:y.ItemId}}).then(function(x){
              x.update({quantity:x.quantity-y.quantity})
            })
          })


        })
        res.send("checkout sukses terimakasih")
    })
  },
}
