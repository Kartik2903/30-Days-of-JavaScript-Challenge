const {add, person, PI, circumference}= require('./commonJS');  
const http = require('http')// Import the function
console.log(add(5, 3)); 
person.sayhello();
console.log('The value of pi is:',PI);
let circum=  circumference(5);
console.log(circum);

// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
//http request
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('<h1>Hello World</h1>');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 

//Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log(response.data);  // Logs the retrieved post
  })
  .then(response => {
    console.log(response.status); // 200
    console.log(response.headers); // Response headers
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

