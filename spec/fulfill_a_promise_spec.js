var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

describe('fulfill_a_promise', function() {
  before(function() {
    sinon.spy(console, 'log');
    require('../src/fulfill_a_promise');
  });

  afterEach(function() {
    console.log.restore();
  });

  it('calls console.log with resolved value', function(done) {
    setTimeout(function () {
      expect(console.log).to.have.been.calledWith('RESOLVED!');
      done();
    }, 350);
  });
});
