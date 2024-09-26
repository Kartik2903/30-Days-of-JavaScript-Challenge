// Day 15: Closures
// Tasks/Activities:
// Activity 1: Understanding Closures
// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

    function outer(){
        let str = "This string is being accessed by the inner function"
        return function(){
            console.log(str);  
        }
    }

    let funcall = outer()

//Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

    function pvtCounter(){
        let counter = 1
        function increment(){
            counter++
        }
        function currValue(){
            console.log(counter);
        }

        increment()
        currValue()
    }

    pvtCounter()

// Activity 2: Practical Closures
// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function createIdGenerator() {
    let lastId = 100; 
    return function() {
        // lastId += 1;
        return lastId++;
    };
}

const generateId = createIdGenerator();

console.log(generateId()); 
console.log(generateId()); 
console.log(generateId()); 


// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

function createGreet(name){
    return function(){
        return `Hello, ${name}`
    }
}

const greetAlia = createGreet("Alia")
const greetDanny = createGreet("Danny")

console.log(greetAlia());
console.log(greetDanny());

// Activity 3: Closures in Loops
// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

const functionsArray = [];

for (let i = 0; i < 5; i++) {
    functionsArray[i] = function() {
        console.log(`Index: ${i}`);
    };
}

// Calling each function to log the index
functionsArray.forEach((func) => func()); //func is the element(functions) in the functionsArray

// Activity 4: Module Pattern
// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

const itemManager = (function() {
    // Private collection of items
    let items = [];

    return {
        // Method to add an item
        addItem: function(item) {
            items.push(item);
            console.log(`${item} added.`);
        },

        // Method to remove an item
        removeItem: function(item) {
            const index = items.indexOf(item);
            if (index !== -1) {
                items.splice(index, 1);
                console.log(`${item} removed.`);
            } else {
                console.log(`${item} not found.`);
            }
        },

        // Method to list all items
        listItems: function() {
            console.log("Items in collection:", items);
        }
    };
})(); //IIFE

// Using the itemManager module
itemManager.addItem("Apple");
itemManager.addItem("Banana");
itemManager.listItems();  
itemManager.removeItem("Banana");
itemManager.listItems();  


// Activity 5: Memoization
// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

function memoize(func) {
    const cache = {};  // Cache to store results of previous computations

    return function(...args) {
        const key = JSON.stringify(args);  // Create a unique key for the arguments
        if (cache[key]) {
            console.log(`Returning cached result for ${key}`);
            return cache[key];  // Return the cached result if it exists
        }
        const result = func(...args);  // Call the original function if result is not cached
        cache[key] = result;  // Store the result in cache
        return result;
    };
}

function square(n){
    console.log(`The square of ${n} is:${n*n}`);
}

let memoizedSquare = memoize(square)
memoizedSquare(4)//calculated
memoizedSquare(4)//cached
memoizedSquare(6)//calculated
memoizedSquare(6)//cached


// Task 8: Create a memoized version of a function that calculates the factorial of a number.

function memoizedFactorial() {
    const cache = {};  // Store previously computed results

    function factorial(n) {
        if (n in cache) {
            return cache[n];  // Return cached result if available
        }
        if (n == 1 || n==0) {
            cache[n] = 1
            return 1;
        }
        cache[n] = n * factorial(n-1)  // Store result in cache
        return cache[n];
    }

    return factorial;
}

const fact = memoizedFactorial();
console.log(fact(4));  // Much faster, due to memoization


// Feature Request:
// 1. Basic Closure Script: Write a script that demonstrates a basic closure with a function returning another function that accesses the outer function's variable. 2.
// Counter Closure Script: Create a script that uses a closure to maintain a private counter with increment and get functions.
// 3. Unique ID Generator Script: Write a script that generates unique IDs using a closure to keep track of the last generated ID. 4. Loop Closure Script: Create a script that demonstrates closures in loops to ensure functions log the correct index.
// 5. Memoization Script: Write a script that memoizes the results of a function and demonstrates it with a factorial calculation.