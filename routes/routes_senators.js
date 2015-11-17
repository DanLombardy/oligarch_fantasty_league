var express = require('express');
var bodyParser = require('body-parser');
var Senator = require(__dirname + '/../models/senator');
var handleError = require(__dirname + '/../lib/handleServerError.js');
var requester = require('request');
var bodyParser = require('body-parser');

var senatorRouter = module.exports = exports = express.Router();

senatorRouter.get('/senators/:search', function(req, res) {
  Senator.find({last_name: req.params.search}, function (err, data) {
    if (err) return handleError(err, res);
    console.log(data);
    res.json(data);
    res.end();
  });
});
