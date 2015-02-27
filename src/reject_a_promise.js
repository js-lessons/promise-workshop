var q = require('q');
var defer = q.defer();

//setTimeout(defer.reject, 300, new Error('REJECTED!'));
//defer.promise.catch(function(error) { console.log(error.message) });

function printError (err) {
  console.log(err.message);
}

defer.promise.then(null, printError);
setTimeout(defer.reject, 300, new Error("REJECTED!"));
