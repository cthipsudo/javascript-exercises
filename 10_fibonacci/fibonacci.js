const fibonacci = function(num) {
  // num is number of loops for fibonacii sequence
  if (num < 0) {
    return 'OOPS'
  }
  let a = 1;
  let b = 0;
  let temp;

  while(num > 0) {
    //console.log(a);
    temp = a;
    a = a + b;
    b = temp;
    num--;

  }
  return b;

};

// Do not edit below this line
module.exports = fibonacci;
