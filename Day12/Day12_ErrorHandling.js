// Day 12: Error Handling
// Tasks/Activities:

// Activity 1: Basic Error Handling with Try-Catch
// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
let a= prompt("Enter first number")
let b= prompt("Enter second number")
if(isNaN(a) || isNaN(b)){
    throw TypeError("This data type is not allowed. Please enter a number.")
}
let sum = parseInt(a) + parseInt(b)
    function handleSumError(){
        try {
            console.log("The sum is ", sum)
        } catch (error) {
            console.error("Error occured.");
        }
    }
handleSumError()

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
if(b=== '0' || isNaN(b)){
    throw SyntaxError("Infinity Error, please change the denominator.")
} 
let division = parseInt(a)/parseInt(b)
function handleDenominatorError(){
    try{
        console.log("The answer is ", division);
    }
    catch(error){
        console.error("Infinite loop error")
    }
}
handleDenominatorError()

// Activity 2: Finally Block
// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
function executeScript(){
    try {
        console.log("Try block: Trying to execute code");
        let result = 10/0;
        if(isFinite(result)){
            console.log("The result is : ", result)
        }
        else {throw Error("The result is going out of range")}
    } catch (error) {
        console.error("Catch block: An error occured: ", error.message);
    }finally{
        console.log("Finally block: This will close the file, no matter what happens.");
    }
}
executeScript()

// Activity 3: Custom Error Objects
// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class customError extends Error {
    constructor(msg){
        super(msg)
        this.name = this.constructor.name;
    }
}

function getAge(){
    let age = prompt("Enter age: ")
    age = parseInt(age)
    if(age > 120) throw new customError("This is probably not true.");

    return "Age added!"
}

try {
    let age = getAge()
    console.log(age);

} catch (error) {
    if(error instanceof customError){
        console.error(`CustomError caught: ${error.message}`);
    }
    else{
        console.error(`Unexpected Error: ${error.message}`);
    }
} finally{
    console.log("Finally: Cleanup file");
}

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation falls. Handle the custom error using a try-catch block.

class emptyStringError extends Error{
    constructor(msg){
        super(msg)
        alert(msg)
    }
}

let userInput = prompt("Enter a string")
while(userInput === ""){
    try {
        if(userInput === ""){
            throw new emptyStringError("Please don't leave this empty.")
        }
        else console.log("The string: ", userInput)
    } catch (error) {
        console.log(`emptyStringError caught: ${error.message}`);
        userInput = prompt("Enter again")
    }
    
}

// Activity 4: Error Handling in Promises
// Task 6: Create a promise that randomly resolves or rejects. Use catch() to handle the rejection and log an appropriate message to the console. 
const randomNumber = Math.random()
const randomPromise = new Promise((resolve, reject)=>{
    if (randomNumber >= 0.5) {
        resolve("Success! The promise was resolved.")
    } else {
        reject("Failure! The promise was rejected.")
    }
})

randomPromise
.then((msg)=>{
    console.log(msg);
    console.log(randomNumber)
})
.catch((error)=>{
    console.error(error);
    console.log(randomNumber)
})

//Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
const samplePromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let err = false
        if(!err){
            console.log("Promise sent!")
            resolve("Promise resolved")
        }
        else{
            reject("ERROR 404: Something went wrong!")
        }
    }, 2000);
})

async function handleError(){
    try {
        let response = await samplePromise
        console.log(response);
        
    } catch (error) {
        console.error(error);    
    }
}
// Activity 5: Graceful Error Handling in Fetch
// Task 8: Use the fetch API to request data from an invalid URL and handle the error using catch(). Log an appropriate error message to the console. 
fetch('www.example.com')
.then((res)=>{
    if(res.ok){
        console.log('Promise sent')
        return res.json()
    }
    else{
        throw new Error("Error 404: URL not found!")
    }
})
.then((data)=>{console.log(data)})
.catch((error)=>{
    console.error('There was a problem with the fetch operation:',error.message)
})

//Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
async function getData(){
    try{
    const response = await fetch('https://invalidlk.com')
    if(!response.ok){
        throw new Error('URL issue')
    }
    let data = await response.json()
    console.log(data)
    }
    catch(error){
        console.error('There was a problem with the fetch operation', error.message);
        
    }
}

getData()

// Feature Request:
// 1. Basic Error Handling Script: Write a script that demonstrates basic error handling using try-catch and finally blocks. 2. Custom Error Script: Create a script that defines and throws custom errors, handling them with try-catch blocks.
// 3. Promise Error Handling Script: Write a script that handles errors in promises using catch() and try-catch within async functions.
// 4. Fetch Error Handling Script: Create a script that handles errors when using the fetch API to request data from invalid URLs.