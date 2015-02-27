var q = require('q');

var d1 = q.defer();
var d2 = q.defer();

var p1 = d1.promise;
var p2 = d2.promise;

function all(p1, p2) {
  var d = q.defer();
  var count = 0;
  var result = [];

  [p1, p2].forEach(function(p, index) {
    p.then(function(v) {
      count++;
      result[index] = v;

      if(count === 2) { d.resolve(result) }
    });

    p.catch(d.reject);
  });

  return d.promise;
}

q.all([p1, p2]).then(console.log);

setTimeout(function() {
  d1.resolve('PROMISES');
  d2.resolve('FTW');
}, 200);
