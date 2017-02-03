//By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
//make an array of even fibonacci numbers
//sum the array


var fibArray = [1,1],
	go = true,
	sum = 0,
	val = 0,
    i = 1;
    
    
while(go) {
  val = fibArray[i] + fibArray[i - 1];
  if(val < 4000000) {
    fibArray.push(val);
    if(val % 2 === 0)  {
      sum = sum + val;      
    }
  } else {
    go = false;
  }
  i++;
}

console.log("sum: " + sum);
console.log("array: " + fibArray);