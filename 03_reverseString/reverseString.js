const reverseString = function(str) {
    let arr = str.split('');
    let newArr = [];

    for(let i = str.length-1; i >=0; i--){
        newArr.push(arr[i]);
    }
    return newArr.join('');
};

// Do not edit below this line
module.exports = reverseString;
