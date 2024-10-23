// Day 19: Regular Expressions
// Tasks/Activities:

// Activity 1: Basic Regular Expressions
// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.

const string =  "What is JavaScript? JavaScript is a lightweight, cross-platform, single-threaded, and interpreted compiled programming language. JavaScript is a weakly typed language (dynamically typed). JavaScript can be used for Client-side developments as well as Server-side developments. JavaScript is both an imperative and declarative type of language. JavaScript contains a standard library of objects, like Array, Date, and Math, and a core set of language elements like operators, control structures, and statements."

const regex = /(JavaScript)/gi

console.log(string.match(regex));

// Task 2: Write a regular expression to match all digits in a string. Log the matches

console.log("hello123world456".match(/\d/g));

// Activity 2: Character Classes and Quantifiers
// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.

const re = /(\b[A-Z]\w*)/g

console.log("Hello World, this is a String. aNd it contains case sensitive cHaRacteRs.".match(re));

// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.

const reg = /\d+/g
console.log("hello123, we are using 2432digits322_ in32234 betweeb342 these323sentences211".match(reg));

// Activity 3: Grouping and Capturing
// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g..(123) 456-7890). Log the captures.

const regexphone = /\((\d{3})\) (\d{3})-(\d{4})/
let phonenum = '(123) 456-7890'

const match = phonenum.match(regexphone)

if(match){
    const areaCode = match[0]
    const centralOfficeCode = match[2]
    const lineNumber = match[3]

    console.log(`Area Code: ${areaCode}`);
    console.log(`Central Office Code: ${centralOfficeCode}`);
    console.log(`Line Number: ${lineNumber}`);
}else {
    console.log("Invalid phone number format");
}

// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.

const email = "kartikdewnani56@gmail.com"
const regexemail = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
const res = email.match(regexemail)
if(res){
    console.log(`Username: ${res[1]}`);
    console.log(`Domain Name: ${res[2]}`);
}else{
    console.log("Invalid email format");
}

// Activity 4: Assertions and Boundaries
// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches. 

const regexbegin = /^this/g

console.log("Is this a string?".match(regexbegin));
console.log("this is a string.".match(regexbegin));

// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.

const regexend = /world$/g

console.log("Is the world real".match(regexend));
console.log("Its the dream world".match(regexend));

// Activity 5: Practical Applications
// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
const passwordparameter = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%*&?])[A-Za-z\d@#$%&*?]{8,}$/
const password = "helloWorlD@123"

if(password.match(passwordparameter)){
    console.log("Password is valid");
}else{
    console.log("Password is invalid");
}

// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.

const urlvalidator = /^(https?:\/\/)(www\.)?([a-zA-Z\d-]+\.)+[a-zA-Z]{2,6}(\/[\S]*)?$/
const url = "https://www.chess.com/learn"

if(url.match(urlvalidator)){
    console.log("Valid URL");
}else{
    console.log("Invalid URL");
}

// Feature Request:
// 1. Basic Regex Script: Write a script that uses regular expressions to match simple patterns and log the matches.
// 2. Character Classes and Quantifiers Script: Create a script that uses regular expressions to match words with specific characteristics and log the matches. 3
// . Grouping and Capturing Script: Write a script that uses regular expressions to capture parts of a string, such as phone numbers and email addresses, and log the captures. Assertions and Boundaries Script: Create a script that uses regular expressions to match words at specific positions in a string and log the matches.
// 4. 5. Validation Script: Write a script that uses regular expressions to validate passwords and URLs and log whether they are valid.