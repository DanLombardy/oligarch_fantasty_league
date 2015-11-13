var Senator = require(__dirname + '/../models/senator');
//var express = require('express');
var PullLegislators = require(__dirname + '/PullLegislatorData.js');
var bodyParser = require('body-parser');


module.exports =function (){
  PullLegislators(113, 'senate', function(err, body){
    var result = JSON.parse(body);
    result.results[0].members.forEach(function(legislator){
      var newSenator = new Senator(legislator);
      newSenator.save();
    });
    console.log('senators saved');
  });
};
