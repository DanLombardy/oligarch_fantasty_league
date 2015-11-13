var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/oligarchs_dev');

var rollCallSchema = new mongoose.Schema({
  votes: Array
});

module.exports = mongoose.model('RollCall', rollCallSchema);
