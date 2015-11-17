var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/oligarchs_dev');
var factCheck = require(__dirname + '/../../models/factCheck');
var senators = require(__dirname + '/../../models/senator');
var Promise = require('promise');
var Q = require('q');

module.exports =  {
  averageLies: function(callback) {
    var deferred = Q.defer();
    var total =0;

    var rulings = {
      True: 0,
      Mostly_True: 0,
      Half_True: 0,
      Mostly_False:0,
      False: 0,
      Pants_on_Fire: 0
    };
    factCheck.find(function(err, data) {
      data.forEach(function(fact) {
        var ruling = fact.ruling.ruling.replace(' ','_');
        if(rulings.hasOwnProperty(ruling)) {
          rulings[ruling]++;
        };
    sortRulings = Object.keys(rulings).sort(function(a,b){return rulings[b]-rulings[a]})
      console.log(sortRulings);
      });
      deferred.resolve(sortRulings);
    });
    deferred.promise.nodeify(callback);
    return deferred.promise;
  }
}

