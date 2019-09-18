// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// Binary search solution.
function search(nums, target) {
    let minInd = 0;
    let maxInd = nums.length - 1;

    while (minInd <= maxInd) {

        let midInd = Math.floor((minInd + maxInd) / 2);
        if (target === nums[midInd]) {
            return midInd;
        }
        if (nums[midInd] <= nums[maxInd]) {
            // if right is sorted and target doesnt fall between mid to max, search the left side.
            if (target < nums[midInd] || target > nums[maxInd]) {
                maxInd = midInd - 1;
            } else {
                minInd = midInd + 1;
            }
        } else if (nums[midInd] >= nums[minInd]) {
            // if left is sorted and target doesnt fall between mid, search the right.
            if (target > nums[midInd] || target < nums[minInd]) {
                minInd = midInd + 1;
            } else {
                maxInd = midInd - 1;
            }
        }
    }
    return -1;
}

// TIME COMPLEXITY: O(logn)
// SPACE COMPLEXITY: O()
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1