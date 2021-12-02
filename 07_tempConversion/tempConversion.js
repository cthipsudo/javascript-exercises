const ftoc = function(temp) {
  // f to c is (f - 32) * (5/9)
  return +((temp - 32) * (5/9)).toFixed(1); // toFixed returns a string, Unary + Operator converts it to number
};

const ctof = function(temp) {
  // c to f is c * (9/5) + 32
  return +(temp * (9/5) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
