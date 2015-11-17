/*var BuildSenators = require(__dirname + '/lib/BuildSenators.js');
var BuildRollCallVote = require(__dirname + '/lib/BuildRollCallVote');
var BuildFinancials = require(__dirname + '/lib/buildfinancialdetails');
var vote2Voter = require(__dirname + '/lib/matchSenatorsVotes');
var Promise = require('promise');
var populateFECs = require((__dirname + '/lib/populateFECs'))
var BuildCommitteeData = require(__dirname + '/lib/buildcommitteedata');
var BuildCommitteeContributes = require(__dirname + '/lib/buildcommcontribs');
*/
var http = require('http');
var express = require('express');
var app = express();
var fs = require('fs');

//BuildCommitteeContributes(2012, 'C00495861');

var server = app.listen(4000, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log("example app listening at http://%s:%s", host, port);
});


app.use(express.static(__dirname + '/public'))


app.get('/', function (req, res) {
  //res.send(fs.readFileSync(__dirname + '/public/senator_compare.html'));
  fs.readFile(__dirname + "/public/senator_compare.html", function(err, data){
        var parsed = data.toString();
        res.send(parsed);
  });


});




//BuildSenators();//
//BuildFinancials(2016, 'P60006723');

//DON'T DELETE:  this function will pull a senators 5 most recent votes from the db
/*
vote2Voter.myRecentVotes('B000944')
.then(function (result) {
    console.log(result);
})
.fail(function (error) {
    console.log(error)
});
*/
