// https://github.com/Techtonica/curriculum/blob/master/javascript/javascript-7-oop.md
class Borrower {
  constructor(id, firstName, middleInitial, lastName, phoneNumber) {
    this.id = id;
    this.firstName = firstName;
    this.middleInitial = middleInitial;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.libraryBooks = [];
  }

  checkOut(book) {
    this.libraryBooks.push(book);
    let borrowDate = new Date(); // the day the book was borrowed
    let dueDate = book.calculateDueDate(new Date()); // calculates the due date in ms
    dueDate = new Date(dueDate); // convert ms to date

    return `You borrowed the book on ${borrowDate}. The due date is ${dueDate}`;
  }

  getLastBook() {
    // name of first book is this.libraryBooks[0].title
    let lastBookBorrowedTitle = this.libraryBooks[this.libraryBooks.length - 1].title;
    return `The last book you borrowed is: ${lastBookBorrowedTitle}`;
  } 

  // favoriteAuthor() returns the author that the Borrower has borrowed the most books from
  favoriteAuthor() {
    // getting array of author names
    let authors = [];
    for (let book of books) {
        let authorName = book.authorFirstName + book.authorLastName;
        authors.push(authorName);
    }

    // find which author name shows up most frequently
    let countsofAuthor = {};
    let compare = 0;
    let mostFrequent;
    const mostFrequentAuthorFinder = function(authorArray){
      for(let i = 0; i < authorArray.length; i++){
          let authorToCompare = authorArray[i];

          if(countsofAuthor[authorToCompare] === undefined){
              countsofAuthor[authorToCompare] = 1;
          } else{
              countsofAuthor[authorToCompare] = countsofAuthor[authorToCompare] + 1;
          }
          if(countsofAuthor[authorToCompare] > compare){
                compare = countsofAuthor[authorToCompare];
                mostFrequent = authors[i];
          }
        }
      return mostFrequent;
    }
    mostFrequentAuthorFinder(authors);
    return `You favorite author is ${mostFrequent}`;
  }

  // returnBook(bookId) removes the book with the given ID from the Borrower's list of books
  returnBook(bookID) {
    // title of book we got from the book ID 
    let bookToReturn = this.libraryBooks.filter(book => book.id === bookID)[0].title;
    // console.log(bookToReturn[0].title)
    function notReturned(book) {
      return book.id !== bookID;
    }

    // filter the book we are keeping and exclude the one we return
    let newLibraryBooks = this.libraryBooks.filter(notReturned);

    return `You have returned ${bookToReturn}. Please check libraryBooks to see which books you are still borrowing`;
  }
}

class Book {
  constructor(id, title, authorFirstName, authorLastName) {
    this.id = id;
    this.title = title;
    this.authorFirstName = authorFirstName;
    this.authorLastName = authorLastName;
    this.renewalLimit = 5;
  }

  summary() {
    return this.title + " (" + this.authorLastName + ", " + this.authorFirstName + ")";
  }

  calculateDueDate(borrowedDate) {
    return borrowedDate.setDate(borrowedDate.getDate() + 21);  // 21 days is 3 weeks
  }
}

class AudioBook extends Book {
  constructor(id, title, authorFirstName, authorLastName, lengthInMinutes) {
    super(id, title, authorFirstName, authorLastName);
    this.lengthInMinutes = 90;
    this.renewalLimit = 1;
  }

  calculateDueDate(borrowedDate) {
    return borrowedDate.setDate(borrowedDate.getDate() + 14);  // 14 days is 2 weeks
  }
}

let books = [];
books[0] = new Book(12345, "Why Didn't They Ask Evans?", "Agatha", "Christie");
books[1] = new Book(12346, "The Long Goodbye", "Raymond", "Chandler");
books[2] = new Book(12347, "Decline and Fall", "Evelyn", "Waugh");
books[3] = new Book(12348, "Harry Potter 1", "J.K.", "Rowling");
books[4] = new Book(12349, "Not a Real Book", "Fake", "Name");
books[5] = new Book(12350, "Harry Potter 2", "J.K.", "Rowling");


let myAudioBook = new AudioBook(55234, "Principles of OO Design", "Barbara", "Liskov", 206);
let myAudioBook2 = new AudioBook(55235, "A Fake Book", "FirstName", "LastName", 500);

let BobPerson = new Borrower("1234568", "Bob", "", "Person", "(415)765-4321")
let MaryCrowley = new Borrower("1234567", "Mary", "E", "Crowley", "(555)123-4567");
MaryCrowley.checkOut(books[0]);
MaryCrowley.checkOut(books[1]);
MaryCrowley.checkOut(books[2]);
MaryCrowley.checkOut(books[3]);
MaryCrowley.checkOut(books[5]);
console.log(MaryCrowley.getLastBook());
console.log(MaryCrowley.libraryBooks);
console.log(MaryCrowley.favoriteAuthor());
console.log(MaryCrowley.returnBook(12346));
console.log(MaryCrowley.libraryBooks)

// Definitions:
// Namespace: a container which allows developers to bundle up functionality under a unique, application-specific name. In JavaScript a namespace is just another object containing methods, properties, and objects

// Hoisting: JavaScript's default behavior of moving declarations to the top of the current scope/function. Variables and constants declared with let or const are not hoisted! JavaScript only hoists declarations, not initializations.

// Arity or function.prototype.length: function.arity feature is obsolete. The arity property used to return the number of arguments expected by the function, however, it no longer exists and has been replaced by the Function.prototype.length property.

// Anonymous: creates a function with no name and immediately calls it.

// Closure: In JavaScript, closures are created every time a function is created, at function creation time. To use a closure, define a function inside another function and expose it. The inner function will have access to the variables in the outer function scope, even after the outer function has returned

// Currying: is a way of constructing functions that allows partial application of a function’s arguments. What this means is that you can pass all of the arguments a function is expecting and get the result, or pass a subset of those arguments and get a function back that’s waiting for the rest of the arguments. It allows you to generate a library of small, easily configured functions that behave consistently, are quick to use, and that can be understood when reading your code

// Pragma:  a compiler directive. It tells the compiler how it should handle the contents of a file. An example of this in JavaScript is 'use strict' mode. 'use strict' is a directive that enables JavaScript's Strict Mode, which is a way to opt in to a more restricted variant of JavaScript. It's sort of a hack to force modern interpreters to behave in a certain way, but without breaking older interpreters.

// Polymorphism: objects can share the same interface—how they are accessed and used—while their underlying implementation of the interface may differ

// Encapsulation: the practice of keeping all of the things necessary to interact with a class in a single place. For instance, by providing a set of methods on an object, you are exposing the actions that somebody might take on it. This will make it easier for others to use your code and give you the ability to prevent others from misuse. Encapsulation means that all the actions that we might take out on an object exist in one place.

// Inheritance: a way for objects to inherit properties and methods from other objects.

// Overriding happens when a subclass changes a value or behavior inherited from its parent class