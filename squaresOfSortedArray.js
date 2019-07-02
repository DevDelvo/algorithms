// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

// Example 1:
// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

// Example 2:
// Input: [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
 
// Note:
// 1 <= A.length <= 10000
// -10000 <= A[i] <= 10000
// A is sorted in non-decreasing order.

// O(nlog(n)) time | O(n) space
// const squaresOfSortedArray = (arr) => {
//     return newArr = arr.map(el => Math.pow(el, 2)).sort();
// }

// o(n) time | O(n) space

const squaresOfSortedArray = (arr) => {
    if (!arr.length) return [];
    let positiveIdx = 0;
    while (arr[positiveIdx] <= 0) {
        positiveIdx++;
    }
    let negativeIdx = positiveIdx - 1;
    let tempIdx = 0;
    let res = [];
    while ( negativeIdx >= 0 && positiveIdx < arr.length) {
        let negSquard = Math.pow(arr[negativeIdx], 2);
        let posSquared = Math.pow(arr[positiveIdx], 2);
        
        if (negSquard < posSquared) {
            res[tempIdx] = negSquard;
            negativeIdx--;
        } else {
            res[tempIdx] = posSquared;
            positiveIdx++;
        }
        tempIdx++;
    }
    while (negativeIdx >= 0) {
        res[tempIdx++] = Math.pow(arr[negativeIdx], 2);;
        negativeIdx--;
    }
    while (positiveIdx < arr.length) {
        res[tempIdx++] = Math.pow(arr[positiveIdx], 2);
        positiveIdx++;
    }
    return res
}

console.log(squaresOfSortedArray([-4,-1,0,3,10])) // [0,1,9,16,100]
console.log(squaresOfSortedArray([-7,-3,2,3,11])) // [4,9,9,49,121]
