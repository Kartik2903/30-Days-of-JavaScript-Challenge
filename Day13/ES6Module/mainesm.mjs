import def_func,{add, person,PI,circumference} from "./es6modules.mjs"

def_func();

console.log(add(20,10));
person.sayhello()
console.log('Value of pi:', PI);
let circle = circumference(7)
console.log('The circumference of the circle i:',circle,'cm');

// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
import http from 'http'
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
import axios from 'axios'

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
    
    