var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/oligarchs_dev');
var senator = require(__dirname + '/../models/senator');
var rollCall = require(__dirname + '/../models/rollCall');
var Promise = require('promise');
var Q = require('q');

//exports a promise to get the senator's recent votes and related info
module.exports = {
    myRecentVotes: function (senator_id, callback) {
        var deferred = Q.defer();
        if (senator_id) {
            //getVotes is where the data is collated
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

      //searches records in db
      rollCall.find(function (err, data) {

        //for each of the 5 most recent votes:
        data.forEach(function(element, index, array) {

        //gets the senator's position on the vote, involve's returning a nested document (position)
        var position = element.votes[0].vote.positions.filter(function (position) { return position.member_id == senator_id})[0].vote_position;

        //get the description of the vote
        var description = element.votes[0].vote.description;

        //date of vote
        var date = element.votes[0].vote.date;

        //the related bill (can be N/A for confirmation votes)
        var bill = element.votes[0].vote.bill || 'n/a';

        //calls vote record constructor to assemble information
        var tempRecord = new voteRecord(description, date, position, bill);
        voteArray.push(tempRecord);
        });
      callback(voteArray);
      }).sort({_id:-1}).limit(5);
    }
  };
}

//vote record constructor
function voteRecord(description, date, position, bill) {
  this.description = description,
  this.date = date,
  this.position = position,
  this.bill = bill
}

