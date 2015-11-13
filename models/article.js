var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
  text: Object,
  term: { type : String , unique : true, required:true, dropDups: true},
  notes: String
});

module.exports = mongoose.model('Article', articleSchema);
