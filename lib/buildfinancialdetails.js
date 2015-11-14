var FinancialDetails = require(__dirname + '/../models/financialdetails');
var PullFinancialDetails = require(__dirname + '/pullfinancialdetailsdata');

module.exports = function(campaignCycle, fecID, cb){
  PullFinancialDetails(campaignCycle, fecID, function(err, body){
    var result = JSON.parse(body);
    result.results.forEach(function(financeData){
      var newFinancialDetails = new FinancialDetails();
      for(var key in financeData){
        if(financeData.hasOwnProperty(key)){
          newFinancialDetails[key] = financeData[key];
        }
      };
      console.log(newFinancialDetails);
      newFinancialDetails.save();
    });

  });
};
