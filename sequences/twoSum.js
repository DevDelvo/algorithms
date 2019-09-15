// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


const twoSum = function(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        let difference = target - num;

        if (map.has(difference)) {
            let prevIdx = map.get(difference)
            return [prevIdx, i]
        }
        if (!map.has(num)) {
            map.set(num, i);
        }
    }
    return false;
};

console.log(twoSum([2,7,11,15], 9)) // [0,1];