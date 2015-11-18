var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
var Senator = require(__dirname + '/../models/senator.js')
var buildSenators = require(__dirname + '/../lib/BuildSenators.js')

process.env.MONGOLAB_URI = 'mongodb://localhost/oligarchs_test';
require(__dirname + '/../index.js');
var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/oligarchs_test');



var count;

describe('the senators db', function(){
  it('test', function(done) {
    expect(1).to.eql(110);
    done();

  });


  //after(function(done) {
    //mongoose.connection.db.dropDatabase(function() {
      //done();
    //});
  });
});
/*describe('the senators db', function(){
  it('should have 0 records prior to request', function(done) {
      expect(beforeCount).to.eql(0);
      done();
  });
});*/

