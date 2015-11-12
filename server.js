var mongoose = require('mongoose');
var express = require('express');
var app = express();
var articleRouter = require(__dirname + '/routes/articles.js');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/oligarchs_dev');

app.use('/api', articleRouter);

app.listen(process.env.PORT || 3000, function(){
  console.log('server up');
});
