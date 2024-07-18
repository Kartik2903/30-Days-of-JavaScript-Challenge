// Day 5: Functions
// Tasks/Activities:

// Activity 1: Function Declaration
// Task 1: Write a function to check if a number is even or odd and log the result to the console.
    let num=64;
    console.log(evenOdd(num)?"The number is Even": "The number is Odd")
    function evenOdd(num){
        if(num%2==0)
            return true;
        else
        return false;
    }
// Task 2: Write a function to calculate the square of a number and return the result.
    num=3;
    console.log(square(num))
    function square(num){
        return num * num;
        }

// Activity 2: Function Expression
// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
    const max = function (n1, n2){
        return (n1>n2)?`${n1} is max`: `${n2} is max`
    }

    console.log(max(54,34))
// Task 4: Write a function expression to concatenate two strings and return the result.
    const concat=function (str1, str2){
        let str=str1+' '+str2
        return str;
    }
    console.log(concat('Hello', 'world'))

// Activity 3: Arrow Functions
// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
    let sum = (a,b) => a+b;
    console.log(sum(10,30))

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
    const char= (str,sp) => {for(let i=0;i<=str.length;i++){
        if(str[i]===sp)
            return true;
    }
    return false;
    };
    console.log(char("This is a sentence."," "));

// Activity 4: Function Parameters and Default Values
// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
    const product =(a,b=5) => a*b
    console.log(product(20))
// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
    const greet = (Name, age=20) => {
        console.log("Hello ",Name, "! Your age is ",age ,". How are you?")
    }
    greet('Kartik')

// Activity 5: Higher-Order Functions
// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
console.log("Higher-order functions")
    function repeat(func,num){
        let i=1;
        while(i<=num){
            func()
            i++
        }
    }
    repeat(() => greet("X", 23), 4) 

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
    const applyFunction = (func1, func2, value)=>{
        let r1=func1(value)
        let r2=func2(r1)
        return r2
    }

    const double= (x) => x*2
    const cube =(x)=> x*x*x

    let value=5
    console.log(applyFunction(double, cube, value))