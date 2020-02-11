function mySplit(str) {
    let result;
    if (str === undefined) {
        result = "Please provide a string";
    } else {
        result = str.split("");
    }
    return result;
}

module.exports = mySplit;