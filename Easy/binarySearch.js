'use strict'
//Binary Search
//Write a function that takes in a sorted array of integers as well as a targer integer.
//The function should use the Binary Search algorithm to find if the target number is contained in the array 
//and should return its index if it is, otherwise -1.

// Sample input: [0,1,21,33,45,45,61,71,72,73], 33
// Sample output: 3

// Time O(log(n)) Space O(log(N))
function binarySearchRecursive(arr, target) {
    return binarySearchRecursiveHelper(arr, target, 0, arr.length - 1);
}

function binarySearchRecursiveHelper(arr, target, left, right) {
    if (left > right) return -1;
    const mid = Math.floor((left + right) / 2);
    const currentVal = arr[mid];
    if (target === currentVal) {
        console.log("recursive", mid)
        return mid;
    } else if (target < currentVal) {
        return binarySearchRecursiveHelper(arr, target, left, mid - 1);
    } else if (target > currentVal) {
        return binarySearchRecursiveHelper(arr, target, mid + 1, right);
    }
}

binarySearchRecursive([0,1,21,33,45,45,61,71,72,73], 33);

// Time O(log(n)) Space O(1)
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            console.log(mid)
            return mid
        } else if (arr[mid] > target) {
            right = mid + 1;
        } else if (arr[mid] < target) {
            left = mid - 1;
        }
    }
    return -1;
}

binarySearch([0,1,21,33,45,45,61,71,72,73], 33)