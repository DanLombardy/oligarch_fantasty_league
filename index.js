/*


var Promise = require('promise');
var missedVotes = require(__dirname + '/lib/calcs/calcMissedVotes');
var factCheck = require(__dirname + '/lib/populateFactCheck.js');
var calcLies = require(__dirname + '/lib/calcs/calcLies');
var lie2Voter = require(__dirname + '/lib/matchSenatorsFactChecks');
*/
var lie2Voter = require(__dirname + '/lib/matchSenatorsFactChecks');

var partyLine = require(__dirname + '/lib/calcs/calcPartyLine');
var BuildSenators = require(__dirname + '/lib/BuildSenators.js');

var vote2Voter = require(__dirname + '/lib/matchSenatorsVotes');

var http = require('http');
var express = require('express');
var app = express();
var fs = require('fs');
var senatorRouter = require(__dirname + '/routes/routes_senators.js')

//BuildCommitteeContributes(2012, 'C00495861');

var server = app.listen(4000, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log("example app listening at http://%s:%s", host, port);
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







//CODE TO GET SCORECARD
/*
var score = require(__dirname + '/lib/scoreSenators');
score('B000575')
});*/


/*
var populateFECs = require((__dirname + '/lib/populateFECs'))
var BuildCommitteeData = require(__dirname + '/lib/buildcommitteedata');
var BuildCommitteeContributes = require(__dirname + '/lib/buildcommcontribs');*/

  //CODE TO RETURN A SENATORS RECENT FACT-CHECKED STATEMENTS
  /*
  lie2Voter.myRecentLies('B000575')
  .then(function (result) {
     console.log(result);
  })
  .fail(function (error) {
      console.log(error)
  });


//CODE TO RETURN A SORTED LIST OF FACT CHECK RULINGS --> NOT MATHEMATICALLY RIGOROUS)
/*
  calcLies.averageLies()
  .then(function (result) {
      console.log(result);
  })
  .fail(function (error) {
      console.log(error)
  });*/

//CODE TO PULL AVERAGE OF MISSED VOTES
/*
missedVotes.missedVoteAvg()
.then(function (result) {
    console.log(result);
})
.fail(function (error) {
    console.log(error)
});*/

//PARTY LINE VOTE AVERAGES (ONE FOR Ds, ONE FOR Rs)
/*
partyLine.partyLineD()
.then(function (result) {
    console.log(result);
})
.fail(function (error) {
    console.log(error)
});
partyLine.partyLineR()
.then(function (result) {
    console.log(result);
})
.fail(function (error) {
    console.log(error)
});*/

