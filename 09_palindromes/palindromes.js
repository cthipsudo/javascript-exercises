const palindromes = function (str) {
  const reg = /[\W]/g;
  const newStr = str.replace(reg, '').toLowerCase();
  let reverseStr = newStr.split('').reverse().join('');
  console.log(reverseStr);
  return newStr === reverseStr;

};

// Do not edit below this line
module.exports = palindromes;
