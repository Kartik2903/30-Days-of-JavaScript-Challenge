// Day 7: Objects
// Tasks/Activities:

// Activity 1: Object Creation and Access
// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
    const book={
        Title: "The Fountainhead",
        Author: "Ayn Rand",
        Year: 1943
    }
    console.log("Object representing a book",book)

// Task 2: Access and log the title and author properties of the book object.
    
    console.log("Title: ",book.Title) //common way to print a property of an object
    console.log("Author: ",book["Author"]) // another useful way to print the property of an object

// Activity 2: Object Methods
// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
console.log("Creating and calling a method named info in book object");
    book.info = function (){
        console.log(`The book titled ${this.Title} is written by ${this.Author}`)
    }
    console.log(book.info())

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
console.log("Adding and calling a method named update year in book object");
    book.updateYear = function(year){
        this.Year = year
    }
    book.updateYear(1946)
    console.log(book)

// Activity 3: Nested Objects
// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
    console.log("Created a nested object representing a library:");
    const library = {
        name: 'Central Library',
        books: [
            { title: "To Kill a Mockingbird",
                author: "Harper Lee",
                year: 1960
            }, {title: "1984",
                author: "George Orwell",
                year: 1949
                },{title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                year: 1925
            }, {title: "Moby Dick",
                author: "Herman Melville",
                year: 1851}
        ],
    }
    console.log(library)

// Task 6: Access and log the name of the library and the titles of all the books in the library.
    console.log("Accessing and logging the name of the library and the titlesn of all the books in the library");
    console.log("The "+library.name+" has books:");
        for(let i=0; i<library.books.length;i++){
            console.log(library.books[i].title) ;
        }

// Activity 4: The this Keyword
// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
        console.log("Adding a method to the book object to return a string with the book's title and year:");
    library.bookInfo = function(){
        return this.books.map(book => `${book.title} (${book.year})`).join(', ');
    }
    console.log(library.bookInfo())

// Activity 5: Object Iteration
// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
    console.log("Using a for...in loop to iterate over the properties of the book object: ");
    for(let property in book){
        console.log(property,':',book[property]);
    }

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

    console.log("Keys",Object.keys(library));
    console.log("Values",Object.values(library));

