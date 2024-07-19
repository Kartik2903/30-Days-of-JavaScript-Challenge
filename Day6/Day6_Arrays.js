// Day 6: Arrays
// Tasks/Activities:

// Activity 1: Array Creation and Access
// • Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
    let arr= [1,2,3,4,5]
    console.log(arr)

// • Task 2: Access the first and last elements of the array and log them to the console.
    console.log(arr[0])
    console.log(arr[arr.length-1])

// Activity 2: Array Methods (Basic)
// • Task 3: Use the push method to add a new number to the end of the array and log the updated array.
    console.log("After pushing a new element")
    arr.push(6);
    console.log(arr)

// • Task 4: Use the pop method to remove the last element from the array and log the updated array.
    console.log("After removing the last element")
    arr.pop()
    console.log(arr)

// • Task 5: Use the shift method to remove the first element from the array and log the updated array.
    console.log("Shift method")
    arr.shift()
    console.log(arr)

// • Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
    console.log("Unshift method")
    arr.unshift()
    console.log(arr)

// Activity 3: Array Methods (Intermediate)
// • Task 7: Use the map method to create a new array where each number is doubled and log the new array.
    console.log("Map method")
    let double= arr.map((e)=>e*2)
    console.log(double)

// • Task 8: Use the filter method to create a new array with only even numbers and log the new array.
    console.log("Filter method")
    let filtered= arr.filter((num)=>num%2==0)
    console.log(filtered)

// • Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
    console.log("Reduce method")
    const sum=arr.reduce((acc,cons) => acc+cons)
    console.log(sum) 

// Activity 4: Array Iteration
// • Task 10: Use a for loop to iterate over the array and log each element to the console.
    console.log("Logging array using for loop")
    let arr1= ['a','e','i','o','u']
    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];
        console.log(element)
    }

// • Task 11: Use the forEach method to iterate over the array and log each element to the console.
    console.log("Logging array using forEach loop")
    arr1.forEach(e => console.log(e))

// Activity 5: Multi-dimensional Arrays
// • Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
    let matrix=[[1,2,3],[4,5,6],[7,8,9]]
    console.log(matrix)

// • Task 13: Access and log a specific element from the two-dimensional array.
    console.log(matrix[2][1])


