// Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.
// To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].
// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].
// Example 1:
// Input: [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

// Example 2:
// Input: [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
// Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
// Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
// Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

// Notes:
// 1 <= A.length = A[0].length <= 20
// 0 <= A[i][j] <= 1

const test1 = [[1,1,0],[1,0,1],[0,0,0]];
const test2 = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]];

// function flipImage(image) {
//     let flipped = [];
//     for (const arr of image) {
//         flipped.push(flipArrHelper(arr));
//     }
//     return flipped;
// }

// function flipArrHelper(arr) {
//     const newArr = [];
//     for (let i = arr.length-1; i >= 0; i--) {
//         const el = arr[i];
//         el === 1 ? newArr.push(0) : newArr.push(1);
//     }
//     return newArr
// }

function inPlaceFlipAndInvertImage(image) {
    return image.map(arr => arr.reverse().map(el => el === 0 ? 1 : 0));
}

function flipAndInvertImage(arr) {
    for (const image of arr) {
        for (let i = 0; i < Math.floor((image.length + 1) / 2); i++) {
            let temp = image[i] ^ 1;
            image[i] = image[image.length - 1 - i] ^ 1;
            image[image.length - 1 - i] = temp;
            // console.log(image)
        }
    }
    return arr;
}

console.log(flipAndInvertImage(test1)); // [[1,0,0],[0,1,0],[1,1,1]]
console.log(flipAndInvertImage(test2)); // [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]