var Senator = require(__dirname + '/../models/senator');
var express = require('express');
var PullLegislators = require(__dirname + '/PullLegislatorData.js');
var bodyParser = require('body-parser');


module.exports =function (){
  PullLegislators(113, 'senate', function(err, body){
    var result = JSON.parse(body);
    result.results[0].members.forEach(function(legislator){
      var newSenator = new Senator();
      for (var key in legislator) {
        if (legislator.hasOwnProperty(key)) {
          newSenator[key] = legislator[key];
        };
      };
      newSenator.save();
    });
    console.log('senators saved');
  });
};
