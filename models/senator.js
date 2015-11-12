var mongoose = require('mongoose');

var senatorSchema = new mongoose.Schema({
  id: String,
  thomas_id: Number,
  api_uri: String,
  first_name: String,
  middle_name: String,
  last_name: String,
  party: String,
  twitter_account: String,
  facebook_account: String,
  facebook_id: String,
  url: String,
  rss_url: String,
  domain: String,
  dw_nominate: Number,
  ideal_point: Number,
  seniority: Number,
  total_votes: Number,
  missed_votes: Number,
  total_present: Number,
  state: String,
  missed_votes_pct: Number,
  votes_with_party_pct: Number
});

module.exports = mongoose.model('Senator', senatorSchema);
