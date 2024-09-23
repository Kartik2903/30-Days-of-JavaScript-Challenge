// Day 14: Classes
// Tasks/Activities:
// Activity 1: Class Definition

// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message. 
class Person {
    constructor(personName, age){
        this.name = personName
        this.age = age
        const parts = personName.split(' ');
        if (parts.length === 2) {
          this.firstName = parts[0];
          this.lastName = parts[1];
          } else {
              this.firstName = '';
              this.lastName = '';
              throw new Error("Please provide both first and last names.");
          }
    }

    get fullname(){ //task7
        return `${this.firstName} ${this.lastName}`
    }
    
    set fullname(newName){//task 8
        const parts = newName.split(' ')
        if (parts.length === 2){
            this.firstName = parts[0]
            this.lastName = parts[1]
        }else{
            throw new Error("Please provide both first and last names.")
        }
    }

    greet(){
        return `Hello there! I am ${this.name} and I am ${this.age} years old!`;
    }

    static message(){
        return "Welcome to the JavaScript Challenge Day 14!" //task 5
    }

}

const person1 = new Person("Divya Dewnani", 24)
console.log(person1.greet())

//Task 2: Add a method to the Person class that updates the age property and logs the updated age.
Person.prototype.updateAge= function(newAge){
    this.age = newAge
    console.log(`The updated age of ${this.name} is: ${this.age}`);
}

person1.updateAge(25)

// Activity 2: Class Inheritance
// Task 3: Define a class Student that extends the Person class. Add a property student Id and a method to return the student ID. Create an instance of the Student class and log the student ID. 

class Student extends Person{
    static studentCounter =0; // task 6
    constructor(personName, age){
        super(personName, age)
        this.studentID = `S${++Student.studentCounter}`
    }
    getStudentID(){
        return `My Student ID is: ${this.studentID}`
    }
}


const s1 = new Student('Sahil Sharma', 22)
const s2 = new Student('Manoj Beniwal', 23)

console.log(s1.getStudentID());
console.log(s2.getStudentID());

//Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
Student.prototype.greet = function(){
    return `${Person.prototype.greet.call(this)} ${this.getStudentID()}` //explicitly super keyword doesn't work
}
const s3 = new Student('Kartik Dewnani',20)
console.log(s1.greet()); 
 
// Activity 3: Static Methods and Properties
// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message. 
// Person.message= function(){
//     return "Welcome to the JavaScript Challenge Day 14!"
// }

console.log(Person.message());

//Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

//This property is already created.
console.log(`Total number of students: ${Student.studentCounter}`);

// Activity 4: Getters and Setters
// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter. 
//Task 8: Add a setter method to the Person class to update the name properties (firstName and LastName). Update the name using the setter and log the updated full name.

//already done in the Person class
console.log("Previous name of person1:",person1.fullname);
person1.fullname = "Simran Rathore"
console.log("Updated name of person1:",person1.fullname);


// Activity 5: Private Fields (Optional)
// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account{
    #balance
    constructor(accountHolder, initialBalance){
        this.accountHolder = accountHolder
        this.#balance = initialBalance
        console.log("New account created for", accountHolder);
        
    }
    deposit(amount){
        if(amount > 0){
            this.#balance += amount
            console.log(`Deposited:₹${amount}`);
        }
        else{
            console.log('Deposited amount must be positive.');
        }
    }

    withdraw(amount){
        if(amount >0 && amount <= this.#balance){
            this.#balance -= amount
            console.log(`Withdrew: ₹${amount}`);
        }
        else{
            console.log("Insufficient Balance.");
        }
    }

    getBalance(){
        return `Balance left: ₹${this.#balance}`
    }
}

// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.

const myAccount = new Account("Kartik", 1000)
console.log(myAccount.getBalance())
myAccount.deposit(500)
console.log(myAccount.getBalance())
myAccount.withdraw(200)
console.log(myAccount.getBalance())

// Feature Request:
// 1. Basic Class Script: Write a script that defines a Person class with properties and methods, creates instances, and logs messages. 2. Class Inheritance Script: Create a script that defines a Student class extending Person, overrides methods, and logs the results.
// 3. Static Methods and Properties Script: Write a script that demonstrates static methods and properties in classes.
// 4. Getters and Setters Script: Create a script that uses getters and setters in a class.
// 5. Private Fields Script: Write a script that defines a class with private fields and methods to manipulate these fields (optional).