var rollCall = require(__dirname + '/../models/rollCall');
var PullRollCall = require(__dirname + '/PullRollCallData.js');
var bodyParser = require('body-parser');

/*this function takes in a congress number, chamber of congress, session, roll call vote number, and a callback.*/
module.exports =function (congress, chamber, session, voteNum, cb){
  PullRollCall(congress, chamber, session, voteNum, function(err, body){
    var result = JSON.parse(body);
    var newRollCall = new rollCall({votes: result.results.votes});
    newRollCall.save(function(err,rc) {
      //cb only runs if a function. always gets passed rollcalls id
      //typeof cb === 'function' && cb(rc.id);
      typeof cb === 'function' ? cb(rc.id) : console.log('rollcall saved, no callback');
    });
  });
};



