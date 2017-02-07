// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var transactionSchema = new Schema({
  memberid: String,
  days: Number,
  out_date: { type: Date, default: Date.now },
  due_date: { type: Date, default: Date.now },
  in_date: { type: Date, default: Date.now },
  fine:Number,
  booklist: [{ type: Schema.Types.ObjectId, ref: 'books' }]
});

// the schema is useless so far
// we need to create a model using it
var Transaction = mongoose.model('Transaction', transactionSchema);

// make this available to our users in our Node applications
module.exports = Transaction;
