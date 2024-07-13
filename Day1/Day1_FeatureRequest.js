/*Feature Request
1. Variable Types Console Log: write a script that declares variables of different data types and logs both the value and type of each variable to the console.
2. Reassigning Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
*/

//Variable Types Console Log
var myNum = 8;
let myString="this is a string"
let decimal=3.14;
let noNum= NaN;
let isTrue=false;

const myArr=[43, 5, 'Let us see'];
const Car={type:"sedan", color:"blue"};

console.log(`Value: ${myNum}, Datatype: ${typeof(myNum)}`)
console.log(`Value: ${myString}, Datatype: ${typeof(myString)}`)
console.log(`Value: ${decimal}, Datatype: ${typeof(decimal)}`)
console.log(`Value: ${noNum}, Datatype: ${typeof(noNum)}`)
console.log(`Value: ${isTrue}, Datatype: ${typeof(isTrue)}`)
console.log(`Value: ${myArr}, Datatype: ${typeof(myArr)}`)
console.log(`Value: ${Car}, Datatype: ${typeof(Car)}`)

//Reassigning Demo
let myInt = 10;
const myConst= "this is a constant";
console.log(myInt);
console.log(myConst);
myInt= 100;
myConst="this is reassigning";
console.log(myInt);
console.log(myConst); //throws error