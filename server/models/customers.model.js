"use strict"

const mongoose = require('mongoose');
var Schema     = mongoose.Schema;
// var autoIncrement = require('mongoose-auto-increment');

var customersSchema = new Schema({
  username    : String,
  address     : String,
  zipcode     : String,
  phone       : String
},
{
  timestamps: true
});


// auto increment
// customersSchema.plugin(autoIncrement.plugin, { model: 'Customers', field: 'customersId' });

var Customers = mongoose.model('Customers', customersSchema)

module.exports = Customers;
