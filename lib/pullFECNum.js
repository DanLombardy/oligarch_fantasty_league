var requester = require('request');

module.exports = function(last, state, cb){

requester('https://api.open.fec.gov/v1/candidates/?sort_nulls_large=true&name=' + last + '&office=S&api_key=NuexDOvarnhkJZekrddCv0Ym4NFJQWYW3DYjkTIM&sort=name&per_page=20&state='+state+'&page=1', function (error, response, body) {
  if(!error && response.statusCode == 200) {
    typeof cb === 'function' ? cb(null, body) : console.log('FEC number error');
  };
});
};




