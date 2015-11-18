var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/oligarchs_dev');
var factCheck = require(__dirname + '/populateFactCheck.js')
var lie2Voter = require(__dirname + '/matchSenatorsFactChecks');
var senator = require(__dirname + '/../models/senator');
var scoreCard = require(__dirname + '/scoreSenators');

senator.find(function(err, data){
  data.forEach(function(senator) {
    lie2Voter.myRecentLies(senator.id)
    .then(function (result) {
       result.forEach(function(lie){
          console.log(lie);
          senator.factChecks.push(lie);
          senator.save();
       });
    })
    .fail(function (error) {
        //console.log(error)
    });
  });
})
