/*
Compare the following pieces of code that have the same functionality.
For each function:
- How does it work?
- What is the runtime complexity of the function?
Which solution would be fastest for large input sizes?
*/


// The following 4 functions all look for duplicated elements in an array.
// For example, if the input is [5,2,4,5,4], the function should return [5,4] 
// because those elements are in the array twice.

// For large inputs, findDuplicatesB or findDuplicatesD would be the fastest

const findDuplicatesA = (array) => {
  const duplicated = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if (array[i] === array[j]) {
        duplicated.push(array[j]);
      }
    }
  }
  return duplicated;
}
// findDuplicatesA iterates over the array with a nested for loop starting from the first element. In the inner loop, it iterates over the rest of the array to see if it matches the element in the outer loop. The runtime complexity is O(n^2).

const findDuplicatesB = (array) => {
  const seen = new Set();
  const duplicates = new Set();
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (seen.has(value)) {
      duplicates.add(value);
    }
    seen.add(value);
  }
  return duplicates;
}

// findDuplicatesB iterates over the array once and adds the elements to the appropriate Set. The runtime complexity is O(n).

const findDuplicatesC = (array) => {
  array.sort();
  const duplicates = [];
  for (let i = 0; i < array.length - 1; i++) {
    const item = array[i];
    const nextItem = array[i + 1];
    if (item === nextItem) {
      duplicates.push(item);
    }
  }
  return duplicates;
}

// findDuplicatesC sorts the array using an array sorting method which is mergesort, O(n log n). Then it iterates over the entire array, O(n). The overall runtime is O(n log n) 

const findDuplicatesD = (array) => {
  const duplicated = [];
  const seen = [];
  for (let search = 0; search < array.length; search++) {
    const item = array[search];
    if (seen.indexOf(item) !== -1) {
      duplicated.push(item);
    }
    seen.push(item);
  }
  return duplicated;
}

// findDuplicatesD iterates over the entire array and pushes items into the appropriate array. The runtime is O(n).



// The following 3 functions all count how many times an item is in an array 
// and return a dictionary of the counts
// For example, if the input is [5,2,4,5,4,5], the function should return {5:3, 4:2, 2:1} 

// When the imput is large, countOccurencesC has the fastest runtime

const countOccurencesA = (array) => {
  const counts = {};
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (counts[item] === undefined) {
      let countForI = 0;
      for (let j = 0; j < array.length; j++) {
        if (array[j] === item) {
          countForI++;
        }
      }
      counts[item] = countForI;
    }
  }
  return counts;
}

// countOccurencesA iterates over an array and sets the element as a key if it's not in counts, then it iterates over the rest of the array through a nested for loop to see if the element appears again. The runtime complexity is O(n^2)

const countOccurencesB = (array) => {
  const counts = {};
  array.sort();
  let previousItem = undefined;
  let itemCount = 0;
  let currentItem;
  for (let i = 0; i < array.length; i++) {
    currentItem = array[i];
    if (currentItem === previousItem) {
      itemCount++;
    } else {
      counts[currentItem] = itemCount;
      previousItem = currentItem;
      itemCount = 1;
    }
  }
  counts[currentItem] = itemCount;
}

// countOccurencesB sorts the array O(n log n) and then iterates over the array O(n) to add properties (if the element isn't in counts) or increment the value. The runtime complexity is O(n log n)

const countOccurencesC = (array) => {
  const counts = {};
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (counts[item] === undefined) {
      counts[item] = 0;
    }
    counts[item] += 1;
  }
  return counts;
}

// countOccurencesC iterates over the array once and adds the element into counts if it's not there, otherwise increments the value. The runtime complexity is O(n)