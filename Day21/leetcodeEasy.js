// Day 21: LeetCode Easy
// Tasks/Activities:

// Activity 1: Two Sum
// Task 1: Solve the "Two Sum" problem on LeetCode.
// • Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.

function twoSum(num, target){
    const numIndex = {}
    for(let i=0;i<num.length;i++){
        const complement = target - num[i]
        if(complement in numIndex){
            return [numIndex[complement],i]
        }
        numIndex[num[i]] = i;
    }
    return []
}

// • Log the indices for a few test cases.
console.log(twoSum([2,3,5,1,4],6));
console.log(twoSum([1,12,5,9,5],10));
console.log(twoSum([15,6,21,5,9,10],24));


// Activity 2: Reverse Integer
// Task 2: Solve the "Reverse Integer" problem on LeetCode.
// • Write a function that takes an integer and returns it with its digits reversed. Handle edge cases like negative numbers and numbers ending in zero.

function reverseInteger(num){
    let reverse = 0;
    const sign = num<0 ? -1:1 //storing sign (negative or positive)
    num = Math.abs(num) //removing the negative sign, making the digit absolute
    
    while(num!==0){
        let rem = num%10
        reverse = reverse*10 + rem
        num = Math.floor(num/10)
    }
    
    reverse *= sign  //putting back the sign
    return reverse
}

// • Log the reversed integers for a few test cases.
console.log(reverseInteger(231))
console.log(reverseInteger(-100))
console.log(reverseInteger(4321))

// Activity 3: Palindrome Number
// Task 3: Solve the "Palindrome Number" problem on LeetCode.
// • Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.

function palindromeNum(num){
    return (reverseInteger(num) === num) ? true: false
}
// • Log the result for a few test cases, including edge cases like negative numbers.
console.log(palindromeNum(323))
console.log(palindromeNum(123))
console.log(palindromeNum(-232))

// Activity 4: Merge Two Sorted Lists
// Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
// • Write a function that takes two sorted linked lists and returns a new sorted list by merging them.

//creating a list 
class ListNode{
    constructor(value){
        this.value = value
        this.next = null
    }
}

function mergeTwoLists(l1,l2){
    const mergedList = new ListNode(0) //temp list to return mergedlist
    let curr = mergedList //pointer

    while(l1 !== null && l2 !== null){
        if(l1.value <= l2.value){
            curr.next = l1
            l1 = l1.next
        }
        else{
            curr.next = l2
            l2 = l2.next
        }
        curr = curr.next
    }

    curr.next = l1 !== null ? l1 : l2 //linking remaining elements

    return mergedList.next
}

// • Create a few test cases with linked lists and log the merged list.

function createLinkedList(arr){
    let head = new ListNode(arr[0])
    let current = head
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i])
        current = current.next
    }
    return head
}

let l1 = createLinkedList([3,5,10,16,20])
let l2 = createLinkedList([1,4,14])

let mergedList = mergeTwoLists(l1,l2)

let result = []
while(mergedList){
    result.push(mergedList.value)
    mergedList = mergedList.next
}

console.log(result);


// Activity 5: Valid Parentheses
// Task 5: Solve the "Valid Parentheses problem on LeetCode.
// • Write a function that takes a string containing just the characters '(', ')', 'T. T. 'I' and 'J', and determines if the input string is valid.
// • A string is valid if open brackets are closed in the correct order.
// • Log the result for a few test cases.

function validParanthesis(str){
    const bracketMap ={
        ')':'(',
        ']':'[',
        '}':'{'
    }

    const stack =[]

    for(let char of str){
        //if the character is closing bracket
        if(bracketMap[char]){
            const top =stack.pop()

            if(bracketMap[char]!== top)
                return false
        }
        else{
            stack.push(char)
        }
    }

    return stack.length === 0
}

console.log(validParanthesis(")"));
console.log(validParanthesis("()[]{}"));  
console.log(validParanthesis("(]"));       
console.log(validParanthesis("([)]"));     
console.log(validParanthesis("{[]}"));    

// Feature Request:
// 1. Two Sum Script: Write a script that includes a function to solve the "Two Sum" problem and logs the indices of the two numbers.
// 2. Reverse Integer Script: Create a script that includes a function to reverse an integer and handles edge cases. 3. Palindrome Number Script: Write a script that includes a function to check if an integer is a palindrome and logs the result.
// 4. Merge Two Sorted Lists Script: Create a script that includes a function to merge two sorted linked lists and logs the merged list.
// 5. Valid Parentheses Script: Write a script that includes a function to check if a string of parentheses is valid and logs the result.