var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/oligarchs_dev');
var senator = require(__dirname + '/../models/senator');
var rollCall = require(__dirname + '/../models/rollCall');
var async = require('async');
var Promise = require('promise');



/*function getVotersVotes(senator_id) {
  return {
    then: function wrapper(callback){
      var voteArray = [];
      rollCall.find(function (err, data) {
        data.forEach(function(element, index, array) {
          voteArray.push(element.votes[0].vote.positions.filter(function (position) { return position.member_id == senator_id }));
        });
        callback(voteArray);
      }).sort({_id:-1}).limit(5);
    }
  };
}
module.exports = function(senator_id){
  getVotersVotes(senator_id).then(function(result) {
        console.log(result);
        return 'result';
    });
}*/

  var promise = new Promise(function(resolve, reject) {
      var voteArray = [];
      rollCall.find(function (err, data) {
        data.forEach(function(element, index, array) {
          voteArray.push(element.votes[0].vote.positions.filter(function (position) { return position.member_id == senator_id }));
        });
        if (voteArray.length != 0) {
          resolve(voteArray); // we got data here, so resolve the Promise
        } else {
          reject(Error('boo')); // status is not 200 OK, so reject
        }
      }).sort({_id:-1}).limit(5);
  });

  promise.then(function(data) {
    console.log('Got data! Promise fulfilled.');
  }, function(error) {
    console.log('Promise rejected.');
    console.log(error.message);
  });

