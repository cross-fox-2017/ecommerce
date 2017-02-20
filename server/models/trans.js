var mongoose = require('mongoose')
var Schema = mongoose.Schema

var TransSchema = new Schema({
  itemId: {type: Schema.Types.ObjectId,ref: 'Items'},
  qty: Number,
  status: Number
})

var trans = mongoose.model('Trans', TransSchema)

module.exports = trans
