"use strict"

const mongoose = require('mongoose');
var Schema     = mongoose.Schema;
// var autoIncrement = require('mongoose-auto-increment');

var customersSchema = new Schema({
  name        : {type: String, required: true},
  // customersId : {type: Number, unique: true},
  address     : {type: String, required: true},
  zipcode     : {type: String, required: true},
  phone       : {type: String, required: true},
},
{
  timestamps: true
});


// auto increment
// customersSchema.plugin(autoIncrement.plugin, { model: 'Customers', field: 'customersId' });

var Customers = mongoose.model('Customers', customersSchema)

module.exports = Customers;
