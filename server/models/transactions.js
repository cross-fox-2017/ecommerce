const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
  memberid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customers'
  },
  cart: [{
    itemid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Items'
    },
    qty: {
      type: Number,
      ref: 'Items'
    }
  }],
  paid: Boolean
},
  {
    timestamps: true
  })

module.exports = mongoose.model('Transactions', TransactionSchema)
