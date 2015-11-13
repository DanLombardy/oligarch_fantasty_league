var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/oligarchs_dev');
var senator = require(__dirname + '/../models/senator');
var rollCall = require(__dirname + '/../models/rollCall');


module.exports = function(rollCall_id){
  rollCall.find({'_id': rollCall_id}, function (err, docs) {
    var votes = docs[0].votes[0].vote.positions;
    for(var i=0; i<votes.length; i++){
      var query = { id: votes[i].member_id };
      senator.findOneAndUpdate(query, { $push: { votingRecord: {bill: docs[0].votes[0].vote.bill, vote:votes[i].vote_position } } }, function(err, doc){
            console.log(doc);
      });
    };
  });
}



