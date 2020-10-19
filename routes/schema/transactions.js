var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TransactionSchema = new Schema({
    description:String,
    type:       {type: String, enum: ['0','1'],default:'1'},//0 - debit, 1 - credit
    amount:     String,//transaction amount
    balance:    String//running balance
},{timestamps:true});

const transaction = mongoose.model('Transactions',TransactionSchema);
module.exports = transaction;
