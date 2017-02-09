const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({
  name: String,
  memberid: {
    type: String,
    required: true
  },
  address: String
},
  {
    timestamps: true
  })

module.exports = mongoose.model('Customers', CustomerSchema)
