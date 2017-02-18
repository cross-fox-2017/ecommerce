const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var cartsSchema = new Schema({
  customersId:{
    type: Schema.Types.ObjectId,
    ref: "Customers"
  },
  totalPrice:Number,
  productsList:[{
    type: Schema.Types.ObjectId,
    ref: "Items"
  }],
  jumlahBeli:[],
  subTotal:[]
},{
  timestamps: true
})

module.exports = mongoose.model('Carts',cartsSchema)
