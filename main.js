//  Create the library Array
//EMPTY ARRARY
let library = [];
console.log(library)

//  Add Books to the Library
library.push({title: "The Great Gatsby", author: "F. Scott Fitzgerald", yearPublished: 1925, available: true});
library.push({title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960, available: true});
library.push({title: "1984", author: "George Orwell", yearPublished: 1949, available: false});
library.push({title: "Pride and Prejudice", author: "Jane Austen", yearPublished: 1813, available: true});
console.log(library)

//  Update the Availability of a Book
library[2].available = true;
console.log(library)

//  Remove a Book from the Library
library.splice(3, 1);
console.log(library)

//  Check if a Book is in the Library
let isGatsbyInLibrary = library.some(book => book.title === "The Great Gatsby");
console.log(isGatsbyInLibrary); // true

//  Borrow the First Book
library[0].available = false;
let borrowedBook = library.shift();
console.log(borrowedBook); // Display the borrowed book details

//  Add a New Book to the Start of the Library
library.unshift({title: "The Catcher in the Rye", author: "J.D. Salinger", yearPublished: 1951, available: true});

//  Get a List of All Book Titles
let bookTitles = library.map(book => book.title).join(", ");
console.log(bookTitles); // "The Catcher in the Rye, To Kill a Mockingbird, 1984"

//  Create a New Library Section
let newArrivals = library.slice(-2);
console.log(newArrivals);

// Final State and Outputs
console.log("Final library array:", library);
console.log("List of book titles:", bookTitles);
console.log("New arrivals section:", newArrivals);