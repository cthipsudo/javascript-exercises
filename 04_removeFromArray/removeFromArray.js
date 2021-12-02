const removeFromArray = function() {

    //console.log(arguments.length); length of arguments
    let arr = arguments[0];

    for(let i = 1; i < arguments.length; i++){
        let spliceStart = arr.indexOf(arguments[i]);
        if(spliceStart != -1) {
            arr.splice(spliceStart, 1);
        }
    }
    //console.log(arr);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
