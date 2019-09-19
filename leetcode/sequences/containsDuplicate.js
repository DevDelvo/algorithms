// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
// Example 1:
// Input: [1,2,3,1]
// Output: true

// Example 2:
// Input: [1,2,3,4]
// Output: false

// Example 3:
// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

const containsDuplicateWithSorting = (nums) => {
    nums = nums.sort();
    for (let i = 1; i < nums.length; i++) {
        let prev = nums[i-1];
        let current = nums[i];
        if (prev === current) return true;
    }
    return false;
}

console.log(containsDuplicateWithSorting([1,2,3,1])); // true
console.log(containsDuplicateWithSorting([1,2,3,4])); // false
console.log(containsDuplicateWithSorting([1,1,1,3,3,4,3,2,4,2])); // true

const containsDuplicate = function(nums) {
    // with HASH
    // const hash = {};
    // for (const num of nums) {
    //     if (hash[num]) {
    //         return true;
    //     } else if (!hash[num]) {
    //         hash[num] = true;
    //     }
    // }
    // return false;
    // with SET
    const set = new Set();
    nums.forEach(num => set.add(num));
    return nums.length !== set.size;
};

console.log(containsDuplicate([1,2,3,1])); // true
console.log(containsDuplicate([1,2,3,4])); // false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // true
