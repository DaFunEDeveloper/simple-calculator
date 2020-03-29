var operation = prompt('What operation would you like to do? (please answer in lower case)')

if(operation == 'multiplication') {
	var noOne = prompt('Name the first number');
	var noTwo = prompt ('Name the second number');
	var finNo = noOne * noTwo;
	alert('The product is ' + finNo);
}
if(operation == 'division') {
	var noOne = prompt('Name the first number');
	var noTwo = prompt ('Name the second number');
	var finNo = noOne / noTwo;
	alert('The quotient is ' + finNo);
}
if(operation == 'subtraction') {
	var noOne = prompt('Name the first number');
	var noTwo = prompt ('Name the second number');
	var finNo = noOne - noTwo;
	alert('The difference is ' + finNo);
}
if(operation == 'addition') {
	var noOne = prompt('Name the first number');
	var noTwo = prompt ('Name the second number');
	var negOne = 0 - noOne;
	var finNo = noTwo - negOne;
	alert('The sum is ' + finNo);
}