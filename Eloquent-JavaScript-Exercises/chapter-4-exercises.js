// The sum of a range
// The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:
// console.log(sum(range(1, 10)));
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2]

function range(start, end, step = start < end ? 1 : -1) {
    const rangeArray = [];

    if (step > 0) { // increment version
        for (let i = start; i <= end; i += step) {
            rangeArray.push(i);
        }
    } else { // decrement version
        for (let i = start; i >= end; i += step) {
            rangeArray.push(i);
        }
    }

    return rangeArray
}

function sum(arr) {
    // assume elements in array are numbers
    let sumCounter = 0;
    for (let i = 0; i <= arr.length; i++) {
        sumCounter += i;
    }
    return sumCounter;
}

// Reversing an array
// Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
// Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?

function reverseArray(arr) {
    let reversedArray = [];
    for (let n of arr) {
        reversedArray.unshift(n);
    }
    return reversedArray;
}

function reverseArrayInPlace(arr) {
    // iterate over half the array
    for (let i =0; i < Math.floor(arr.length / 2); i++) {
        let startNum = arr[i];
        
        // swap the first and last element
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = startNum;
        // console.log(arr[i]);
        // console.log(arr[arr.length - 1 - i] )
    }
    return arr;
}

// A list
// Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.
// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.
// If you haven’t already, also write a recursive version of nth.

function arrayToList(arr) {
    let list = null;
    for (i = arr.length - 1; i >= 0; i--) {
        list = {value: arr[i], rest: list}
    }
    return list;
}

function listToArray(
    
) {
    let arr = [];
    // starting at the list, increment "up"/"deeper" by accessing rest within the list we are looking at, end when there are no more nested objects
    for (let obj = li; obj !== null; obj = obj.rest) {
        arr.push(obj.value);
    }
    return arr;
}

// Adds element as a value and list as rest
function prepend(value, li) {
    return {value, rest: li};
}

function nth(li, n) {
    if (!li) return undefined;

    // jump to next list item n times
    for (let i = 0; i < n; i++) {
        li = li.rest;
        if (li === null) return "ERROR: List does not have that many objects"
    }

    return li.value;
}

function nth(li, n) {
    // if there isn't a list (ie. most inner object/node)
    if (!li) 
        return undefined;
    else if(n === 0) 
        return li.value;
    else 
        return nth(li.rest, n - 1);
}

// Deep comparison
// The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.
// Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.
// To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".
// The Object.keys function will be useful when you need to go over the properties of objects to compare them.


function deepEqual(x, y) {
    // check if arguments are the same type (===)
    if (x === y) return true;
    
    // for both x and y: check for nulls (shouldn't be objects) if they're different type
    // check if type is not object
    // return false for these
    if (x === null || y === null || typeof x !== 'object' || typeof y !== 'object') return false;

    // check keys:
    let xKeys = Object.keys(x);
    let yKeys = Object.keys(y);
    // compare length of array of keys in object 1 and 2. return false if different length
    if (xKeys.length !== yKeys.length) return false;

    // check if the keys are the same
    for (let key of xKeys) {
        if (!yKeys.includes(key)) return false
    }

    // check values: loop through object 1's keys
    for (let key of xKeys) {
        // compare with values at key of object 1 with object 2 using deepEqual
        // return false if deepEqual returns a false
        if (!deepEqual(x[key], y[key]) return false;
    }
    return true
}