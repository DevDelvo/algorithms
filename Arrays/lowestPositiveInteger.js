// Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

// You can modify the input array in-place.

const test1 = [3, 4, -1, 1];
const test2 = [1, 2, 0];
const test3 = [ 5 , 3 ,-2, 3, 7, 5]

// O(n) time | O(n) space
const lowestPositiveInteger = (arr) => {
    const hash = {};
    for (const num of arr) {
        if (num > 0) hash[num] = true;
    }
    const posNums = Object.keys(hash);
    for (let i = 0; i < posNums.length; i++) {
        let cur = parseInt(posNums[i]);
        if (cur !== i + 1) {
            return i + 1;
        }
    }
    return parseInt(posNums[posNums.length - 1]) + 1;
}

console.log(lowestPositiveInteger(test1)); // 2
console.log(lowestPositiveInteger(test2)); // 3
console.log(lowestPositiveInteger(test3)); // 1