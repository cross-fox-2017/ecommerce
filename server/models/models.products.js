const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var productsSchema = new Schema({
  productsId:String,
  name:String,
  description:String,
  imageUrl:String,
  category:String,
  price:Number,
  stock:Number
},{
  timestamps: true
})

let Products = mongoose.model('Products',productsSchema)

module.exports = Products
