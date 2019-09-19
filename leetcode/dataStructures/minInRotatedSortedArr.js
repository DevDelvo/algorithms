// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
// (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
// Find the minimum element.
// You may assume no duplicate exists in the array.

// Example 1:
// Input: [3,4,5,1,2] 
// Output: 1

// Example 2:
// Input: [4,5,6,7,0,1,2]
// Output: 0

// Sorting
// O(nlogn) time | O(1) space
function findMin(nums) {
    nums = nums.sort((a, b) => a - b);
    return nums[0];
}

console.log('Sorting => ', findMin([3,4,5,1,2])); // 1
console.log('Sorting => ', findMin([4,5,6,7,0,1,2])); // 0

// BruteForce
// O(n) Time | O(1) Space
function findMin2(nums) {
    let min = Infinity;
    for (const num of nums) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}
console.log('Brute Force => ', findMin2([3,4,5,1,2])); // 1
console.log('Brute force => ', findMin2([4,5,6,7,0,1,2])); // 0


// Binary Search
// O(logn) time | O(1) space
function findMin3(nums) {
    if (nums.length === 1) return nums[0];

    let left = 0;
    let right = nums.length - 1;

    // if the last element is greater than the first element, that means that there is no rotation.
    // Ex:  1, 2, 3, 4, 5 => 5 > 1 => return nums[0];
    // Ex: 2, 3, 4, 5, 1 => 1 > 2 is false
    // Ex: 4, 5, 1, 2, 3 => 3 > 4 is false
    if (nums[right] > nums[0]) {
        return nums[0];
    }

    while (left <= right) {
        // Find mid element
        // console.log(left, right)
        let mid = Math.floor(left + (right - left) / 2)
        // console.log(left, right)
        // console.log(mid)
        let midVal = nums[mid];

        // if mid element is greater than its next element, then mid+1 is the smallest.
        if (midVal > nums[mid + 1]) {
            return nums[mid + 1];
        } 
        // if mid element is less than its previous element, then it is the smallest element.
        if (midVal < nums[mid - 1]) {
            return midVal;
        }

        // if mid element is greater than the first element, the least value is somewhere in between the leftVal and midVal, so we search between left and mid.
        if (midVal > nums[0]) {
            left = mid + 1;
        } else { // if mid element is less than the first element, then the value is somewhere in between the rightVal and midVal so we search between right and mid.
            right = mid - 1;
        }
    }
    return -1;
}

console.log('Binary search => ', findMin3([3,4,5,1,2])); // 1
console.log('Binary search => ', findMin3([4,5,6,7,0,1,2])); // 0
console.log('Binary search => ', findMin3([2,3,4,5,1])); // 1
console.log('Binary search => ', findMin3([4,5,1,2,3])); // 1