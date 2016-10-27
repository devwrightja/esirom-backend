var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var insertSubscriber = function(db, callback, req, res) {
   ;
};

/* GET users listing. */
router.post('/subscribe', function(req, res) {
  var url = process.env.MONGODB_IP || 'mongodb://localhost:27017/esirom';
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server.");
    db.collection('subscribers').insertOne( {
      "username": req.body.username,
      "password": req.body.password,
      "company" : {
        "name" : req.body.cname,
        "address" : {
            "street": "",
            "community": "",
            "parish": ""
          }
      }
    }, function(err, result) {
      console.log("Inserted a document into the restaurants collection.");
    })
    db.close();
  });
  res.send(req.body.name);
});

module.exports = router;
