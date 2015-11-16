var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/oligarchs_dev');
var Senator = require(__dirname + '/../../models/senator');
var Promise = require('promise');
var Q = require('q');

module.exports =  {
  missedVoteAvg: function(callback) {
    var deferred = Q.defer();
    var total =0;
    var legislators;
    Senator.count(function(err, c) {
      legislators = c;
    });
    Senator.find(function(err, data) {
      data.forEach(function(doc) {
        total += doc.missed_votes_pct;
      });
      var result = {'average missed votes': total/legislators};
      deferred.resolve(result)
    });
    deferred.promise.nodeify(callback);
    return deferred.promise;
  }
}

