var BuildSenators = require(__dirname + '/lib/BuildSenators.js');
var BuildRollCallVote = require(__dirname + '/lib/BuildRollCallVote');
var vote2Voter = require(__dirname + '/lib/matchSenatorsVotes');
var Promise = require('promise');


  function doSomething() {
    return {
      then: function getVoters(callback){
        var x = vote2Voter('S001141');
        console.log(x);
        callback(x);
      }
    };
  }
  doSomething().then(function(result) {
      console.log('my result' + result)
  });



