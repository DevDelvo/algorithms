// Permutations
// Write a function that takes in array of unique integers and returns an array of all permutations of those integers. 
// If the input is empty, return an empty array

// Sample input: [1,2,3]
// Sample output: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]

// Solution 1
// Upper Bound: O(n^2*n!) time | O(n*n!) space
// Roughly: O(n*n!) time | O(n*n!) space
// function permutations(arr) {
//     const perms = [];
//     permutationsHelper(arr, [], perms);
//     return perms;
// }

// function permutationsHelper(arr, currentPerm, perms) {
//     if (!arr.length && currentPerm.length) {
//         perms.push(currentPerm);
//     } else {
//         for (let i = 0; i < arr.length; i++) {
//             const newArr =  arr.slice(0, i).concat(arr.slice(i + 1));
//             const newPerm = currentPerm.concat([arr[i]]);
//             permutationsHelper(newArr, newPerm, perms)
//         }
//     }
// }

// Solution 2
// o(n*n!) time | O(n*n!) space
function getPermutations(arr) {
    const perms = [];
    permutationsHelper(0, arr, perms);
    return perms;
}

function permutationsHelper(i, arr, perms) {
    if (i === arr.length - 1) {
        perms.push(arr.slice());
    } else {
        for (let j = i; j < arr.length; j++) {
            swap(i, j, arr);
            permutationsHelper(i + 1, arr, perms);
            swap(i, j, arr);
        }
    }
}

function swap (i, j, arr) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

console.log(getPermutations([1,2,3]))