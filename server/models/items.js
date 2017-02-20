const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: String,
  price: Number,
  quantity: Number,
  picture: String
},{
  timestamps: true
})

const Item = mongoose.model('Items', itemSchema);
module.exports = Item;
