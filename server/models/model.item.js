// grab the things we need
var mongoose = require('mongoose')
var Schema = mongoose.Schema

// create a schema
var itemSchema = new Schema({
  itemName: String,
  description: String,
  price: Number,
  stock: Number
})

// the schema is useless so far
// we need to create a model using it
var Item = mongoose.model('Item', itemSchema)

// make this available to our users in our Node applications
module.exports = Item
