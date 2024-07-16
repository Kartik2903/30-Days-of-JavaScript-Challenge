// Feature Request:
// 1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
let integer = -23;
if(integer < 0) console.log("This is a negative number.")
    else if(integer > 0) console.log("This is a positive number.")
        else console.log("Zero is neither positive nor negative.")
// 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
let Eligible = 14;
if(Eligible >=18) console.log("You are Eligible")
    else console.log("You are not Eligible")

// 3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
weekDay=3;
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
    
}

// 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
marksOutOf100 = 76;
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

// 5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.
year=1840;
if(year%4 == 0 && year%100 !== 0 || year%400 == 0)
    console.log(`${year} is a leap year.`)
else console.log(`${year} is not a leap year.`)