// Write a function that takes in an array of positive integers
// and returns an integer representing the max sum of non-adjacent elements in the array.
// If a sum can't be generated, the function should return 0.

// Sample input: [75, 105, 120, 75, 90, 135]
// Sample output: 330 (75, 120, 135)


// O(n) time | O(n) space
function maxSubsetSumNoAdjacent(arr) {
    if (!arr.length) return 0;
    if (arr.length === 1) return arr[0];

    const maxSums = arr.slice();
    maxSums[0] = Math.max(0, maxSums[0])
    maxSums[1] = Math.max(maxSums[0], maxSums[1]);
    for (let i = 2; i < arr.length; i++) {
        maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + maxSums[i]);
    }
    return maxSums[maxSums.length-1];
}

// O(n) time | O(1) space
function maxSubsetSumNoAdjacent2(arr) {
    if (!arr.length) return 0;
    if (arr.length === 1) return arr[0];

    let second = arr[0];
    let first = Math.max(arr[0], arr[1]);
    for (let i = 2; i < arr.length; i++) {
        const current = Math.max(first, second + arr[i]);
        second = first;
        first = current
    }
    return first;
}

const test1 = maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]); // 330
const test2 = maxSubsetSumNoAdjacent([7, 10, 12, 7, 9, 14]); //33
const test3 = maxSubsetSumNoAdjacent([1, 15, 3]); // 15
const test4 = maxSubsetSumNoAdjacent([]); // 0

// const test1 = maxSubsetSumNoAdjacent2([75, 105, 120, 75, 90, 135]); // 330
// const test2 = maxSubsetSumNoAdjacent2([7, 10, 12, 7, 9, 14]); //33
// const test3 = maxSubsetSumNoAdjacent2([1, 15, 3]); // 15
// const test4 = maxSubsetSumNoAdjacent2([]); // 0

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
