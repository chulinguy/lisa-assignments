## Runtime Exercise 3: Designing algorithms and writing code
How would you solve the following problems? 
Can you think of an O(n^2), O(n log n), and O(n) solution to each problem?
If you have time, code one of the functions you thought of to solve the problem.


### Find the integer that occurs most frequently in an array
Examples: 
- `[1,4,5,4,2,2,4]` returns `4`

1. O(n^2)

```javascript
let most = 1;
let currentMostFrequent= 0;
let result;

function mostFrequent(arr) {
  // iterate over the array
  for (let i = 0; i < arr.length; i++) {
    // compare the current element with all other elements in the array. increment count by 1 if the element we're comparing to mathches, otherwise set most to the count of the current value and the result of the current number
    for (let j = i; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        currentMostFrequent++;
      }
      if (most < currentMostFrequent) {
        most = currentMostFrequent;
        result = arr[i]
      }
    }
    return result;
  }
 }
```

2. O(n log n)

```javascript

```

3. O (n)

```javascript
function mostFrequent(arr) {
  if (arr.length === 0) {
    return null;
  }
  
  // to track counts of each element
  let modeMap = {};
  // setting the default to be a count of 1 for the first element
  let maxElement = arr[0];
  let maxCount = 1;

  // iterate over array
  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];
    
    // if the element is not a key in modeMap, set the value to 1, otherwise increment value by 1
    if (!modeMap[elem]) {
      modeMap[elem] = 1;
    } else {
      modeMap[elem] += 1;
    }

    // if at this element the value is greater than the maxCount of the most frequently occuring number, set the maxElement to the current element, elem. Then set maxCount to the value in the map (the count of this element)
    if (modeMap[elem] > maxCount) {
      maxElement = elem;
      maxCount = modeMap[elem];
    }
  }
  
  // return the element with the highest count
  return maxElement;
}
```



### Write a function that takes an array of numbers and returns the greatest difference you can get by subtracting any two of those numbers.
Examples:
- `[1, 5, 3, 1, 15]` returns `14`

1. O(n^2)

```javascript
Find the greatest number in the array by using reduce array method.

Find the lowest number in the array by using reduce array method.

Find the difference between the two numbers
```

2. O(n log n)

```javascript

```

3. O (n)

```javascript

```



### Find the only element in an array that only occurs once
Examples:
- `[3,5,3,4,6,6,4]` returns `5`

1. O(n^2)

```javascript

```

2. O(n log n)

```javascript

```

3. O (n)

```javascript

```




### Find the common elements of 2 integer arrays
Examples:
- `([1,3,2,5], [3,9,8,1])` returns `[1, 3]`

1. O(n^2)

```javascript
Use a nested for loop. Check if an element in the first array is in the second array, if so, push into a resulting array
```

2. O(n log n)

```javascript

```

3. O (n)

```javascript

```




### Determine if 2 Strings are anagrams (use the same letters re-arranged)
Examples: 
- `("cat", "act")` returns `true`
- `("at", "tat")`  returns `false`
- `("cat", "dog")` returns `false`

1. O(n^2)

```javascript

```

2. O(n log n)

```javascript

```

3. O (n)

```javascript

```



### Check if a String is composed of all unique characters
Examples:
- `"banana"` returns `false`
- `"bacon"` returns `true`

1. O(n^2)

```javascript

```

2. O(n log n)

```javascript

```

3. O (n)

```javascript

```





Sources:
- https://www.reddit.com/r/cscareerquestions/comments/20ahfq/heres_a_pretty_big_list_of_programming_interview/
- http://blog.teamtreehouse.com/passing-google-interview-without-computer-science-degree
