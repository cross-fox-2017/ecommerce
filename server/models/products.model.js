const mongoose = require('mongoose');
const Schema    = mongoose.Schema;

var productsSchema = new Schema({
  name        : {type: String, required: true},
  description : {type: String},
  price       : {type: Number, required: true},
  stock       : {type: Number, required: true}
},
{
  timestapms : true
})


module.exports = mongoose.model('Products', productsSchema)
