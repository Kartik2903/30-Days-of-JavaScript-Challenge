// Feature Request:
// 1. Number Printing Script: Write a script that prints numbers from 1 to 10 using a for loop and a while loop.
    console.log("For loop...")
    for (let i = 1; i <= 10; i++) {
        console.log(i);      
    }
    console.log("While loop...")
    let a=1;
    while (a<=10) {
        console.log(a);
        a++;
    }

// 2. Multiplication Table Script: Create a script that prints the multiplication table of 5 using a for loop.
    for(i=1;i<=10;i++){
        console.log(5, 'x', i, '=', (5*i))
    }

// 3. Pattern Printing Script: Write a script that prints a pattern of stars using nested loops.
for (let i = 0; i < 5; i++) {
    let star = ''
    for (let j = 0; j <= i; j++) {
            star+='*'
    }
    console.log(star);
}

// 4. Sum Calculation Script: Write a script that calculates the sum of numbers from 1 to 10 using a while loop.
    i=1;
    let sum =0;
    while(i<=10){
        sum += i;
        i++;
    }
    console.log("Sum of numbers from 1 to 10 is: ", sum)
    
// 5. Factorial Calculation Script: Create a script that calculates the factorial of a number using a do...while loop.
    let n=5, fact=1;
    do{
        fact*=n
        n--
    }while(n>0)
    console.log("factorial is : ",fact)