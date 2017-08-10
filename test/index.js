const chai = require('chai');
const serve = require('../bin/www');
const should = chai.should();

chai.use(require('chai-http'));

describe('/GET robots.txt', function () {
  it('it should return status 204', function (done) {
    chai.request(serve)
      .get('/robots.txt')
      .end(function(err, res) {
         res.should.have.status(204);
         done();
      });
  });
});
