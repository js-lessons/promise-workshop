var q = require('q');

function throwMyGod() {
  throw Error('OH NOES');
}

function iterate(count) {
  console.log(count);
  return ++count;
}

q.fcall(iterate, 1)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(throwMyGod)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.catch(console.log)
