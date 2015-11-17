var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/oligarchs_dev');

var factCheckSchema = new mongoose.Schema({
  statement_url: {type: String, unique: true, dropDups: true},
  target: Array,
  statement_date: Date,
  statement_context: String,
  speaker: Object,
  ruling_headline: String,
  statement: String,
  ruling: Object
});

factCheckSchema.index({statement_url: 1});
factCheckSchema.set('autoIndex', false);

module.exports = mongoose.model('factCheck', factCheckSchema);
