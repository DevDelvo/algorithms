// Given an array of integers, return a new array such that each element at index i of the new array 
// is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. 
// If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?

const test1 = [1, 2, 3, 4, 5];
const test2 = [3, 2, 1];

const everyOtherArrayProduct = (arr) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const currentNum = arr[i];
        const product = arr.reduce((acc, el, idx) => {
            if (idx !== i) return acc * el;
        }); 
        newArr.push(product);
    }
    return newArr;
}

console.log(everyOtherArrayProduct(test1));
console.log(everyOtherArrayProduct(test2));