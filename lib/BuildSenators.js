var Senator = require(__dirname + '/../models/senator');
var PullLegislators = require(__dirname + '/PullLegislatorData.js');
var populateFECs = require(__dirname + '/populateFECs');
var bodyParser = require('body-parser');
var populateFECs = require((__dirname + '/populateFECs'));




module.exports =function (){
  PullLegislators(113, 'senate', function(err, body){
    var result = JSON.parse(body);
    var FECresult;
    result.results[0].members.forEach(function(legislator){
      var newSenator = new Senator();
      for (var key in legislator) {
        if (legislator.hasOwnProperty(key)) {
          newSenator[key] = legislator[key];
        };
      };
      newSenator.save();
    });
    populateFECs();
    console.log('senators saved');
  });
};
