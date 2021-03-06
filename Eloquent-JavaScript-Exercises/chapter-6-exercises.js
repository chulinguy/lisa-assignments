// A vector type
// Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.
// Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.
// Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(otherVec) {
        return new Vec(this.x + otherVec.x, this.y + otherVec.y);
    }

    minus(otherVec) {
        return new Vec(this.x - otherVec.x, this.y - otherVec.y);
    }

    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}

// Groups
// The standard JavaScript environment provides another data structure called Set. Like an instance of Map, a set holds a collection of values. Unlike Map, it does not associate other values with those—it just tracks which values are part of the set. A value can be part of a set only once—adding it again doesn’t have any effect.
// Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.
// Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.
// Give the class a static from method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.

class Group {
    constructor(){
        this.collection = [];
    }
    
    // add value if it isn't already in the collection
    add(value){
        if(!this.has(value)) {
            this.collection.push(value);
        }
    }

    // reassign collection to an array with value excluded
    delete(value){
        this.collection = this.collection.filter(val => val !== value)
    }

    // use includes array method to return boolean of whether collection has the value
    has(value){
        return this.collection.includes(value);
    }

    static from(collection) {
        let newGroup = new Group();
        for (let value of collection) {
            newGroup.add(value);
        }
        return newGroup;
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

// Iterable groups
// Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

class GroupIterator {
    constructor(group) {
      this.group = group;
      this.position = 0;
    }
    
    // if we reach the end of the array in group, done = true, otherwise, value is the item we are on in the array in the group. move position up one
    next() {
      if (this.position >= this.group.collection.length) {
        return {done: true};
      } else {
          let result = {
              value: this.group.collection[this.position],
              done: false,
          }
          this.position++;
          return result;
      }
    }
}
  
Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
};

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
// → a
// → b
// → c

// Borrowing a method
// Earlier in the chapter I mentioned that an object’s hasOwnProperty can be used as a more robust alternative to the in operator when you want to ignore the prototype’s properties. But what if your map needs to include the word "hasOwnProperty"? You won’t be able to call that method anymore because the object’s own property hides the method value.
let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
// console.log(map.hasOwnProperty("one"));
// → true
console.log(Object.prototype.hasOwnProperty.call(map, "one"))