var requester = require('request');

module.exports = function (last, first, cb){
    requester('http://www.politifact.com/api/statements/truth-o-meter/people/' + first.toLowerCase() + '-' + last.toLowerCase() + '/json/?n=20', function (error, response, body) {
        if (!error && response.statusCode == 200) {
        };
        typeof cb === 'function' && cb(null, body);
    });
};

