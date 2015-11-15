var BuildSenators = require(__dirname + '/lib/BuildSenators.js');
var BuildRollCallVote = require(__dirname + '/lib/BuildRollCallVote');
var BuildFinancials = require(__dirname + '/lib/buildfinancialdetails');
var vote2Voter = require(__dirname + '/lib/matchSenatorsVotes');
var Promise = require('promise');
var populateFECs = require((__dirname + '/lib/populateFECs'))





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



