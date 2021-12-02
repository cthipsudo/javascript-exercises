const repeatString = function(string, count) {
    if(count < 0) return 'ERROR';
    let newString ="";
    while(count > 0 ) {
        newString += string;
        count--;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
