// Feature Request:
// 1. Template Literals Script: Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings.
    let Name= "Alex"
    let age = 20
    let city= 'London'
    const introduction = `Hello, my name is ${Name}. I am ${age} years old and I live in ${city}.`
    console.log(introduction);
    
    const message = `
  Dear ${Name},

  I hope this message finds you well. I wanted to let you know that we are having a special event in ${city} next month.
  It would be great if you could join us for the occasion.

  Best regards,
  The Team
`;
console.log(message);

// 2. Destructuring Script: Create a script that uses array and object destructuring to extract values and log them.
    const fruits = ['banana','apple','chikoo','berries','mango']
    var [fruit1,fruit2,...fruitzzz] = fruits;
    console.log(`
        This is fruit 1 :${fruit1},
        This is fruit 2 : ${fruit2},
        This is a bunch of fruits : ${fruitzzz}`);
    
    const person={
        [Name]:'Johnny',
        [age]: 29,
        [city]: 'Sydney',
        job: 'developer'
    }
    let {Name:personName} = person
    let {age:personAge}=person
    let {city:personCity}=person
    let {job:personJob}=person

    console.log(`${personName} is ${personAge} and lives in ${personCity} and works as a ${personJob}.`);
    
// 3. Spread and Rest Operators Script: Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments. 
    let arr1=[1,2,3]
    let arr2=[4,5,6]
    let arr3=[7,8,9]

    let Arr = [...arr1,...arr2,...arr3] //spread operator
    console.log('Combined Array:', Arr);

    function Arrsum(...num) { //rest operator
        let sum=0;
        num.forEach(e => {
            sum+=e;
        });

        return sum;
    }
    console.log(Arrsum(...Arr));

// 4. Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling it with different arguments.
    function product(a, b=1){
        return a*b;
    }
    console.log(product(2,5)) //with second parameter
    console.log(product(2))//without second parameter

// 5. Enhanced Object Literals Script: Write a serint that uses enhanced object literals to create and log an object with methods and computed property namos
let EmpName = "fullname"
let Empid = 'id'
let position = 'pos_in_company'
const Emp = {
    [EmpName]: "Sam",
    [Empid]: 101,
    [position]: 'Sales Executive'
}

console.log(person)