var BuildSenators = require(__dirname + '/lib/BuildSenators.js');
var BuildRollCallVote = require(__dirname + '/lib/BuildRollCallVote');
var vote2Voter = require(__dirname + '/lib/matchSenatorsVotes');



//BuildSenators();
BuildRollCallVote(110, 'senate', 2, 178, vote2Voter);
