// multiples of 3 and 5 below 1000 (exclusive)

var sum = 0;

for(var i = 1; i < 1000; i ++) {
	if(i % 3 === 0 || i % 5 === 0) {
		sum = sum + i;
	} 
}

console.log(sum);