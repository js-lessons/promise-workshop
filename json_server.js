var http = require('http');

var server = http.createServer(function (request, response) {
  var obj = { id: 1337, name: 'Katy Perry', occupation: '???' };
  response.writeHead(200, {"Content-Type": "application/json"});
  response.end(JSON.stringify(obj));
});

server.listen(1337);
