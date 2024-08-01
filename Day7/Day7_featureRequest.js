// Feature Request:
// 1. Book Object Script: Write a script that creates a book object, adds methods to it, and logs its properties and method results.

const book ={
    title: "Man's Search for Meaning",
    author: "Viktor Franki",
    yearPublished: "1946",
    genre: "Biography",

    bookinfo: function() { return `${this.title} by ${this.author}, published in ${this.yearPublished}.`},

    logProperties: function() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Year Published: ${this.yearPublished}`);
        console.log(`Genre: ${this.genre}`);
    },

    logSummary: function (){
        console.log(this.bookinfo())
    }
};

    book.logProperties();
    book.logSummary();

// 2. Library Object Script: Create a script that defines a library object containing an array of book objects and logs the library's details.

// Define a book object using an object literal
function createBook(Title, Author, Year, Genre) {
    return {
        title: Title,
        author: Author,
        yearPublished: Year,
        genre: Genre,
        
        bookinfo: ()=> { `${this.title} by ${this.author}, published in ${this.yearPublished}.`},

        logProperties: function() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Year Published: ${this.yearPublished}`);
        console.log(`Genre: ${this.genre}`);
        },

        logBookInfo: ()=> {console.log(this.bookinfo())}
        };
}

// Create a library object
const library = {
    name: 'City Library',
    location: 'Main Street',
    books: [
        createBook('To Kill a Mockingbird', 'Harper Lee', 1960, 'Fiction'),
        createBook('1984', 'George Orwell', 1949, 'Dystopian'),
        createBook('Moby Dick', 'Herman Melville', 1851, 'Adventure')
    ],
    
    // Method to log the details of the library
    logDetails: function() {
        console.log(`Library Name: ${this.name}`);
        console.log(`Location: ${this.location}`);
        console.log('Books:');
        this.books.forEach(book => {
            book.logProperties();
            console.log('---');
        });
    }
};

// Log the details of the library
library.logDetails();

// 3. Object Iteration Script: Write a script that demonstrates iterating over an object's properties using for...in loop and Object.keys / Object.values.

// Iterating over object properties using for...in loop
console.log('Using for...in loop:');
for (let key in book) {
    if (book.hasOwnProperty(key)) { // To ensure it iterates only over own properties
        console.log(`${key}: ${book[key]}`);
    }
}

// Iterating over object properties using Object.keys
console.log('\nUsing Object.keys:');
Object.keys(book).forEach(key => {
    console.log(`${key}: ${book[key]}`);
});

// Iterating over object values using Object.values
console.log('\nUsing Object.values:');
Object.values(book).forEach(value => {
    console.log(value);
});

console.log('\nUsing Object.entries');
Object.entries(book).forEach(entry=>{console.log(entry)});

