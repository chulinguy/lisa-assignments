// https://github.com/Techtonica/curriculum/blob/master/javascript/javascript-4.md

// Activity 1 - Vacation Time!
// Write a function called printVacations whose input is an array of arrays. Each sub-array should have two strings as elements: The 0th element should be a person's name and the 1st element should be that person's most desired vacation destination. Include a minimum of 3 sub-arrays in your input array, like so:

let arr = [ ['Tammy', 'Tahiti'], ['Erin', 'Banff, Alberta, Canada'], ['Janet', 'London'] ]

// Your function should print each person's name and desired destination in a complete sentence, like this:

// Tammy really wants to go to Tahiti.
// Erin really wants to go to Banff, Alberta, Canada.
// Janet really wants to go to London.

function printVacations(arr) {
  for (let i = 0; i < arr.length; i++) {
      console.log(`${arr[i][0]} really wants to go to ${arr[i][1]}.`)
  }
}

printVacations(arr)


// Activity 2 - Vacation Choices
// Follow the prompt for Activity #1, but use this format for the input array instead:

let arr2 = [ ['Tammy', ['Tahiti', 'Bali', 'Hawaii']], ['Erin', ['Banff, Alberta, Canada', 'Iceland']], ['Janet', ['London', 'Hogwarts']] ]

// The output should look similar to this:

// Tammy is willing to go to Tahiti, Bali or Hawaii.
// Erin is willing to go to Banff, Alberta, Canada or Iceland.
// Janet is willing to go to London or Hogwarts.

function printVacations2(arr2) {
  for (let i = 0; i < arr2.length; i++) {
    let name = arr2[i][0];
    let locations = arr2[i][1];
    let locationPhrase = ''; 
    // console.log(name);
    // console.log(locations);
    for (let j = 0; j < locations.length; j++) {
      if (j === locations.length - 1) {
        locationPhrase += `or ${locations[j]}`;
      } else {
        locationPhrase += `${locations[j]} `;
      }
    }
  console.log(`${name} is willing to go to ${locationPhrase}.`)  
  }
}

printVacations2(arr2)


// Activity 3: Challenge
// Write a program in JavaScript to print Multiplication table of given number using for loop. Also try the program using while loop.
function multiplication(row, col) {
  let rowOfNum = '';
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col + 1; j++) {
      if (j > col) {
        //console.log('\n');
        if (i < row)
          rowOfNum += '\n';
      } else {
        //console.log(`${i * j} `);
        //console.log(i * j);
        rowOfNum += (i * j) + ' ';
        //console.log(rowOfNum)
      }
    }
  }

  return rowOfNum;
}

console.log(multiplication(3, 3));
// 1 2 3
// 2 4 6
// 3 6 9


// Activity 4: Check for understanding 
// Convert the given while loop to a for loop:
let ourArray = [];
let i = 0;
while(i < 5) {
ourArray.push(i);
i++;
}
console.log(ourArray);

let ourArray2 = [];
for (let i = 0; i < 5; i++) {
  ourArray2.push(i);
}
console.log(ourArray2);