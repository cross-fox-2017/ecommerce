var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ItemsSchema = new Schema({
  name : String,
  picture: String,
  stock: Number,
  price: Number
})

var items = mongoose.model('Items', ItemsSchema);

module.exports = items
