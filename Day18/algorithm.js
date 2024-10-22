// Day 18: Algorithms
// Tasks/Activities:
// Activity 1: Sorting Algorithms
// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array. 

function bubbleSort(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
}
const array = [4,65,21,-3,56,89,1]
bubbleSort(array)
console.log("BubbleSort:" + array.join(","));


//Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function selectionSort(arr){
    for (let i = 0; i < arr.length -1; i++) {
        let min = i;
        for(let j=i;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min = j;
            }
        }
        [arr[i],arr[min]] = [arr[min],arr[i]]
    }
}
const array1 = [45,21,54,23,11,85,3]
selectionSort(array1)
console.log("Selection sort", array1);

// Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function quicksort(arr){
    if(arr.length <= 1){
        return arr
    }
    const pivot = arr[0];
    let left = [], right =[];

    for(let i=1;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    return [...quicksort(left),pivot,...quicksort(right)]
}

console.log(quicksort([8,5,1,9,10,2,4]));


// Activity 2: Searching Algorithms
// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.

let arr1 = [10,43,21,8,75,3]

function linearSearch(arr, target){
    let index = -1;
    arr.forEach((element,i)=>{
        if(element === target){
            index = i;
        }
    })
    return index
}

console.log(linearSearch(arr1, 75));

// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.

function binarySearch(arr, target){
    let start = 0, end = arr.length-1 
    
    while(start <= end){
        let mid = Math.floor((start+end)/2);

        if(arr[mid] === target){
            return mid
        }

        if(arr[mid] < target){
            start = mid+1
        }
        else{
            end = mid-1
        }
    }
    return -1
}

const arr2 = [30,53,65,79,81,84,94,102]
console.log(`Element found at index: ${binarySearch(arr2,53)}`);


// Activity 3: String Algorithms
// Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.

function countCharOccurences(str){
    const charCount ={}
    if(!str){
        console.log("There is nothing in the string.");
        
    }
    for (const char of str) {

        if(!charCount[char]){
            charCount[char] = 1
        }else{
            charCount[char]++
        }
    }

    for (const char in charCount) {
        console.log(`${char}:${charCount[char]}`);
    }
}

countCharOccurences("Occurence")

// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.

function longestSubstr(str){
    const charset = new Set();
    let start = 0
    let maxlength = 0

    for(let end = 0; end<str.length; end++){
        let currchar = str[end];

        while(charset.has(currchar)){
            charset.delete(str[start]);
            start++
        }

        charset.add(currchar)

        maxlength = Math.max(maxlength, end-start+1)
    }   
    console.log(`Length of the longest substring: ${maxlength}`);
    
}
longestSubstr("abcabcbb")


// Activity 4: Array Algorithms
// Task 8: Write a function to rotate an array by k positions. Log the rotated array.

function rotateArray(arr, k=0){
    let n = arr.length
    k = k % n

    if(k===0){
        console.log(arr);
    }

    let rotatedarray = arr.slice(-k).concat(arr.slice(0,n-k))

    console.log(rotatedarray);
    
}
rotateArray([1,2,3,4,5],2)

// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.

function mergesortedarrays(arr1,arr2){
    let p1=0,p2=0;
    let res = []
    while (p1!==arr1.length && p2!==arr2.length) { //OR(||)operator can't be used because if tone pointer reaches the end, it will point to null, which will be always smaller than the element in the 2nd array
        //while(p1 < arr1.length && p2 < arr2.length)
        if(arr1[p1] < arr2[p2]){
            res.push(arr1[p1])
            p1++
        }
        else if(arr2[p2] < arr1[p1]){
            res.push(arr2[p2])
            p2++
        }
    }
    //addremaining elements
    while(p1 < arr1.length){
        res.push(arr1[p1])
        p1++
    }
    while(p2 < arr2.length){
        res.push(arr2[p2])
        p2++
    }
    return res
}

console.log(mergesortedarrays([3,5,10,13,20],[1,7,9,11,21,50]));


// Activity 5: Dynamic Programming (Optional)
// Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers. 

function fibonacciDP(n){
    let fib = []
    fib[0] = 0
    fib[1] = 1

    for(let i = 2; i<=n; i++)
        fib[i] = fib[i-1] + fib[i-2]

    console.log(fib);
    
}

fibonacciDP(5)

//Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.

// function knapsack(wt,val,W,n){
//     if(n===0 || W===0) //base condition
//         return  0;  

//     if(wt[n-1] <= W)
//         return Math.max(val[n-1]+knapsack(wt,val,W-wt[n-1],n-1),knapsack(wt,val,W,n-1))

//     else if(wt[n-1] > W){
//         return knapsack(wt,val,W,n-1)
//     }
// }

//Memoization
function knapsack(wt,val,W,n){
    //creating the matrix
    let dp= new Array(n+1).fill(null).map(()=>new Array(W+1).fill(-1)); 

    if(n===0 || W===0) //base condition
        return  0;  

    //the lines for memoization
    if(dp[n][W] !== -1)
        return dp[n][W]


    if(wt[n-1] <= W)
        return dp[n][W]= Math.max(val[n-1]+knapsack(wt,val,W-wt[n-1],n-1),knapsack(wt,val,W,n-1))

    else if(wt[n-1] > W){
        return dp[n][W]= knapsack(wt,val,W,n-1)
    }
}

let wt = [1,3,4,5]
let val = [2,3,5,10]
let cap= 10
console.log("Max value gained:",knapsack(wt,val,cap,wt.length));


// Feature Request:
// 1. Sorting Algorithm Script: Write a script that implements bubble sort, selection sort, and quicksort algorithms to sort arrays. 2. Searching Algorithm Script: Create a script that implements linear search and binary search algorithms to find values in arrays.
// 3. String Algorithm Script: Write a script that counts character occurrences and finds the longest substring without repeating characters.
// 4. Array Algorithm Script: Create a script that rotates arrays and merges sorted arrays. 5.
// Dynamic Programming Script: Write a script that solves the Fibonacci sequence and knapsack problem using dynamic programming (optional).