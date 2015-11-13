var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/oligarchs_dev');
var senator = require(__dirname + '/../models/senator');
var rollCall = require(__dirname + '/../models/rollCall');


module.exports = function(rollCall_id){
  rollCall.find({'_id': rollCall_id}, function (err, docs) {
    //console.log(docs[0].votes[0].vote.positions.length);
    var votes = docs[0].votes[0].vote.positions;
    var bill = docs[0].votes[0].vote.bill;
    for(var i=0; i<votes.length; i++){
      senator.find({ id: votes[i].member_id}, function (err, doc) {
        //doc.votingRecord.push({'bill': bill, 'position': votes[i].vote_positions});
        console.log(doc[0].id);
      });
    };
  });
}


