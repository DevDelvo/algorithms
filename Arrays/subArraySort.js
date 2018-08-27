// Write function that takes in an array of integers of length at least 2
// Should return an array of starting and ending indices of the smallest subarray in the input array
// that needs to be sorted in place in order for the entire input array to be sorted. 
// If the input array is already sorted, the function should return [-1,-1]

// Sample input: [1,2,4,6,10,11,7,12,6,7,16,18,19]
// Sample output: [3, 9]

// [1, 2, 3, 10 ,5 , 7] //[4, 6]
// [1, 2, 3, 4, 5, -1] // [0, 6]

// Things to remember:
// If one element is found not in position, that means there are at least 2 elements not in position
// Smallest unsorted number and greatest unsorted number dictate the rest
// If the smallest is further into array, then the numbers before it are out of place
// If greatest is earlier in array, then numbers after it are out of position

// iterate through array, 
    // [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]
// compare current number to its neighboring previous and next values
    // [1,2,4,7,10...]             [...7, 16, 18, 19]
// find numbers that are 'not sorted'
                // [...11, 7, 12, 6...]
// look at the greatest and smallest values in this unsorted subarray
                    // [12, 6]
// find the final position for both values
// for the smallest -> start at beginning and find its place
    // [1, 2, 4, 7, 10...] -> 6 belongs in index 3
// for largest -> start at end and go backwards and find its place
    // [...7, 16, 18, 19] -> 12 belongs in index 9


function subArraySort(arr) {
    let minOutOfOrder = Infinity;
    let maxOutOFOrder = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (notInPlace(i, num, arr)) {
            minOutOfOrder = Math.min(minOutOfOrder, num);
            maxOutOFOrder = Math.max(maxOutOFOrder, num);
        }
    }
    if (minOutOfOrder === Infinity) {
        return [-1, -1];
    }
    let subArrLeftIdx = 0;
    while (minOutOfOrder > arr[subArrLeftIdx]) {
        subArrLeftIdx++;
    }
    let subArrRightIdx = arr.length - 1;
    while (maxOutOFOrder < arr[subArrRightIdx]) {
        subArrRightIdx--;
    }
    return [subArrLeftIdx, subArrRightIdx];
}

function notInPlace(i, num, arr) {
    if (i === 0) return num > arr[i + 1];
    if (i === arr.length - 1) return num < arr[i - 1]
    return num > arr[i + 1] || num < arr[i - 1];
}

const test =  [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19];
console.log(subArraySort(test)); // [3, 9]