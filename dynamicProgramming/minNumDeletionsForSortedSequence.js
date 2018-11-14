// Given an array of n integers.
// The task is to remove or delete minimum number
// of elements from the array so that when the remaining elements are placed
// in the same sequence order form a sorted sequence.

const longestIncreasingSubsequence = (arr) => {
    let res = 0;
    const sequences = Array(arr.length).fill(1);

    for (let i = 0; i < arr.length; i++) {
        let currentPos = arr[i];
        for (let j = 0; j < i; j++) {
            if (currentPos > arr[j] && sequences[i] < sequences[j] + 1) { // sets the highest number of increasing numbers at that current position of i in the sequences array.
                sequences[i] = sequences[j] + 1;
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        // if (res < sequences[i]) res = sequences[i];
        res = Math.max(res, sequences[i])
    }
    return res;
}

const minNumDeletions = (arr) => {
    return arr.length - longestIncreasingSubsequence(arr)
}

const test1 = [5, 6 ,1, 7, 4]; // 2 removing 1 and 4 leaves 5 6 7 which is a sorted sequence
const test2 = [30, 40, 2, 5, 1, 7, 45, 50, 8] // 4

console.log(minNumDeletions(test1));
console.log(minNumDeletions(test2));

// Time Complexity : O(n^2)