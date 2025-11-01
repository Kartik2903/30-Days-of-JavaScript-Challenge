// Day 23: LeetCode Hard
// Tasks/Activities:
// Activity 1: Median of Two Sorted Arrays
// Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.
// Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
// Log the median for a fow test cases, including edge cases.

function findMedianSortedArrays(arr1,arr2){
    //swap the arrays if arr1 is larger than arr2
    if(arr1.length > arr2.length)
        [arr1,arr2] = [arr2,arr1] 
    
    const n1 = arr1.length, n2 = arr2.length 
    let lo =0, hi= n1 //pointers for binary search on arr1 only

    while(lo<=hi){
        //define partitions
        let mid1 = lo + Math.floor((hi-lo)/2)
        let mid2 = Math.floor((n1+n2)/2)-mid1 //pointers on arr2 are conceptual and depend solely on the pointers of arr1

        //defining the variables for conditions
        let l1 = mid1===0?Number.NEGATIVE_INFINITY:arr1[mid1-1],
        l2 =mid2===0?Number.NEGATIVE_INFINITY:arr2[mid2-1],
        r1 = mid1===n1?Number.POSITIVE_INFINITY:arr1[mid1], 
        r2 = mid2===n2?Number.POSITIVE_INFINITY:arr2[mid2]
        
        
        //Ideal conditions
        //l1<r2
        //l2<r1
        if(l1>r2){
            hi = mid1-1 //shifting to the smaller side
            // console.log("hi",hi);
            
        }
        else if(l2>r1){
            lo = mid1+1 //shifting to the greater side
            // console.log("lo",lo);
            
        }
        else{
            return ((n1+n2)%2==0)? (Math.max(l1,l2)+Math.min(r1,r2))/2 : Math.min(r1,r2) //median returned
        }
    }
}

console.log(findMedianSortedArrays([1,5,6,7],[3,8]));
console.log(findMedianSortedArrays([1,5,8,10,18,20],[2,3,6,7]));



// Activity 2: Merge k Sorted Lists
// Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode.
// Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked lists into one sorted linked list.
// Create a few test cases with linked lists and log the merged list.



// Activity 3: Trapping Rain Water
// Task 3: Solve the "Trapping Rain Water" problem on LeetCode.
// Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining. Log the amount of trapped water for a few test cases.



// Activity 4: N-Queens
// Task 4: Solve the "N-Queens problem on LeetCode.
// Write a function that places n queens on an nin chessboard such that no two queens attack each other, and returns all distinct solutions to the n-queens puzzle. Log the distinct solutions for a few test cases.



// Activity 5: Word Ladder
// Task 5: Solve the "Word Ladder" problem on LeetCode.
// Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence from the begin word to the end word, such that only one letter can be changed at a time and each transformed word must exist in the word list.
// Log the length of the shortest transformation sequence for a few test cases.





// Feature Request:
// 1. Median of Two Sorted Arrays Script: Write a script that includes a function to find the median of two sorted arrays and logs the median.
// 2. Merge k Sorted Lists Script: Create a script that includes a function to merge k sorted linked lists and logs the merged list. 3. Trapping Rain Water Script: Write a script that includes a function to calculate the amount of trapped rainwater and logs the result.
// 4. N-Queens Script: Create a script that includes a function to solve the N-Queens problem and logs the distinct solutions.
// 5. Word Ladder Script: Write a script that includes a furiction to find the shortest transformation sequence in a word ladder and toes the sequence length.