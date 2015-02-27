var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

describe('values_and_promises', function() {
  before(function() {
    sinon.spy(console, 'log');
    require('../src/values_and_promises');
  });

  afterEach(function() {
    console.log.restore();
  });

  it('calls console.log with resolved value', function(done) {
    setTimeout(function () {
      expect(console.log).to.have.been.calledWith('DR. MANHATTAN');
      done();
    });
  });
});
