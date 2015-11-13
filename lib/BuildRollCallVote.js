var rollCall = require(__dirname + '/../models/rollCall');
var PullRollCall = require(__dirname + '/PullRollCallData.js');
var bodyParser = require('body-parser');


module.exports =function (){
  PullRollCall(110, 'senate', 2, 194, function(err, body){
    var result = JSON.parse(body);
    var newRollCall = new rollCall({votes: result.results.votes});
    newRollCall.save();
    console.log('rollcall saved');
  });
};



