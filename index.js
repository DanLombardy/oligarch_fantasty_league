var BuildSenators = require(__dirname + '/lib/BuildSenators.js');
var BuildRollCallVote = require(__dirname + '/lib/BuildRollCallVote');
var vote2Voter = require(__dirname + '/lib/matchSenatorsVotes');
var Promise = require('promise');


//this function will pull a senators 5 most recent votes from the db
vote2Voter.myRecentVotes('M001183')
.then(function (result) {
    console.log(result);
})
.fail(function (error) {
    console.log(error)
});


