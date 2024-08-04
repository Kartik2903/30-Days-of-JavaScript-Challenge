// Tasks/Activities:
// Activity 1: Template Litorals
// Task 1: Use template litorals to create a string that includes variables for a person's name and age, and log the string to the console.
    var name = "Kartik"
    var age= 20
    console.log(`Hello, My name is ${name} and I am ${age} years old.`);
    
// Task 2: Create a multi-line string using template literals and log it to the console.
    console.log(`Template literals are nothing 
        but backticks(\`\`)
        This multi-line string is also 
        written with template literals.`);
    

// Activity 2: Destructuring
// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console. 
    let arr = [12,3,32,56,31,21,78,65]
    let [a,b,,,,f]=arr 
    console.log(a);
    console.log(b);
    console.log(f);
    
//Task 4: the object destructuring to extract the title and author from a book object and log them to the console.
    const obj = {
        name: "XYZ",
        profession:"teacher",
        salary: 20000,
        joinDate:"20 April 2023"
    }

    const {name:Emp}=obj;
    console.log(Emp);
    const {profession:prof, salary} = obj;
    console.log(prof, salary);
    

// Activity 3: Spread and Rest Operators
// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additionat elements, and log the new array to the console.
    let arr1 = ['banana', 'soyabean', 'oats']
    let arr2 = ['berries', 'chia seeds', ...arr1, 'nuts', 'dates']
    console.log(arr2);
    
// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
    function sumUp(...args){
        let sum = 0;
        for (const i of args) {
            sum+=i;
        }
        return sum;
    }
console.log(sumUp(2, 3, 4, 6));

// Activity 4: Default Parameters
// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
    function product(a, b=1){
        return a*b;
    }
    console.log(product(2,5)) //with second parameter
    console.log(product(2))//without second parameter

// Activity 5: Enhanced Object Literals
// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
    let dogName = "Tuffy";
    let dogAge = 5;
    let color = "Brown"
    const bark = function(){
        console.log(`${this.dogName} says, Woof! Woof!`)
    }

    const Doggy = {dogName, dogAge, color, bark}
    Doggy.bark()

// Task 9: Create an object with computed property names based on variables and log the object to the console.
    let Name = "fullname"
    let Age = 'age'
    let profession = 'job'
    const person = {
        [Name]: "Kartik Dewnani",
        [Age]: 20,
        [profession]: 'Engineer'
    }

    console.log(person)

// Feature Request:
// 1. Template Literals Script: Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings.
// 2. Destructuring Script: Create a script that uses array and object destructuring to extract values and log them.
// 3. Spread and Rest Operators Script: Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments. 4.
// Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling it with different arguments.
// 5. Enhanced Object Literals Script: Write a serint that uses enhanced object literals to create and log an object with methods and computed property namos