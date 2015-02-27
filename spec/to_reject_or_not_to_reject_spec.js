var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

describe('to_reject_or_not_to_reject', function() {
  before(function() {
    sinon.spy(console, 'log');
    require('../src/to_reject_or_not_to_reject');
  });

  afterEach(function() {
    console.log.restore();
  });

  it('calls console.log with resolved value', function() {
    expect(console.log).to.have.been.calledWith('I FIRED');
    expect(console.log).to.not.have.been.calledWith('I DID NOT FIRE');
  });
});
