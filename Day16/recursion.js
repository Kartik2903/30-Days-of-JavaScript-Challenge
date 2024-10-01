// Day 16: Recursion
// Tasks/Activities:
// Activity 1: Basic Recursion
// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

function factorial(n){
    if (n==1 || n==0) {
        return 1;
    }
    return n*factorial(n-1)
}

console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(15));

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

const fibonacci = function(n){
    //n = number of terms
    let n1 =0, n2=1, next
    console.log("Fibonacci Series:");
    
    for (let i = 0; i < n; i++) {
        console.log(n1, " ");
        next = n1+n2;
        n1=n2;
        n2=next;
    }
}

fibonacci(4)
fibonacci(6)
fibonacci(10)


// Activity 2: Recursion with Arrays
// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

function sumArray(arr){
    if(arr.length ==0){
        return 0
    }
    return arr[0] + sumArray(arr.slice(1))
}
console.log("Sum of all Array elements:")

console.log(sumArray([1,2,3,4,5,6]));
console.log(sumArray([10, 20, 30, 40, 100]));
console.log(sumArray([9,10, 2, 11]));

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

function maxelement(arr){
    let max = arr[0]

    for(let i=1;i<=arr.length;i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

console.log("Max Element is:", maxelement([20,30,1, 21,3]));
console.log("Max Element is:", maxelement([2,3,11,100,3,43]));
console.log("Max Element is:", maxelement([130,90,71]));


// Activity 3: String Manipulation with Recursion
// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.

function revStr(str){

    if(str.length === 1){
        return str.at(0)
    }
    return str.at(-1)+revStr(str.slice(0,str.length - 1))
}

console.log("Reversed String is:",revStr("ABC"));
console.log("Reversed String is:",revStr("This is an apple."));
console.log("Reversed String is:",revStr("madam"));

// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

function isPalindrome(str) {
    // Base case: if the string is empty or has one character, it's a palindrome
    if (str.length <= 1) {
        return true;
    }
    
    // Check the first and last characters
    if (str[0] !== str[str.length - 1]) {
        return false;
    }

    // Recursive call: check the substring without the first and last characters
    return isPalindrome(str.slice(1, -1));
}

// Test cases
console.log(isPalindrome("madam"));  
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));   
console.log(isPalindrome("level"));  
console.log(isPalindrome(""));       

// Activity 4: Recursive Search
// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.

function recursiveBinaraySearch(arr, find, start = 0, end = arr.length -1){
    if(start > end) return -1;

    const mid = Math.floor((start+end)/2);

    if(arr[mid]===find){
        return mid
    }
    else if(arr[mid] >find){
        return recursiveBinaraySearch(arr, find, start, mid-1) //left part
    }
    else if(arr[mid]< find){
        return recursiveBinaraySearch(arr, find, mid+1, end) //right part
    }
}

const testArray = [2,4,6,7,10,15,23,34,42]

console.log(`The Index of the element is:${recursiveBinaraySearch(testArray,4)}`);
console.log(`The Index of the element is:${recursiveBinaraySearch(testArray,23)}`);
console.log(`The Index of the element is:${recursiveBinaraySearch(testArray,84)}`);

// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.

function countElement(arr, target, index = 0) {
    if (index === arr.length) {
        return 0;
    }

    const match = arr[index] === target ? 1 : 0;
    return match + countElement(arr, target, index + 1);
}

const array = [1, 2, 3, 2, 4, 2, 5, 2];

console.log(countElement(array, 3));   
console.log(countElement(array, 6));   
console.log(countElement(array, 1));   
console.log(countElement(array, 2)); 
console.log(countElement([], 2));     


// Activity 5: Tree Traversal (Optional)
// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraversal(node) {
    if (node === null) {
        return;
    }

    // Traverse the left subtree
    inOrderTraversal(node.left);

    // Visit the root node
    console.log(node.value);

    // Traverse the right subtree
    inOrderTraversal(node.right);
}

function calculateDepth(node) {
        // Base case: if the node is null, the depth is 0
        if (node === null) {
            return 0;
        }
        // Recursively calculate the depth of the left and right subtrees
        const leftDepth = calculateDepth(node.left);
        const rightDepth = calculateDepth(node.right);
    
        // The depth of the tree is the larger of the two depths, plus 1 for the current node
        return Math.max(leftDepth, rightDepth) + 1;
    }


// Example Usage
const root = new Node(4);
root.left = new Node(2);
root.right = new Node(6);
root.left.left = new Node(1);
root.left.right = new Node(3);
root.right.left = new Node(5);
root.right.right = new Node(7);

inOrderTraversal(root);
//     4
//    / \
//   2   6
//  / \ / \
// 1  3 5  7

calculateDepth(root);


// Feature Request:
// 1. Factorial and Fibonacci Script: Write a script that includes recursive functions to calculate the factorial and Fibonacci numbers.
// 2. Array Recursion Script: Create a script that includes recursive functions to find the sum and maximum element of an array.
// 3. String Recursion Script: Write a script that includes recursive functions to reverse a string and check if a string is a palindrome.
// 4. Recursive Search Script: Create a script that includes recursive functions for binary search and counting occurrences in an array.
// 5. Tree Traversal Script: Write a script that includes recursive functions for in-order traversal and depth calculation of a binary tree (optional).