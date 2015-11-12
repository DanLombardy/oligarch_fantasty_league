var requester = require('request');

module.exports = function (congress, chamber, cb){
    requester('http://api.nytimes.com/svc/politics/v3/us/legislative/congress/' + congress + '/' + chamber +'/members/current.json?api-key=9cbfc9b5aaf819470097450953f9865f:18:62020237', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          //console.log(body)
        };
        typeof cb === 'function' && cb(null, body);
    });
};
