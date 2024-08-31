// Day 11: Promises and Async/Await
// Tasks/Activities:
// Activity 1: Understanding Promises
// • Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console. 
// const promiseOne = new Promise((resolve, reject)=>{
//     setTimeout(function(){
//         console.log("This promise got resolved.")
//         resolve();
//     }, 2000)
// })

// promiseOne.then(()=>{
//     console.log("Promise consumed.")
// })

// //Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
// const promiseTwo = new Promise((resolve, reject)=>{setTimeout(()=>{
//     let err = true;
//     if(!err){
//         console.log('Promise sent')
//         resolve()
//     }
//     else{
//         reject('ERROR 404: Something went wrong!')
//     }
// }, 2000)
// })

// promiseTwo
// .then(()=>{
//     console.log('Promise consumed!')
// })
// .catch((error)=>{
//     console.log(error)
// })

// Activity 2: Chaining Promises
// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
// const promiseThree = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let err = false
//         if(!err){
//             resolve({name: "Kartik", pass: "123"})
//         }
//         else{
//             reject("ERROR 404: Something went wrong!")
//         }
//     }, 2000);
// })

// promiseThree.then((user)=>{
//     return user.name
// })
// .then(username => console.log("Username: ",username))
// .catch((error)=>{console.log(error);
// })

// promiseThree.then((user)=>{
//     return user.pass
// }).then((pass)=>{
//     console.log("Pass:", pass);
// })


// Activity 3: Using Async/Await
// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value. 
//Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
// let promiseFour = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let err = false
//         if(!err){
//             resolve({name: "Pankaj", pass: "123"})
//         }
//         else{
//             reject("ERROR 404: Something went wrong!")
//         }
//     }, 2000);
// })

// async function consumePromiseFour(){
//     try {
//         let response = await promiseFour
//     console.log(response); 
//     } catch (error) {
//         console.log(error)
//     }
    
// }
// consumePromiseFour()

// Activity 4: Fetching Data from an API
// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises. 
// async function getData(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     let data = await response.json()
//     console.log(data)
// }

// getData()


//Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res)=>{
//     return res.json()
// })
// .then((data)=>console.log(data))

// Activity 5: Concurrent Promises
// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.

const promiseSample1 = new Promise((resolve)=>{
    setTimeout(()=>resolve("Sample Promise 1 resolved"), 2000)
})
const promiseSample2 = new Promise((resolve)=>{
    setTimeout(()=>resolve("Sample Promise 2 resolved"), 2000)
})
const promiseSample3 = new Promise((resolve)=>{
    setTimeout(()=>resolve("Sample Promise 3 resolved"), 1000)
})

Promise.all([promiseSample1,promiseSample2,promiseSample3])
.then((val)=>{
    console.log(val);
})

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
Promise.race([promiseSample1,promiseSample2,promiseSample3])
.then((value)=>console.log(value))


// Feature Request:
// 1. Promise Creation Script: Write a script that demonstrates creating and handling promises, including both resolved and rejected states.
// 2. Promise Chaining Script: Create a script that chains multiple promises and logs messages in a specific sequence.
// 3. Async/Await Script: Write a script that uses async/await to handle promises and includes error handling with try-catch.
// 4. API Fetch Script: Create a script that fetches data from a public API using both promises and async/await, and logs the response data.
// 5. Concurrent Promises Script: Write a script that uses Promise.all and Promise.race to handle multiple promises concurrently and logs the results.