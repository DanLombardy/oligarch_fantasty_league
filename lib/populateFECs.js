var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/oligarchs_dev');
var Senator = require(__dirname + '/../models/senator');
var pullFECs = require(__dirname + '/pullFECNum');

module.exports = function () {
  Senator.find(function(err, data) {
    data.forEach(function(doc) {
      pullFECs(doc.last_name, doc.first_name, function(err, body){
        try {
          var fecResults = JSON.parse(body).results[0].candidate_id;
          doc.FEC_id = fecResults;
          doc.save();
        } catch(err) {
          console.log(err);
        }
      });
    });
  });
}




