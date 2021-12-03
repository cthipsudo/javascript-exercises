const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce( (prev,num) => prev+=num, 0);
};

const multiply = function(arr) {
  // inital value is index 0
  // multiply after the first index
  return arr.reduce((prev, num) => prev*= num) 
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  if(num === 0) return 1;
	return num * factorial(num-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
