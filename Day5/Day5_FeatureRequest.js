// Feature Request:
// 1. Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result.
    let num=64;
    console.log(evenOdd(num)?"The number is Even": "The number is Odd")
    function evenOdd(num){
        if(num%2==0)
            return true;
        else
        return false;
    }

// 2. Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result.
    function square(x){
        return x*x
    }
    let n=3
    console.log(square(n))
// 3. Concatenation Function Script: Write a script that includes a function expression to concatenate two strings and returns the result.
    const concat= function (str1, str2){return str1 +' '+str2}
    console.log(concat('Chai','Code'))

// 4. Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.
    const add=(a,b)=>{
        let res= a+b
        return res;
    }
    console.log(add(19,32))
    
// 5. Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times.
    const applyFunction = (func1, func2, value)=>{
        let r1=func1(value)
        let r2=func2(r1)
        return r2
    }

    const double= (x) => x*2
    const cube =(x)=> x*x*x

    let value=5
    console.log(applyFunction(double, cube, value))