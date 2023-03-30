const reverseString = function(str) {

    let strArray = [];
    strArray = str.split("").reverse().join("");

    return strArray;
};

// Do not edit below this line
module.exports = reverseString;
