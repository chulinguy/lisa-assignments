function fizzBuzz(i){
    // if multiple of 3 & 5
    if (i % 3 === 0 && i % 5 === 0){
      return "FizzBuzz";
    } 
    // if multiple of 3
    else if (i % 3 === 0){
      return "Fizz";
    } 
    // if multiple of 5
    else if (i % 5 === 0){
      return "Buzz";
    } 
    // else print number
    else {
      return i;
    }
}

function test() {
  console.log('hello world')
}

module.exports = {
  fizzBuzz,
  test
}

// Notes:
// normally this would just be sent as module.exports = fizzBuzz and import it to the test file as:
// const fizzBuzz = require('../src/fizzBuzz');

// You can also export this as an object with multiple functions/variables
// in the fizzBuzz.spec.js file, we can import the necessary functions with:
// const {fizzBuzz} = require('../src/fizzBuzz');
// destructuring allows us to get the fizzBuzz function inside the object with multiple properties
