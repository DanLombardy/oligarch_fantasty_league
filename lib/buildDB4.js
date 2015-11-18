var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/oligarchs_dev');
var senator = require(__dirname + '/../models/senator');
var scoreCard = require(__dirname + '/scoreSenators');

senator.find(function(err, data){
  data.forEach(function(senator) {
    scoreCard(senator.id);
  });
})
