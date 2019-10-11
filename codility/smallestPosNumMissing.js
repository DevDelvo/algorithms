// You are given an unsorted array with both positive and negative elements. 
// You have to find the smallest positive number missing from the array in O(n) time using constant extra space. 
// You can modify the original array.

// Examples

//  Input:  {2, 3, 7, 6, 8, -1, -10, 15}
//  Output: 1

//  Input:  { 2, 3, -7, 6, 8, 1, -10, 15 }
//  Output: 4

//  Input: {1, 1, 0, -1, -2}
//  Output: 2

function findMissing(arr) {
    let copy = arr.slice(); // make copy so you dont mutate array
    const negativeCount = segregate(copy); // find amount we must shift over to the left
    const shifted = copy.slice(negativeCount); // give only positive array
    return findMissingPositive(shifted);
}

function findMissingPositive(arr) {
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        // Mark current as visited by making arr[arr[i] - 1] negative
        // note that 1 is subtractred because index start
        // from 0 and positive numbers start from 1
        if (Math.abs(current) - 1 < arr.length && arr[Math.abs(current) - 1] > 0) {
            arr[Math.abs(current) - 1] = -arr[Math.abs(current) - 1];
        }
    }
    // return first index value at which it is positive
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) return i + 1;
    }
    return arr.length + 1;
}

function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function segregate(arr) {
    let negativesCount = 0;
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        if (current <= 0) {
            swap(arr, i, negativesCount);
            negativesCount++;
        }
    }
    return negativesCount;
}

// O(n) time | O(n) space

console.log(findMissing([2, 3, 7, 6, 8, -1, -10, 15])) // 1
console.log(findMissing([2, 3, -7, 6, 8, 1, -10, 15])) // 4
console.log(findMissing([1, 1, 0, -1, -2])) // 2