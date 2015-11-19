
var senator = require(__dirname + '/models/senator');
var mongoose = require('mongoose');
var http = require('http');
var express = require('express');
var app = express();
var fs = require('fs');
var senatorRouter = require(__dirname + '/routes/routes_senators.js');
var BuildFinancialDetails = require(__dirname + '/lib/buildfinancialdetails');





var server = app.listen(4000, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log("example app listening at http://%s:%s", host, port);
});





app.get('/api/senator', function (req, res) {


  senator.findOne({FEC_id: 'S6UT00063' }, function (err, data) {
      if (err) console.log(err);
      console.log("found the senator!");
      console.log(data);
      res.send(data);
  });

});






app.use(express.static(__dirname + '/public'));
app.use('/', senatorRouter);


app.get('/', function (req, res) {
  //res.send(fs.readFileSync(__dirname + '/public/senator_compare.html'));
  fs.readFile(__dirname + "/public/senator_compare.html", function(err, data){
        var parsed = data.toString();
        res.send(parsed);
  });
});

/*
var populateFECs = require((__dirname + '/lib/populateFECs'))
var BuildCommitteeData = require(__dirname + '/lib/buildcommitteedata');
var BuildCommitteeContributes = require(__dirname + '/lib/buildcommcontribs');*/


//CODE TO RETURN A SORTED LIST OF FACT CHECK RULINGS --> NOT MATHEMATICALLY RIGOROUS)
/*
  calcLies.averageLies()
  .then(function (result) {
      console.log(result);
  })
  .fail(function (error) {
      console.log(error)
  });*/
