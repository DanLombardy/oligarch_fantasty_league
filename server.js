var mongoose = require('mongoose');
var express = require('express');
var app = express();
var senatorRouter = require(__dirname + '/routes/routes_senators.js');

mongoose.createConnection(process.env.MONGOLAB_URI || 'mongodb://localhost/article_stream_dev');

app.use('/api', senatorRouter);

app.listen(process.env.PORT || 3000, function(){
  console.log('server up');
});
