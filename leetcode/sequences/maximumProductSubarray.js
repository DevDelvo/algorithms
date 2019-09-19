// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

// Example 1:

// Input: [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

function maxProdSubarr(arr) {
    if (arr.length === 1) return arr[0];
    let maxEndingHere = 1;
    let minEndingHere = 1;
    let maxSoFar = 1;
    let flag = 0;
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        if (current > 0) { // if it's greater than 0, just multiply it by the current maxProduct
            maxEndingHere = maxEndingHere * current;
            minEndingHere = Math.min(minEndingHere * current, 1); //only update minEndingHere if minEndingHere is negative
            flag = 1;
        } else if (current === 0) { // if zero maxEndingHere can't end here. reset
            maxEndingHere = 1;
            minEndingHere = 1;
        } else { // if it's negative then maxEndingHere can be positive or 1 and minEndingHere can be negative or 1.
            let temp = maxEndingHere;
            maxEndingHere = Math.max(minEndingHere * current, 1);
            minEndingHere = temp * current;
            console.log(minEndingHere, maxEndingHere, maxSoFar)
        }
        if (maxSoFar < maxEndingHere) { // update maxSoFar is needed
            maxSoFar = maxEndingHere;
        }
    }
    if (flag === 0 && maxSoFar === 1) {
        return maxEndingHere;
    }
    return maxSoFar;
}


// console.log(maxProdSubarr([2, 3, -2, 4])) // 6
// console.log(maxProdSubarr([-2, 0, -1])) // 0
console.log(maxProdSubarr([-2])) // -2
console.log(maxProdSubarr([-1, -1])) // 1

function maxProdSubarr2(arr) {
    if (arr.length === 0) return 0;
    let max = min = res = arr[0];

    for (let i = 1; i < arr.length; i++) {
        [max, min] = [Math.max(max * arr[i], min * arr[i], arr[i]), Math.min(max * arr[i], min * arr[i], arr[i])];
        res = Math.max(max, res)
    }
    return res;
}


console.log('maxProdSubarr2 => ', maxProdSubarr2([2, 3, -2, 4])) // 6
console.log("maxProdSubarr2 => ", maxProdSubarr2([-2, 0, -1])) // 0
console.log("maxProdSubarr2 => ", maxProdSubarr2([-2])) // -2
console.log("maxProdSubarr2 => ", maxProdSubarr2([-1, -1])) // 1