const sumAll = function (val1, val2) {
  let sum = 0;
  let max = 0;
  let min = 0;

  if (val1 < 0 || val2 < 0 || typeof val1 != "number" || typeof val2 != "number") {
    return "ERROR";
  } else if (val1 > val2) {
    max = val1;
    min = val2;
  } else {
    min = val1;
    max = val2;
  } 

  for (let i = min; i <= max; i++) {
    //console.log(i);
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
