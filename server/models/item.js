var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ItemsSchema = new Schema({
  name : String,
  picture: String,
  stock: String
})

var items = mongoose.model('Items', ItemsSchema);

module.exports = items
