var express = require('express');
var bodyParser = require('body-parser');
var Senator = require(__dirname + '/../models/senator');
var handleError = require(__dirname + '/../lib/handleServerError.js');
var requester = require('request');
var articleRouter = module.exports = exports = express.Router();

articleRouter.post('/articles/senate',  function(req, res) {
  getLegislators(113, 'senate', function(err, body){
    var result = JSON.parse(body);
    result.results[0].members.forEach(function(legislator){
      //console.log(legislator);
      var newSenator = new Senator();
      newSenator.save(function(err, data) {
              for (var key in legislator) {
        if (legislator.hasOwnProperty(key)) {
          newSenator[key] = legislator[key];
          console.log(legislator[key]);
        };
      };

      });
    });
    res.json({msg: 'senators saved'});
  });
});

articleRouter.get('/articles/:search', function(req, res) {
  Article.find({term: req.params.search}, function(err, data) {
    if (err) return handleError(err, res);
    res.json(data);
  });
});

articleRouter.delete('/articles/:search', function(req, res) {
  Article.remove({term: req.params.search}, function(err, data) {
    if (err) return handleError(err, res);
    res.json({msg: 'article deleted'});
  });
});

articleRouter.patch('/articles/:term/:notes', bodyParser.json(), function(req, res) {
  Article.update({term: req.params.term}, {notes: req.params.notes}, function(err) {
    if (err) handleError(err, res);
    res.json({msg: 'article updated'});
  });
});

getSenators();

function getSenators() {
  getLegislators(113, 'senate', function(err, body){
    var result = JSON.parse(body);
    result.results[0].members.forEach(function(legislator){
      //console.log(legislator);
      var newSenator = new Senator();
      for (var key in legislator) {
        if (legislator.hasOwnProperty(key)) {
          newSenator[key] = legislator[key];
          console.log(legislator[key]);
        };
      };
      newSenator.save(function(err, data) {
        if (err) return handleError(req, res);
      });
    });
    console.log('senators saved');
  });
}

function getLegislators (congress, chamber, cb){
    requester('http://api.nytimes.com/svc/politics/v3/us/legislative/congress/' + congress + '/' + chamber +'/members/current.json?api-key=9cbfc9b5aaf819470097450953f9865f:18:62020237', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          //console.log(body)
        };
        typeof cb === 'function' && cb(null, body);
    });
};
