var rollCall = require(__dirname + '/../models/rollCall');
var PullRollCall = require(__dirname + '/PullRollCallData.js');
var bodyParser = require('body-parser');


module.exports =function (congress, chamber, session, voteNum, cb){
  PullRollCall(congress, chamber, session, voteNum, function(err, body){
    var result = JSON.parse(body);
    var newRollCall = new rollCall({votes: result.results.votes});
    newRollCall.save();
    console.log('rollcall saved');
  });
  cb('56453124739c161e1502383d');
};



