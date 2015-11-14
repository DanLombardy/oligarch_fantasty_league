"use strict";
var mongoose = require('mongoose');


var financialDetailsSchema = new mongoose.Schema({
  "total_refunds": Number,
  "total_disbursements": Number,
  "total_from_individuals": Number,
  "end_cash": Number,
  "total_from_pacs": Number,
  "status": String,
  "other_cycles": Array,
  "debts_owed":Number,
  "fec_uri": String,
  "date_coverage_to": Date,
  "total_contributions": Number,
  "committee":String,
  "candidate_loans": Number,
  "party":String,
  "name": String,
  "total_receipts": String,
  "id": String

});

module.exports = mongoose.model("FinancialDetails", financialDetailsSchema);
