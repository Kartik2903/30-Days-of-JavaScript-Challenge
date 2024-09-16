// Activity 1: Creating and Exporting Modules
// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
export const add = (a, b) => {
    return a + b;
  };


// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
export const person = {
    name:'Kartik',
    age: 20,

    sayhello:function(){
          console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
      }
  }
  
// Activity 2: Named and Default Exports
// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
 export const PI = 3.14
 export const circumference = (r)=>{return(2*PI*r)}


 // Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
 export default function def_func(){
    console.log("This is a default export function.");
    
 }
 
 // Activity 3: Importing Entire Modules
 // Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
 
 //ALREADY DONE WITH PREVIOUS TASKS
 

// Activity 4: Using Third-Party Modules
// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
//IN mainscript

// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
//IN mainscript

// Activity 5: Module Bundling (Optional)
// • Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.