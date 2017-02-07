var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ItemsSchema = new Schema({})

var items = mongoose.model('Items', ItemsSchema);

module.exports = items
