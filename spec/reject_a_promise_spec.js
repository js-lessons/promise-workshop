var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

describe('reject_a_promise', function() {
  before(function() {
    sinon.spy(console, 'log');
    require('../src/reject_a_promise');
  });

  afterEach(function() {
    console.log.restore();
  });

  it('calls console.log with error message', function(done) {
    setTimeout(function () {
      expect(console.log).to.have.been.calledWith('REJECTED!');
      done();
    }, 350);
  });
});

