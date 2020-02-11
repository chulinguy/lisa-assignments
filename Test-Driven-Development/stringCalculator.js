class StringCalculator {
    add(numbers) {
        if (!numbers) {
            return 0;
        }
        let delimiters = ",\\n"; // default delimiters are newline and comma
        if (numbers.slice(0, 2) === "//") {
            delimiters += numbers[2];
            numbers = numbers.slice(numbers.indexOf(`\n`)  + 1);
        }
        let delimRegexp = new RegExp(`[${delimiters}]`, "g");
        let numsArr = numbers.split(delimRegexp);
        console.log(numsArr);
        if (numsArr.length > 0) {
            let result =  numsArr.reduce((sum, num) => {
                return parseInt(sum) + parseInt(num);
            }, 0);
            return result;
        }
    }
}

let calculator = new StringCalculator;
console.log("Should be true if no parameters: ", calculator.add() === 0); 
console.log("Should be true if string contains one number: ", calculator.add('1') === 1); 
console.log("Should be true if string contains two numbers: ", calculator.add('1,2') === 3); 
console.log("Should be true if string contains many numbers: ", calculator.add('1,2,3,4,5') === 15); 
console.log("Should be true if string is separated by '\\n': ", calculator.add('1\n5,7') === 13); 
console.log("Should be true if string is separated by any delimiter: ", calculator.add("//;\n1;2") === 3); 
console.log("Should be true if string is separated by any , where ':' is introduced as a new delimiter: ", calculator.add("//:\n1:2:5,7\n4") === 19); 

