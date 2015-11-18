
console.log("financial details is working");
var financeData = {
  "_id" : "5647a06bc4512317070c053d",
 "date_coverage_to" : "2010-12-31T00:00:00Z",
 "debts_owed" : 707398,
 "total_refunds" : 165781,
 "end_cash" : 103015,
 "total_disbursements" : 21638315,
 "candidate_loans" : 0,
 "total_contributions" : 20696364.05,
"total_from_pacs" : 1260653,
"total_from_individuals" : 19382783,
"total_receipts" : "21741330",
"status" : "O",
"committee" : "/committees/C00458844.json",
"fec_uri" : "http://docquery.fec.gov/cgi-bin/fecimg/?S0FL00338",
"party" : "REP",
"name" : "RUBIO, MARCO",
"id" : "S0FL00338",
"other_cycles" : [
  { "relative_uri" : "/candidates/S0FL00338.json",
  "cycle" : { "current" : true, "branch" : "S", "cand_status" : "C", "office_state" : "FL",
  "updated_at" : null,
  "created_at" : null,
   "district" : "00",
   "cycle" : 2016,
   "fec_committee_id" : "C00458844",
   "zip" : "33134",
   "state" : "FL",
   "city" : "CORAL GABLES",
   "address_two" : "",
   "address_one" : "2030 SOUTH DOUGLAS ROAD",
   "status" : "I",
   "seat" : null,
   "party3" : null,
   "party" : "REP",
   "name" : "RUBIO, MARCO",
   "fecid" : "S0FL00338",
   "id" : 3024 }
  } ],
  "__v" : 0
};



var SenatorFinances = React.createClass({


  render:function(){
    return (
      <ul>
        <li> Total Contributions: {financeData["total_contributions"]}</li>
        <li>Total  Pacs: {financeData["total_from_pacs"]} </li>
        <li>Total  Individuals: {financeData["total_from_individuals"]}</li>
        <li><a href={financeData["fec_uri"]}> For more info</a></li>
      </ul>
    )
  }
});

ReactDOM.render(
  <SenatorFinances />,
  document.getElementById('content')
);
