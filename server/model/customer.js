var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var customerSchema = new Schema({
  name: String,
  memberid:String,
  address: String,
  zipcode: String,
  phone: String
});

// the schema is useless so far
// we need to create a model using it
var customer = mongoose.model('Customer', customerSchema);

// make this available to our users in our Node applications
module.exports = customer;
