const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
  name: String,
  itemid: {
    type: String,
    required: true
  },
  category: String,
  stock: Number,
  price: String
},
  {
    timestamps: true
  })

module.exports = mongoose.model('Items', ItemSchema)
