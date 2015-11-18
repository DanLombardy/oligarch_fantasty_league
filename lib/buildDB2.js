var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/oligarchs_dev');
var senator = require(__dirname + '/../models/senator');
var vote2Voter = require(__dirname + '/matchSenatorsVotes');
var lie2Voter = require(__dirname + '/matchSenatorsFactChecks');
var buildFactChecks = require(__dirname + '/populateFactCheck');

buildFactChecks();

senator.find(function (err, data) {
  data.forEach(function (sen) {
    vote2Voter.myRecentVotes(sen.id)
    .then(function (result) {
       sen.votingRecord.push(result);
       sen.save();
    })
    .fail(function (error) {
        console.log(error)
    });
  })
});


