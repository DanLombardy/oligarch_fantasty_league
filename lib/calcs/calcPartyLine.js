var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/oligarchs_dev');
var Senator = require(__dirname + '/../../models/senator');
var Promise = require('promise');
var Q = require('q');

module.exports =  {
  partyLineD: function(callback) {
    var deferred = Q.defer();
    var total =0;
    var legislators;
    Senator.count({party: 'D'}, function(err, c) {
      legislators = c;
    });
    Senator.find({party: 'D'}, function(err, data) {
      data.forEach(function(doc) {
        total += doc.votes_with_party_pct;
      });
      var result = {'average party line votes for democrats': total/legislators};
      deferred.resolve(result)
    });
    deferred.promise.nodeify(callback);
    return deferred.promise;
  },

    partyLineR: function(callback) {
    var deferred = Q.defer();
    var total =0;
    var legislators;
    Senator.count({party: 'R'}, function(err, c) {
      legislators = c;
    });
    Senator.find({party: 'R'}, function(err, data) {
      data.forEach(function(doc) {
        total += doc.votes_with_party_pct;
      });
      var result = {'average party line votes for republicans': total/legislators};
      deferred.resolve(result)
    });
    deferred.promise.nodeify(callback);
    return deferred.promise;
  }
}

