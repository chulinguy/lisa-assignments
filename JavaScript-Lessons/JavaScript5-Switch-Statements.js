// https://github.com/Techtonica/curriculum/blob/master/javascript/javascript-5.md

// Refer back to the calculator activity from the JavaScript 1 lesson. Refactor your code to replace your if/else statement(s) with switch statement(s).

function calculate(n1, operator, n2) {
  switch (operator) {
    default:
      return "Please provide correct operator";
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "/":
      return n1 / n2;
    case "%":
      return n1 % n2;
    case "^":
      return Math.pow(n1, n2);
    case "exp":
      return Math.pow(n1, n2);
  }
}

console.log(calculate(3, "+", 7)); // 10
console.log(calculate(2, "^", 4)); //16
console.log(calculate(2, "exp", 4)) // 16


// Refer back to the movie night activity from the JavaScript 3 lesson. Refactor your code to replace your if/else statement(s) with switch statement(s).

function movieNight(arr) {
  let attending = [];

  switch(true) {
    case arr.length !== 3:
      console.log("Provide an array with length 3");
      break;

    case arr.includes("David"):
      attending.push("David");
      attending.push("Alex");
      attending.push("Breanna");
      //console.log(attending);
      break;

    case arr.includes("Ming") || arr.includes("Priya"):
      attending.push("Ming");
      attending.push("Priya");
      attending.push("Breanna");
      //console.log(attending);
      break;
  }

  return attending;
}


console.log(movieNight(["Priya", "David", "Alex"]))
console.log(movieNight(["Priya", "David", "Ming"]));
console.log(movieNight(["David", "Breanna", "Alex"]))
console.log(movieNight(["David", "Alex", "Ming"]));
console.log(movieNight(["David", "Breanna", "Ming"]));
console.log(movieNight(["Priya", "David", "Breanna"]));
console.log('\n');
console.log(movieNight(["Priya", "Breanna", "Alex"]));
console.log(movieNight(["Priya", "Breanna", "Ming"]));
console.log(movieNight(["Breanna", "Alex", "Ming"]));
console.log(movieNight(["Alex", "Ming", "Priya"]));

// ['P', 'D', 'A'] = ['D', 'A', 'B']
// ['P', 'D', 'M'] = ['D', 'A', 'B']
// ['D', 'B', 'A'] = ['D', 'A', 'B']
// ['D', 'A', 'M'] = ['D', 'A', 'B']
// ['D', 'B', 'M'] = ['D', 'A', 'B']
// ['P', 'D', 'B'] = ['D', 'A', 'B']

// ['B', 'A', 'M'] = ['P', 'M', 'B']
// ['A', 'M', 'P'] = ['P', 'M', 'B']
// ['P', 'B', 'A'] = ['P', 'M', 'B']
// ['P', 'B', 'M'] = ['P', 'M', 'B']


// HackerRank switch exercise 1
// You are given a variable, . Your task is to print:

// - ONE, if  is equal to .
// - TWO, if  is equal to .
// - THREE, if  is equal to .
// - FOUR, if  is equal to .
// - FIVE, if  is equal to .
// - SIX, if  is equal to .
// - SEVEN, if  is equal to .
// - EIGHT, if  is equal to .
// - NINE, if  is equal to .
// - PLEASE TRY AGAIN, if  is none of the above.

function checkNum(num) {
  switch(num) {
    case 1:
      return "One";
      break;
    case 2:
      return "Two";
      break;
    case 3:
      return "Three";
      break;
    case 4:
      return "Four";
      break;
    case 5:
      return "Five";
      break;
    case 6:
      return "Six";
      break;
    case 7:
      return "Seven";
      break;
    case 8:
      return "Eight";
      break;
    case 9:
      return "Nine";
      break;
    default:
      return "Please Try Again";
      break;
  }
}

console.log(checkNum(1));
console.log(checkNum(10));

// HackerRank switch exercise 2
//Complete the getLetter(s) function in the editor. It has one parameter: a string, , consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:

// If the first character in string  is in the set , then return A.
// If the first character in string  is in the set , then return B.
// If the first character in string  is in the set , then return C.
// If the first character in string  is in the set , then return D.

function getLetter(s) {
  switch(true) {
    case 'aeiou'.includes(s[0]):
      console.log("A");
      break;
    case 'bcdfg'.includes(s[0]):
        console.log("B");
        break;
    case 'hjklm'.includes(s[0]):
        console.log("C");
        break;
    case 'npqrstvwxyz'.includes(s[0]):
        console.log("D");
        break;
    }
}

getLetter("apple");