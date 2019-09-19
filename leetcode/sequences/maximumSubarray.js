// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.


// Kadane’s Algorithm:

// Initialize:
//     max_so_far = 0
//     max_ending_here = 0

// Loop for each element of the array
//   (a) max_ending_here = max_ending_here + a[i]
//   (b) if(max_ending_here < 0)
//             max_ending_here = 0
//   (c) if(max_so_far < max_ending_here)
//             max_so_far = max_ending_here
// return max_so_far

// Explanation:
// Simple idea of the Kadane’s algorithm is to look for all positive contiguous segments of the array (max_ending_here is used for this).
// And keep track of maximum sum contiguous segment among all positive segments (max_so_far is used for this).
// Each time we get a positive sum compare it with max_so_far and update max_so_far if it is greater than max_so_far

//     Lets take the example:
//     {-2, -3, 4, -1, -2, 1, 5, -3}

//     max_so_far = max_ending_here = 0

//     for i=0,  a[0] =  -2
//     max_ending_here = max_ending_here + (-2)
//     Set max_ending_here = 0 because max_ending_here < 0

//     for i=1,  a[1] =  -3
//     max_ending_here = max_ending_here + (-3)
//     Set max_ending_here = 0 because max_ending_here < 0

//     for i=2,  a[2] =  4
//     max_ending_here = max_ending_here + (4)
//     max_ending_here = 4
//     max_so_far is updated to 4 because max_ending_here greater
//     than max_so_far which was 0 till now

//     for i=3,  a[3] =  -1
//     max_ending_here = max_ending_here + (-1)
//     max_ending_here = 3

//     for i=4,  a[4] =  -2
//     max_ending_here = max_ending_here + (-2)
//     max_ending_here = 1

//     for i=5,  a[5] =  1
//     max_ending_here = max_ending_here + (1)
//     max_ending_here = 2

//     for i=6,  a[6] =  5
//     max_ending_here = max_ending_here + (5)
//     max_ending_here = 7
//     max_so_far is updated to 7 because max_ending_here is
//     greater than max_so_far

//     for i=7,  a[7] =  -3
//     max_ending_here = max_ending_here + (-3)
//     max_ending_here = 4

function maximumSubarray(arr) {
    let maxSoFar = -Infinity;
    let maxEndingHere = 0;

    for (const num of arr) {
        maxEndingHere = maxEndingHere + num;
        if (maxSoFar < maxEndingHere) {
            maxSoFar = maxEndingHere;
        }
        if (maxEndingHere < 0) {
            maxEndingHere = 0;
        }
    }
    return maxSoFar;
}

console.log(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maximumSubarray([-2, -3, 4, -1, -2, 1, 5, -3])); // 7

function maximumSubarrayOptimized(arr) {
    let maxSoFar = 0;
    let maxEndingHere = 0;

    for (const num of arr) {
        maxEndingHere = maxEndingHere + num;
        if (maxEndingHere < 0) {
            maxEndingHere = 0;
        } else if (maxSoFar < maxEndingHere) { // compare only when maxEndingHere > 0
            maxSoFar = maxEndingHere;
        }
    }
    return maxSoFar;
}

console.log('O(n) optimized => ', maximumSubarrayOptimized([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log('O(n) optimized => ', maximumSubarrayOptimized([-2, -3, 4, -1, -2, 1, 5, -3])); // 7

// catches negative numbers
function maximumSubarrayOptimized2(arr) {
    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let num = arr[i];
        maxEndingHere = Math.max(num, maxEndingHere + num);
        maxSoFar = Math.max(maxEndingHere, maxSoFar);
    }
    return maxSoFar;
}

console.log('O(n) optimized 2 => ', maximumSubarrayOptimized2([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log('O(n) optimized 2 => ', maximumSubarrayOptimized2([-2, -3, 4, -1, -2, 1, 5, -3])); // 7