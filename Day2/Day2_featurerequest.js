// Feature Request:
// Arithmetic Operator Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.
let num1= 50;
let num2= 40;
console.log(num1+num2)
console.log(num1-num2)
console.log(num1/num2)
console.log(num1*num2)
console.log(num1%num2)

// Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
if(num1 < num2 && num2 < num1/2)
    console.log(`${num1} is smaller than ${num2} and num2 is smaller than half of ${num1}`);
if(num1 < num2 || num2 < num1/2)
    console.log(`${num1} maybe or may not be smaller than ${num2} and num2 maybe or may not be smaller than half of ${num1}`);
if(num1 == num2)
    console.log(`${num1} is equal to ${num2}`);
if(num1 === num2)
    console.log(`${num1} is equal to ${num2} and the datatype is also same.`)
if(num1 != num2)
    console.log(`${num1} is not equal to ${num2}`);
if(num1 !== num2)
    console.log(`${num1} might be equal to ${num2} but the datatype is not same.`);
if(!(num1>num2))
    console.log(`Using the NOT operator, ${num2} is greater than or equal to ${num1}`);
    
// Ternary Operator: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
let num = 10;
let checkNegative=(num<0)?"Negative":"0 or positive";
console.log(checkNegative);
