const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var customersSchema = new Schema({
  name:String,//Dilarang ditulis dengan huruf Besar
  customersId:String,
  address:String,
  phone:String
},{
  timestamps: true
})

let Customers = mongoose.model('Customers',customersSchema)

module.exports = Customers
