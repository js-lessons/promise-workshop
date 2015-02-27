var q = require('q');
var defer = q.defer();

defer.promise.then(console.log, console.log);
defer.reject("I FIRED");
defer.reject("I DID NOT FIRE");
