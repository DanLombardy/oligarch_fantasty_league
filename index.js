var BuildSenators = require(__dirname + '/lib/BuildSenators.js');
var BuildRollCallVote = require(__dirname + '/lib/BuildRollCallVote');
var BuildFinancials = require(__dirname + '/lib/buildfinancialdetails');
var vote2Voter = require(__dirname + '/lib/matchSenatorsVotes');
var Promise = require('promise');
var populateFECs = require(__dirname + '/lib/populateFECs');
var missedVotes = require(__dirname + '/lib/calcs/calcMissedVotes');
var partyLine = require(__dirname + '/lib/calcs/calcPartyLine');
var factCheck = require(__dirname + '/lib/populateFactCheck.js')
var lie2Voter = require(__dirname + '/lib/matchSenatorsFactChecks');


lie2Voter.myRecentLies('W000817')
.then(function (result) {
   console.log(result);
})
.fail(function (error) {
    console.log(error)
});
//BuildSenators();
//factCheck();
//BuildRollCallVote(114, 'senate', 1, 304);
//BuildFinancials(2016, 'S0IL00261');

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

//DON'T DELETE:  this function will pull average missed votes of senators
/*
missedVotes.missedVoteAvg()
.then(function (result) {
    console.log(result);
})
.fail(function (error) {
    console.log(error)
});*/

//DON'T DELETE:  this function will pull average missed votes of senators
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
});
*/
