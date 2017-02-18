const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var customersSchema = new Schema({
  name:String,
  address:String
},{
  timestamps: true
})

module.exports = mongoose.model('Customers',customersSchema)
