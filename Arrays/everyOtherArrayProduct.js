// Given an array of integers, return a new array such that each element at index i of the new array 
// is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. 
// If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?

const test1 = [1, 2, 3, 4, 5];
const test2 = [3, 2, 1];

// O(n^2) time | O(n) space
const everyOtherArrayProduct = (arr) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const currentNum = arr[i];
        let product = 1;
        for (let j = 0; j < arr.length; j++) {
            if (j !== i) product *= arr[j];
        }
        newArr.push(product);
    }
    return newArr;
}

// O(n) time | O(n) space
const everyOtherArrayProductDivision = (arr) => {
    let product = arr.reduce((acc, el) => acc * el);
    console.log(product);
    const newArr = arr.map((el, idx) => product / arr[idx]);
    return newArr;
}

// O(n) time | O(n) space
const everyOtherArrayProductWithOutDivision = (arr) => {
    const newArr = new Array(arr.length);
    newArr[0] = 1;
    for (let i = 1; i < arr.length; i++) {
        newArr[i] = newArr[i - 1] * arr[i - 1];
    }
    let right = 1;
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr[i] *= right;
        right *= arr[i];
    }
    return newArr
}

// O(n) time | O(n) space
const everyOtherArrayProductRecursive = (arr) => {
    const newArr = new Array(arr.length).fill(0);
    everyOtherArrayProductRecursiveHelper(arr, newArr, 0, 1);
    return newArr;
}

const everyOtherArrayProductRecursiveHelper = (arr, newArr, idx, left) => {
    let right = 1;
    if (idx < newArr.length - 1) {
        right = everyOtherArrayProductRecursiveHelper(arr, newArr, idx + 1, left * arr[idx]);
    }
    newArr[idx] = left * right;
    return right * arr[idx];
}

// console.log(everyOtherArrayProduct(test1)); // [120, 60, 40, 30, 24]
// console.log(everyOtherArrayProduct(test2)); // [2, 3 , 6]

// console.log(everyOtherArrayProductDivision(test1)); 
// console.log(everyOtherArrayProductDivision(test2));

// console.log(everyOtherArrayProductWithOutDivision(test1));
// console.log(everyOtherArrayProductWithOutDivision(test2));

console.log('recursive', everyOtherArrayProductRecursive(test1));
console.log(everyOtherArrayProductRecursive(test2));