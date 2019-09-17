// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// Brute Force
function threeSum1(nums) {
    nums = nums.sort((a, b) => a - b);
    let uniqTriplets = [];
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        for (let j = i + 1; j < nums.length; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            for (let k = j + 1; k < nums.length; k++) {
                if (k > j + 1 && nums[k] === nums[k - 1]) continue;

                if (nums[i] + nums[j] + nums[k] === 0) {
                    uniqTriplets.push([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }
    return uniqTriplets;
}

console.log(threeSum1([-1, 0, 1, 2, -1, -4])); // [[-1, 0, 1], [-1, -1, 2]]
// console.log(threeSum1([-1, 0, 1, 2, -1, -4]));

// Complexity Analysis
// Time complexity : O(n^3)
// Because each of these nested loops executes n times, the total time complexity is O(n^3), where n is a size of an array.

// Space complexity : O(n^2). If we assume that resultant array is not considered as additional space we need O(n^2) space for storing triplets in a set.

// 2-pointer solution
function threeSum2(nums) {
    nums = nums.sort((a, b) => a - b);
    const res = [];

    for (let indexA = 0; indexA < nums.length; indexA++) {
        let indexB = indexA + 1;
        let indexC = nums.length - 1;

        if (indexA > 0 && nums[indexA] === nums[indexA - 1]) continue;
        while (indexB < indexC) {
            let sum = nums[indexA] + nums[indexB] + nums[indexC];

            if (sum < 0) {
                indexB++;
            } else if (sum > 0) {
                indexC--;
            } else {
                res.push([nums[indexA], nums[indexB], nums[indexC]]);
                while (nums[indexB] === nums[indexB + 1]) indexB++;
                while (nums[indexC] === nums[indexC - 1]) indexC--;
                indexB++;
                indexC--;
            }
        }
    }
    return res;
}

console.log(threeSum2([-1, 0, 1, 2, -1, -4])); // [[-1, 0, 1], [-1, -1, 2]]
// console.log(threeSum1([-1, 0, 1, 2, -1, -4]));

// Complexity Analysis
// Time complexity : O(n^2)
// Only 1 nested loop this time.

// Space complexity : O(n^2). If we assume that resultant array is not considered as additional space we need O(n^2) space for storing triplets in a set.
