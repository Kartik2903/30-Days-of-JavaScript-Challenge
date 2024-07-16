// Day 3: Control Structures
// Tasks/Activities:

// Activity 1: If-Else Statements
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console. 
    let num= 5;
    if(num > 0)
        console.log("positive")
    else if (num < 0)
        console.log("negative")
    else
        console.log("zero")

//Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
    let age = 18;
    if(age >=18) console.log("Eligible to vote")
    else console.log("not eligible")

// Activity 2: Nested If-Else Statements
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
    let a=10, b=40, c= 20;
    if(a>b){
        if(a>c)
            console.log(`${a} is largest`);
        else
            console.log(`${c} is largest`);
    }
    else {
        if(b>c) 
            console.log(`${b} is largest`); 
        else 
            console.log(`${c} is largest`);
    }
// Activity 3: Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
    let weekDay=4;
    switch (weekDay) {
        case 1:
            console.log("This is Monday")
            break;
        case 2: console.log("This is Tuesday")
            break;
        case 3: console.log("This is Wednesday") 
                break;
        case 4: console.log("This is Thursday")
            break;
        case 5: console.log("This is Friday")
            break;
        case 6: console.log("This is Saturday")
            break;
        case 7: console.log("This is Sunday")    
        default: console.log("Invalid day! Please enter between 1 and 7");
            break;
    }

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
    let marksOutOf100 = 76;
    switch (true) {
        case (marksOutOf100>90 && marksOutOf100<=100):
            console.log("A grade")
            break;
        case (marksOutOf100>75 && marksOutOf100<=90): console.log("B grade")
        break;
        case (marksOutOf100>60 && marksOutOf100<=75): console.log("C grade")
        break;
        case (marksOutOf100>45 && marksOutOf100<=60): console.log("D grade")
        break;
        case (marksOutOf100>30 && marksOutOf100<=45): console.log("E grade")
        break;
        case(marksOutOf100>=0 && marksOutOf100<=30): console.log("F grade")
        default: console.log("Marks are out of limit...")
           
    }

// Activity 4: Conditional (Ternary) Operator
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
    var number= 39;
    var result=(number%2==0)? `${number} is even`: `${number} is odd`;
    console.log(result)

// Activity 5: Combining Conditions
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
    var year=1840;
    if(year%4 == 0 && year%100 !== 0 || year%400 == 0)
        console.log(`${year} is a leap year.`)
    else console.log(`${year} is not a leap year.`)
