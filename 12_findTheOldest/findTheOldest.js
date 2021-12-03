const findTheOldest = function (arr) {
  return arr.reduce((prev, current) => {
    let prevAge;
    let currentYear = new Date(); 
    if (!prev.yearOfDeath) {
      prevAge = currentYear.getFullYear() - prev.yearOfBirth;
    } else {
      prevAge = prev.yearOfDeath - prev.yearOfBirth;
    }

    const currentAge = current.yearOfDeath - current.yearOfBirth;
    return prevAge > currentAge ? prev : current;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
