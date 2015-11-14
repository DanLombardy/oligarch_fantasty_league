"use strict";
var requester = require('request');

module.exports = function(campaignCycle, fecID, cb){
  requester('http://api.nytimes.com/svc/elections/us/v3/finances/' + campaignCycle + "/candidates/" + fecID +".json?api-key=d307746bfcf08f6417540d3d7bd7a6de:5:62020237", function(error, response, body){
    if(!error && response.statusCode == 200){

    };
    typeof cb === 'function'? cb(null,body): console.log("Callback that was passed was not a function");
  });
};
