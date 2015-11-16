var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/oligarchs_dev');
var senator = require(__dirname + '/../models/senator');
var factCheck = require(__dirname + '/../models/factCheck');
var Promise = require('promise');
var Q = require('q');



//exports a promise to get the senator's recent votes and related info
module.exports = {
    myRecentLies: function (senator_id, callback) {
        var deferred = Q.defer();
        var mySen = {};
        //this check currently makes sure the senator is in our db
        if (senator.find({id: senator_id}, function (err, data) {
          var rslt = getLies(data[0]);
          deferred.resolve(rslt);
        }));
        else {
            deferred.reject("Senator does not exist");
        }
        deferred.promise.nodeify(callback);
        return deferred.promise;
    }
};


function getLies(senator) {
  return {
    then: function(callback) {
      var lieArray = [];
      //searches records in db
      factCheck.find(function (err, data) {
        //for each of the 5 most recent votes:
        data.forEach(function(element, index, array) {
        //gets the senator's position on the vote, involve's returning a nested document (position)
        try {
          if(element.speaker.last_name == senator.last_name && element.speaker.first_name == senator.first_name){
            lieArray.push(element);
          }
        }
        catch(err) {
        console.log(err);
          lieArray.push('There are no recent fact checks for this legislator.');
        }
        });
      callback(lieArray);
      });
    }
  };
}


