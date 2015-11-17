var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/oligarchs_dev');
var senator = require(__dirname + '/../models/senator');
var rollCall = require(__dirname + '/../models/rollCall');
var missedVotes = require(__dirname + '/calcs/calcMissedVotes');
var partyLine = require(__dirname + '/calcs/calcPartyLine');
var calcLies = require(__dirname + '/calcs/calcLies');
var Promise = require('promise');
var Q = require('q');

var score = {
  Liar: {
    majorLiar: false,
    partialLiar: false,
    notLiar: false,
    upstanding: false
  },
  Absentee: false,
  Partisan: false,
  PlayMaker: {
    PlayID: undefined,
    PlayPoints: undefined
  }
};


module.exports = function(senator_id){

  var Sen;
  senator.find({id: senator_id}, function(err, data) {
    Sen = data[0];

    getAbsentee(Sen);
    if(Sen.party == "R"){
      getRLine(Sen);
    }
    if(Sen.party == "R"){
      getDLine(Sen);
    }
  });
}




function getAbsentee(senator){
  missedVotes.missedVoteAvg()
  .then(function (result) {
    if(senator.missed_votes_pct > result['missed votes average']){
      score.Absentee = true;
    }
  })
  .fail(function (error) {
    console.log(error);
  });
}

function getDLine(senator){
  partyLine.partyLineD()
  .then(function (result) {
    console.log(result);
    if(senator.votes_with_party_pct > result['average party line votes for democrats']){
      score.Partisan = true;
    }
  })
  .fail(function (error) {
      console.log(error);
  });
};

function getRLine(){
  partyLine.partyLineR()
  .then(function (result) {
    console.log(result);
    if(senator.votes_with_party_pct > result['average party line votes for republicans']){
      score.Partisan = true;
    }
  })
  .fail(function (error) {
      console.log(error);
  });
};
