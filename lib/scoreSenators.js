var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/oligarchs_dev');
var senator = require(__dirname + '/../models/senator');
var rollCall = require(__dirname + '/../models/rollCall');
var missedVotes = require(__dirname + '/calcs/calcMissedVotes');
var factCheck = require(__dirname + '/matchSenatorsFactChecks');
var partyLine = require(__dirname + '/calcs/calcPartyLine');
var calcLies = require(__dirname + '/calcs/calcLies');
var Promise = require('promise');
var Q = require('q');

module.exports = function(senator_id){
  var Sen;
  senator.find({id: senator_id}, function(err, data) {
    Sen = data[0];
    getAbsentee(Sen);
    if(Sen.party = 'D') {
      getDLine(Sen);
    }
    if(Sen.part = 'R') {
      getRLine(Sen);
    }
    getLies(Sen);
  });
}

function getLies(senator){
  factCheck.myRecentLies(senator.id)
  .then(function (result) {
    var lieArray = [];
    result.forEach(function (fact) {
      lieArray.push(fact.ruling.ruling);
    });
    var lieScore=0;
    lieArray.forEach(function (lie) {
      console.log(lie);
      switch(lie) {
        case "Mostly True":
          lieScore ++;
          break;
        case "Half True":
          lieScore += 2;
          break;
        case "Mostly False":
          lieScore +=3;
          break;
        case "False":
          lieScore +=4;
          break;
        case "Pants on Fire!":
          lieScore +=5;
          break;
        default:
          console.log('default hit');
      };
    });
    var finalLie = Math.round(lieScore/lieArray.length);
    console.log(senator);
       switch(finalLie) {
        case 1:
          senator.currentScore.Liar['Upstanding'] = true;
          break;
        case 2:
          senator.currentScore.Liar['Liar, but not like a LIAR-liar'] = true;
          break;
        case 3:
          senator.currentScore.Liar['Kind of a Liar'] = true;
          break;
        case 4:
          senator.currentScore.Liar['Liar'] = true;
          break;
        case 5:
          senator.currentScore.Liar['Huge Liar'] = true;
          break;
        default:
          console.log('default hit');
      };
      senator.save();
  })
  .fail(function (error) {
    console.log(error);
  })
}

function getAbsentee(senator){
  missedVotes.missedVoteAvg()
  .then(function (result) {
    senator.currentScore.Absentee = (result['missed votes average'] < senator.missed_votes_pct);
  })
  .fail(function (error) {
    console.log(error);
  });
}

function getDLine(senator){
  partyLine.partyLineD()
  .then(function (result) {
    senator.currentScore.Partisan = (result['average party line votes for democrats'] < senator.votes_with_party_pct);
  })
  .fail(function (error) {
      console.log(error);
  });
};

function getRLine(senator){
  partyLine.partyLineR()
  .then(function (result) {
    senator.currentScore.Partisan = (result['average party line votes for republicans'] < senator.votes_with_party_pct);
  })
  .fail(function (error) {
      console.log(error);
  });
};
