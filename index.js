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


//CODE TO BUILD THE DB OF SENATORS
//BuildSenators();

/* ROLL CALL VOTE CODE
  //CODE TO BUILD THE DB OF ROLLCALL VOTES (MUST BE RUN FOR EACH ROLL CALL VOTE)
  //INFO CAN BE FOUND HERE:  http://www.senate.gov/legislative/votes.htm
  //BuildRollCallVote(CONGRESS #, 'senate', SESSION, ROLLCALL VOTE #);

  //CODE TO RETURN A SENATORS RECENT VOTES (AFTER ROLLCALL DB HAS BEEN POPULATED)
  vote2Voter.myRecentVotes(SENATOR.id)
  .then(function (result) {
      console.log(result);
  })
  .fail(function (error) {
      console.log(error)
  });*/

//CODE TO BUILD FINANCIAL INFO
//BuildFinancials(YEAR, SENATOR.FEC_ID);

/*FACT CHECKING CODE
  //CODE TO BUILD THE DB OF FACT-CHECKED STATEMENTS
  //factCheck();

  //CODE TO RETURN A SENATORS RECENT FACT-CHECKED STATEMENTS
  lie2Voter.myRecentLies(SENATORS ID HERE)
  .then(function (result) {
     console.log(typeof result);
  })
  .fail(function (error) {
      console.log(error)
  });
*/

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
});
*/
