var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/oligarchs_dev');
var Senator = require(__dirname + '/../../models/senator');
var Promise = require('promise');
var Q = require('q');

module.exports =  {
  partyLine: function(callback) {
    var deferred = Q.defer();
    var total =0;
    var legislators=0;
    Senator.find(function(err, data) {
      data.forEach(function(doc) {
        total += doc.votes_with_party_pct;
        legislators++;
      });
      var result = {'average party line votes for democrats': (total/legislators)};
      deferred.resolve(result)
    });
    deferred.promise.nodeify(callback);
    return deferred.promise;
  }
}

