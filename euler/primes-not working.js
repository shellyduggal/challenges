var prime = true;
var factors = [];
var value = 600851475143;
var mid = Math.floor(value/2);
var answer = 0;

function isPrime(x) {
  for(var i = 2; i < x; i ++) {
    if(x % i === 0) {
      prime = false;
      break;  
    } else {
      prime = true;
    }
  }
  return prime;
}

for(var i = mid; i > 1; i --) {
  if(value % i === 0) {
    if(isPrime(i)) {
      answer = i;
      break;
    }
  }
}

console.log("answer: " + answer);