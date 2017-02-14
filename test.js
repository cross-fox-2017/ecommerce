const db = require('./models')

db.UserTransaction.findOne({ attributes: ['id'],where:{CustomerId:1,ItemId:1,status:'cart'}}).then(function(barang){
  console.log(barang.id);
  db.UserTransaction.findOne({where:{id:barang.id}}).then(function(data){
    console.log(data)
    data.quantity= data.quantity+1
    data.save()
  })
})
