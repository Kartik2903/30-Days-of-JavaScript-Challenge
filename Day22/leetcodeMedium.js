// Day 22: LeetCode Medium
// Tasks/Activities:
// Activity 1: Add Two Numbers
// Task 1: Solve the "Add Two Numbers" problem on LeetCode.
// • Write a function that takes two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.
// • Create a few test cases with linked lists and log the sum as a linked list.

function ListNode(val, next = null){
    this.val = val
    this.next = next
}

function addTwoNumbers(l1,l2){
    //initialization
    let tempNode = new ListNode(0)
    let current = tempNode //pointer to tempNode
    let carry = 0

    // traversing both the lists till the last node
    while (l1!==null || l2!==null) {
        //get the values for the current nodes(or 0 is null)
        let val1 = (l1!==null)?l1.val:0
        let val2 = (l2!==null)?l2.val:0

        //calculate the sum
        let sum = val1 + val2 + carry
        carry = Math.floor(sum/10) //new carry

        //store the digit part in new node
        current.next = new ListNode(sum%10)

        //update the pointers
        current = current.next
        
        if(l1!==null) l1 = l1.next
        if(l2!==null) l2 = l2.next

        //if carry remaining, add new node at the end
        if(carry > 0){
            current.next = new ListNode(carry)
        }
        
        //return the list from the node next to tempnode
    }
    return tempNode.next
}
//testcase
let l1 = new ListNode(2,new ListNode(4, new ListNode(3))) //342
let l2 = new ListNode(3,new ListNode(5, new ListNode(9))) //953

let result = addTwoNumbers(l1,l2)
let printVal=''
while(result !== null){
    printVal += result.val; //expected output = 5921
    result = result.next
}
console.log(printVal);


// Activity 2: Longest Substring Without Repeating Characters
// Task 2: Solve the "Longest Substring Without Repeating Characters" problem on LeetCode.
// • Write a function that takes a string and returns the length of the longest substring without repeating characters.
// • Log the length for a few test cases, including edge cases.

function longestSubstr(str){
    //initialization
    const charset = new Set() // create a set to keep a record of duplicacy
    let start = 0 //start pointer
    let maxlength =0 

    for (let end = 0; end < str.length; end++) {
        let currchar = str[end]

        //discard the substring if the current character is already in the set. And move the start pointer 
        while(charset.has(currchar)){
            charset.delete(str[start])
            start++
        }
        //add the character in the set 
        charset.add(currchar)
        
        maxlength = Math.max(maxlength, end-start+1)
    }
    return maxlength
}
//testcase
console.log(longestSubstr("bubble"))
console.log(longestSubstr("abcdabdc"))
console.log(longestSubstr("rubber"))


// Activity 3: Container With Most Water
// Task 3: Solve the "Container With Most Water" problem on LeetCode.
// • Write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point. Find two lines that together with the x-aods form a container, such that the container holds the most water.
// • Log the maximum amount of water for a few test cases.

function containerWithMostWater(height){
    //initialization
    let left = 0
    let right = height.length-1
    let maxArea = 0

    //iteration
    while(left < right){
        maxArea = Math.max(maxArea, Math.min(height[left],height[right])*(right-left))

        if(height[left] <= height[right]){
            left++
        }
        else {right--}
    }
    return maxArea
}
console.log("Container With Most Water");

console.log(containerWithMostWater([1,8,6,2,5,4,8,3,7]));
console.log(containerWithMostWater([1,1]));
console.log(containerWithMostWater([1,4,3,2,2,5,3,1,2]));


// Activity 4: 3Sum
// Task 4: Solve the "3Sum " problem on LeetCode.
// • Write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero,
// • Log the triplets for a few test cases, including edge cases.

function threeSum(nums) {
    let result = []
    //sort with a method
    nums.sort((a,b)=>a-b) 
    
    /*This is a new sorting method. 
    If a - b returns a negative value, a is placed before b.
    If a - b returns zero, the order remains unchanged.
    If a - b returns a positive value, b is placed before a.*/

    for(let i=0;i<nums.length-2;i++){
        // Skip duplicate elements for the first number
        if(i>0 && nums[i]===nums[i-1]) continue;
        //i>0 will stop the condition to be check for the first element(otherwise it will be outofbound)
        
        let left = i+1  
        let right = nums.length-1

        do{ 
            if(nums[left]+nums[right] === -nums[i]){
                result.push([nums[i],nums[left],nums[right]]) //triplet found
                left++; //move any one pointer

                //skip duplicates for the left pointer
                while(left < right && nums[left]===nums[left-1]){
                    left++
                }
            }
            else if(nums[left]+nums[right] < -nums[i]){
                left++ //move toward greater element
            }
            else {
                right-- //move towards lesser element
            }

        }while(left<right) //once they point the same element loop ends
    }
    return result
}
//testcases
console.log(threeSum([-1, 0, 1, 2, -1, -4])); 
console.log(threeSum([0,0,0,0])); //[[0,0,0]] 


// Activity 5: Group Anagrams
// Task 5: Solve the "Group Anagrams" problem on LeetCode.
// • Write a function that takes an array of strings and groups anagrams together.
// • Log the grouped anagrams for a few test cases.

function groupAnagram(input){
    const group = new Map()

    for(let s of input){
        let count = Array(26).fill(0) //method to initialize an array with values

        for(c of s){
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1; 
        }
        
        const key = count.join(',') //converting array into a comma-seperated string
        
        //this is an important step
        if(!group.has(key)){
            group.set(key,[]);
        }
        group.get(key).push(s) //push the string in the map
    }
    return Array.from(group.values()) //return the values 
}

let input= ["eat","tea","tan","ate","nat","bat"]
console.log(`Group Anagram: ${JSON.stringify(groupAnagram(input))}`);
 


// Feature Request:
// 1. Add Two Numbers Script: Write a script that includes a function to solve the "Add Two Numbers" problem and logs the sum as a linked list.
// 2. Longest Substring Script: Create a script that includes a function to find the longest subistring without repeating characters and logs the length.
// 3. Container With Most Water Script: Write a script that includes a function to find the container with the most water and logs the maximum amount of water. 4. 35um Script: Create a script that includes a function to find all unique triplets in an array that sum to zero and logs the triplets.
// 5. Group Anagrams Script: Write a script that includes a function to group anagrams and logs the grouped anagrams.