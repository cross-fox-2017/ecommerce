var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var bookSchema = new Schema({
  isbn: String,
  title:String,
  author: String,
  category: String,
  image:String,
  price:Number,
  stock: Number,
  description:String
});

var book = mongoose.model('Book', bookSchema);

module.exports = book;
