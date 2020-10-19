var express = require('express');
var router = express.Router();
var Transactions = require('./schema/transactions'); // get our mongoose model
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/create_transaction', function(req, res, next) {
    var obj = req.body;
    console.log(obj)
	var transaction = new Transactions({
        description: obj.description,
        type: obj.type,
        balance: obj.balance,
        amount: obj.amount
    });
    transaction.save(function(err,data) {
        if (err) {
            res.json({status:0,msg:err});
        } else {
            res.json({status:1,msg:"Transaction saved",data:data});
        }

    });
	
});

router.get('/transactions_list', function (req, res) {
    Transactions.find(function (err, result) {
        if (err) {
            res.json({ status: 0, msg: err })
        }else{
            res.json({ status: 1, data: result });
        }
    }).sort({_id:-1}) ;
});

module.exports = router;
