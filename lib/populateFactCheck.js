var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/oligarchs_dev');
var Senator = require(__dirname + '/../models/senator');
var FactCheck = require(__dirname + '/../models/factCheck');
var pullFactCheck = require(__dirname + '/pullFactCheck');

module.exports = function () {
  Senator.find(function(err, data) {
    data.forEach(function(doc) {
      pullFactCheck(doc.last_name, doc.first_name, function(err, body){
        try {
          var result = JSON.parse(body);
          result.forEach(function(fact){
            console.log(fact.speaker);
            var newFactCheck = new FactCheck();
            for (var key in fact) {
              if (fact.hasOwnProperty(key)) {
                newFactCheck[key] = fact[key];
              };
            };
            newFactCheck.save();
          });
          var newFactCheck = new FactCheck();

        } catch(err) {
          //console.log('error retrieving fact checks for ' + doc.first_name + ' ' + doc.last_name + ': ' + err);
        }
      });
    });
  });
}


