var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

describe('an_important_rule', function() {
  before(function() {
    sinon.spy(console, 'log');
    require('../src/an_important_rule');
  });

  afterEach(function() {
    console.log.restore();
  });

  it('calls a catch handler', function(done) {
    setTimeout(function () {
      expect(console.log.args).to.deep.equal([[1], [2], [3], [4], [5], [new Error('OH NOES')]]);
      done();
    });
  });
});
