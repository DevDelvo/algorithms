// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
// Find all unique triplets in the array which gives the sum of zero.

// Note:
// The solution set must not contain duplicate triplets.

// Example:
// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

const threeSum = (arr) => {
    let solutions = [];
    let target = 0;
    arr.sort((a, b) => {
        return a - b;
    });
    for (let i = 0; i < arr.length - 2; i++) {
        if (i === 0 || (i > 0 && arr[i] !== arr[i-1])) {
            let low = i + 1;
            let high = arr.length - 1;
            let sum = - arr[i];
            while ( low < high) {
                if (arr[low] + arr[high] === sum) {
                    solutions.push([arr[i], arr[low], arr[high]]);
                    while (low < high && arr[low] === arr[low + 1]) low++;
                    while (low < high && arr[high] === arr[high - 1]) high--;
                    low++;
                    high--;
                } else if (arr[low] + arr[high] > sum) {
                    high--;
                } else {
                    low++;
                }
            }
        }
    }
    return solutions;
}

const test1 = [-1, 0, 1, 2, -1, -4];
const test2 = [-1, 0, 1, 2, -1, -4]


console.log(threeSum(test1)); // expects [[-1, 0, 1], [-1, -1, 2]];
console.log(threeSum(test2));
// console.log(threeSum(test3));