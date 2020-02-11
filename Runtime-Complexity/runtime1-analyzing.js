/* 
Read the following functions. For each one, figure out:
- What does the function do? 
- Try to figure out the runtime -- O(1), O(log n), O(n), O(n log n), O(n^2), or O(2^n)
- Run the function with a few different input sizes and see how long it takes
- When the input size doubles, what happens to the time it takes to run?
*/


const mysteryFunction0 = function(array) {
  const myFavoriteNum = 7;
  for (i = 0; i < array.length; i++) {
    if (array[i] === myFavoriteNum) {
      return true;
    }
  }
  return false;
}

// mysteryFunction0 is O(n) because it iterates over the entire array

const mysteryFunction1 = function(array) {
  index = 4;
  return array[index];
}

// mysteryFunction1 is O(1) because it will always return the value of the array at index 4

var mysteryFunction2 = function(n) {
  let primes = []
  for (i = 2; i < n; i++) {
    let factorFound = false;
    for (j = 2; j < n; j++) {
      if (i % j === 0 && i !== j) {
        factorFound = true;
      }
    }
    if (!factorFound) {
      primes.push(i);
    }
  }
  return primes.length;
}

// mysteryFunction2 is 0(n^2) because there's a nested for loop

const mysteryFunction3 = function(array) {
  myLength = array.length;
  if (myLength % 2 == 0) {
    return "even length";
  } else {
    return "odd length";
  }
}

// mysteryFunction3 is 0(1) because there is only one operation performed

var mysteryFunction4 = function(string) {
  let eCount = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] === 'e') {
      eCount++;
    }
  }
  return eCount;
}

// mysteryFunction4 is O(n) because we are iterating over each character in a string

var mysteryFunction5 = function(array) {
  array.sort();
}

// mysteryFunction6 is O(n log n) since the sort method uses mergesort, O(n^2) if it's bubblesort

const mysteryFunction6 = function(dict, key) {
  var value = dict[key];
  return value;
}

// mysteryFunction6 is O(1) since this is finding an index in an array 

const mysteryFunction7 = function(array) {
  // Assume `array` is an array of ints sorted from smallest to biggest
  const lookingFor = 9;
  let lowerBound = 0;
  let upperBound = array.length - 1;
  let guessIndex = Math.floor(upperBound / 2);
  while (lowerBound <= upperBound) {
    if (array[guessIndex] === lookingFor) {
      return true;
    } else if (lookingFor < array[guessIndex]) {
      upperBound = guessIndex - 1;
    } else {
      lowerBound = guessIndex + 1;
    }
    guessIndex = Math.floor((lowerBound + upperBound) / 2);
  }
  return false;
}

// mysteryFunction7 is O(n) since it can go through the entire array

const mysteryFunction8 = function(dictionary) {
  for(var key in dictionary) {
    var value = dictionary[key];
    if (key == value) {
      return true;
    }
    return false;
  }
}

// mysteryFunction8 is O(n) since it can iterate over the entire dictionary