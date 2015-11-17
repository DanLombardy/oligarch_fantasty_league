var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
var Senator = require(__dirname + '/../models/senator.js')

process.env.MONGOLAB_URI = 'mongodb://localhost/oligarchs_test';
require(__dirname + '/../index.js');
var mongoose = require('mongoose');

describe('building a db of senators', function() {
  after(function(done) {
    mongoose.connection.db.dropDatabase(function() {
      done();
    });
  });

  it('should have 100 records', function(done) {
   /* var bearData = {name: 'KILLER BEAR'};
    chai.request('localhost:3000')
      .post('/api/bears')
      .send(bearData)
      .end(function(err,res) {
        expect(err).to.eql(null);
        expect(res.body.name).to.eql('KILLER BEAR');
        expect(res.body).to.have.property('_id');
        done();
      });*/
  });


});
