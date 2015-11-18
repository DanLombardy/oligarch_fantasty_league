var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/oligarchs_dev');
var buildSenators = require(__dirname + '/BuildSenators');
var buildRollCallVote = require(__dirname + '/BuildRollCallVote');
//var buildFactChecks = require(__dirname + '/populateFactCheck');

buildSenators();

buildRollCallVote(113, 'senate', 2, 1);

//buildFactChecks();
