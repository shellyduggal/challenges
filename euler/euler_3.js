var primes = [];
var prime = true;
var value = 600851475143;
var mid = Math.floor(value/2);
var answer = 0;

function isPrime(x) {
  for(var i = 2; i < x; i ++) {
    if(x % i === 0) {
      prime = false;;  
    } 
  }
  return prime;
}

for(var i = 1; i <= mid; i ++) {
  if(value % i === 0) {
    if(isPrime(i)) {
      primes.push(i);
    }
  }
}

primes.forEach(function(i) {
  if(i > answer){
    answer = i;
  }
});

console.log("answer = " + answer);