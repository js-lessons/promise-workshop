var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

describe('always_async', function() {
  before(function() {
    sinon.spy(console, 'log');
    require('../src/always_async');
  });

  afterEach(function() {
    console.log.restore();
  });

  it('function is called on the NEXT turn of the event loop', function() {
    expect(console.log.args).to.deep.equal([['FIRST'], ['SECOND']]);
  });
});
