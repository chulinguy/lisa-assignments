# Jasmine Pair Activity

### Summary

Implemented a function called invert.

Creates an object composed of the inverted keys and values of object. If object contains duplicate values, subsequent values overwrite property assignments of previous values.

var object = { 'a': 1, 'b': 2, 'c': 1 };

invert(object);

// => { '1': 'c', '2': 'b' }

Implemented this function and then created Jasmine tests to verify its 

correctness. 

### Installing Jasmine

To install globally:

```bash
npm install -g jasmine
npm init --yes
```

OR

To install locally:

```bash
npm init --yes
npm install --save-dev jasmine
node node_modules/jasmine/bin/jasmine init
```



### Notes

Paired with Cadence Chen on this Jasmine test exercise.