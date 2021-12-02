const leapYears = function (year) {
  // Leap year 
  // if divisible by 4 and not 100
  // or divisible by 100 and 400
  return (
    (year % 4 === 0 && year % 100 != 0) ||
    (year % 100 === 0 && year % 400 === 0)
  );
};

// Do not edit below this line
module.exports = leapYears;
