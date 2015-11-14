var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/oligarchs_dev');
var senator = require(__dirname + '/../models/senator');
var rollCall = require(__dirname + '/../models/rollCall');
var Promise = require('promise');
var Q = require('q');


module.exports = {
    myRecentVotes: function (senator_id, callback) {
        var deferred = Q.defer();

        if (senator_id) {
            var rslt = getVotes(senator_id)
            deferred.resolve(rslt);
        }
        else {
            deferred.reject("Invalid voting value");
        }

        deferred.promise.nodeify(callback);
        return deferred.promise;
    }
};

function getVotes(senator_id) {
  return {
    then: function(callback) {
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

