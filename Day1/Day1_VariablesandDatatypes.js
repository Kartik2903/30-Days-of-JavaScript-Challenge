/*Day 1: Variables and Data Types
Tasks/Activities:*/

//Activity 1: Variable Declaration

// Task 1-> Declare a variable using var, assign it a number and log the value to the console.
    var myNum = 10;
    console.log(myNum);

// Task 2-> Declare a variable using let, assign it a string and log the value to the console.
    let myString = "Hello World!";
    console.log(myString);

//Activity 2: Constant Declaration

//Task 3-> Declare a variable using const, assign it a boolean value and log the value to the console.
    const isTrue = true;
    console.log(isTrue);

//Activity 3: Data Types
//Task 4-> Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
    var num= 2;
    var string= "this is a string.";
    var bool= true;
    var myArr= [1,2,3];
    const fruit = {type:"pulpy", juicy:true, color: "red", taste:"sweet"};

    console.log(typeof(num))
    console.log(typeof(string))
    console.log(typeof(bool))
    console.log(typeof(myArr))
    console.log(typeof(fruit))

//Activity 4: Reassigning Variables
//Task 5-> Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
    let check = 29
    console.log(check)
    check=10
    console.log(check)

//Activity 5: Understanding const
//Task 6-> Try reassigning a variable declared with const and observe the error
    const checkConst= "This is a const"
    console.log(checkConst)
    checkConst="Checking if value reassigning or not"
    console.log(checkConst) //Assignment to Const error
    