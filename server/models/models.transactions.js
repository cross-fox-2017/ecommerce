const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var transactionsSchema = new Schema({
  customersId:{
    type: Schema.Types.ObjectId,
    ref: "Customers"
  },
  totalPrice:Number,
  productsList:[{
    type: Schema.Types.ObjectId,
    ref: "Products"
  }],
  jumlahBeli:[],
  subTotal:[]
},{
  timestamps: true
});

let Transactions = mongoose.model('Transactions',transactionsSchema)

module.exports = Transactions
