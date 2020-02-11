// https://github.com/Techtonica/curriculum/blob/master/javascript/javascript-3.md

// A. Activity
// B. HackerRank Exercise
// C. Boolean Logic Exercises Quiz on Rithm School

// A. Activity: Movie Night Suppose 5 classmates are interested in going to see a movie together. There are some interesting dynamics between the people in this group, as described below:

// Priya will attend only if Ming goes.
// David loves popcorn and will go to the movies under any circumstance
// Alex will automatically go to the movies if David goes, and will automatically not go to the movies if David does not go
// Ming will not attend if David has already said he is attending and Ming will say yes if Priya says yes.
// Breanna loves to be around people and will only go if there are at least 2 others going

// Write a function called movieNight that takes in an array. The array must contain 3 strings, and each string must be one of the names shown above who are interested in going to the movies. And the array should include all the combinaton of three names out of five(total 10 possible array input). Write a body for the movieNight function, based on the "rules" associated with each of the names above, that returns an array of the people who will attend the movie. Your function should account for the logic necessary for all 5 people, so that no matter which names are given, the result will always be correct. (ie: Don't just code the logic for 3 of the names and pass those names in all the time.) In case there are multiple answer for a single triplet or input string display all the possible correct answer for that triplet.

function movieNight(arr) {
  let attending = [];
  // The array must contain 3 strings 
  if (arr.length !== 3) return "Please provide a string with 3 names";

  // use includes to check if the names above are in arr (each string must be one of the names shown above who are interested in going to the movies.)
  for (let i = 0; i < arr.length; i++) {
    const acceptableNames = ["David", "Alex", "Ming", "Priya", "Breanna"];
    if (!acceptableNames.includes(arr[i])){
      return "Please make sure all names are the names of the classmates";
    }
  }

  // David loves popcorn and will go to the movies under any circumstance
  // Alex will automatically go to the movies if David goes, and will automatically not go to the movies if David does not go
  if (arr.includes("David")) {
    attending.push("David");
    attending.push("Alex")
  }

  // Ming will not attend if David has already said he is attending
  // Priya will attend only if Ming goes.
  if (!attending.includes("David")) {
    attending.push("Ming");
    attending.push("Priya");
  }
  
  // Breanna loves to be around people and will only go if there are at least 2 others going
  if (attending.length >= 2) attending.push("Breanna");

  // return array of the people attending
  return attending;
}


console.log(movieNight(["Priya", "David", "Alex"]))
console.log(movieNight(["Priya", "David", "Ming"]));
console.log(movieNight(["Priya", "Breanna", "Alex"]));
console.log(movieNight(["Priya", "Breanna", "Ming"]));
console.log(movieNight(["Breanna", "Alex", "Ming"]));
console.log(movieNight(["David", "Breanna", "Alex"]))
console.log(movieNight(["David", "Alex", "Ming"]));
console.log(movieNight(["Alex", "Ming", "Priya"]));
console.log(movieNight(["David", "Breanna", "Ming"]));
console.log(movieNight(["Priya", "David", "Breanna"]));
console.log(movieNight(["Name1", "David", "Breanna"]));

// ['P', 'D', 'A'] = ['D', 'A', 'B']
// ['P', 'D', 'M'] = ['D', 'A', 'B']
// ['P', 'B', 'A'] = ['P', 'M', 'B']
// ['P', 'B', 'M'] = ['P', 'M', 'B']
// ['B', 'A', 'M'] = ['P', 'M', 'B']
// ['D', 'B', 'A'] = ['D', 'A', 'B']
// ['D', 'A', 'M'] = ['D', 'A', 'B']
// ['A', 'M', 'P'] = ['P', 'M', 'B']
// ['D', 'B', 'M'] = ['D', 'A', 'B']
// ['P', 'D', 'B'] = ['D', 'A', 'B']


// B. HackerRank Exercise
// https://www.hackerrank.com/challenges/js10-if-else/problem
// Complete the getGrade(score) function in the editor. It has one parameter: an integer, score, denoting the number of points Julia earned on an exam. It must return the letter corresponding to her  according to the following rules:
// 25 < score <= 30; grade = A
// 20 < score <= 25; grade = B
// 15 < score <= 20; grade = C
// 10 < score <= 15; grade = D
// 5 < score <= 10; grade = E
// 0 < score <= 5; grade = F

function getGrade(score) {
  let grade;
  if (25 < score && score <= 30) grade = 'A';
  if (20 < score && score <= 25) grade = 'B';
  if (15 < score && score <= 20) grade = 'C';
  if (10 < score && score <= 15) grade = 'D';
  if (5 < score && score <= 10) grade = 'E';
  if (0 < score && score <= 5) grade = 'F';
  return grade;
}

console.log(getGrade(11))


// C. Boolean Logic Exercises Quiz on Rithm School
//https://www.rithmschool.com/courses/javascript/introduction-to-javascript-boolean-exercises

//Part I
2 == "2"; // true
2 === 2; // true
10 % 3; // 1
10 % 3 === 1; // true
true && false; // false
false || true; // true
true || false; // true

// Part 3
if (Math.random() > 0.5) {
  console.log("Over 0.5")
} else {console.log("Over 0.5")
}

// falsey values in JS: 0, NaN, null, undefined, false, ""
// truthy values in JS: everything else that's not falsey