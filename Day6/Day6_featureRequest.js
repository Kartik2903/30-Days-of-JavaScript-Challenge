// Feature Request:
// 1. Array Manipulation Script: Write a script that demonstrates the creation of an array, adding and removing elements using push, pop, shift, and unshift methods.
let arr = [15,23,12,36,3]
console.log("Push method")
arr.push(6);
console.log(arr)

console.log("Pop method")
arr.pop()
console.log(arr)

console.log("Shift method")
arr.shift()
console.log(arr)

console.log("Unshift method")
arr.unshift(1)
console.log(arr)

// 2. Array Transformation Script: Create a script that uses map, filter, and reduce methods to transform and aggregate array data.
console.log("Map method")
let double= arr.map((e)=>e*2)
console.log(double)

console.log("Filter method")
let filtered= arr.filter((num)=>num%2==0)
console.log(filtered)

console.log("Reduce method")
const sum=arr.reduce((acc,cons) => acc+cons)
console.log(sum) 


// 3. Array Iteration Script: Write a script that iterates over an array using both for loop and forEach method and logs each element.

console.log("Logging array using for loop")
let arr1= ['a','b','c','d']
for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    console.log(element)
}

console.log("Logging array using forEach loop")
arr1.forEach(e => console.log(e))

// 4. Two-dimensional Array Script: Create a script that demonstrates the creation and manipulation of a two-dimensional array.
let matrix=[[1,2,3],[4,5,6],[7,8,9]]
    console.log('Original Matrix :',matrix)

    matrix[0][2] = 'X'
    console.log('Manipulated Matrix: ', matrix)
