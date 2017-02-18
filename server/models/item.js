const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var itemsSchema = new Schema({
  name:String,
  description:String,
  imageUrl:String,
  price:Number,
  stock:Number
},{
  timestamps: true
})

module.exports = mongoose.model('Items',itemsSchema)
