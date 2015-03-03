var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

describe('fetch_json', function() {
  var server;
  var obj = { id: 1337, name: 'Katy Perry', occupation: '???' };

  before(function(done) {
    var http = require('http');

    server = http.createServer(function (request, response) {
      response.writeHead(200, {"Content-Type": "application/json"});
      response.end(JSON.stringify(obj));
    });

    server.listen(1337);

    done();
  });

  after(function () {
    server.close();
  });

  before(function() {
    sinon.spy(console, 'log');
    require('../src/fetch_json');
  });

  afterEach(function() {
    console.log.restore();
  });

  it('calls console.log with resolved json', function(done) {
    setTimeout(function () {
      expect(console.log.calledWith(obj)).to.be.true;
      done();
    }, 350);
  });
});
