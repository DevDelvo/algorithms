// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.


const test1 = [10, 15, 3, 7];
const test2 = [20, 14, 12, 8, 2, 35];

// O(n) time | O(n) space
const twoSumHash = (nums, target) => {
    const hash = {};
    for (const num of nums) {
        const potentialSum = target - num;
        if (hash[potentialSum]) {
            return true;
        } else {
            hash[num] = true;
        }
    }
    return false;
}

// O(n logn) time | O(n) space
const twoSum = (nums, target) => {
    nums = nums.sort((a, b) => a - b);
    let leftIdx = 0;
    let rightIdx = nums.length - 1;
    while (leftIdx < rightIdx) {
        const leftNum = nums[leftIdx];
        const rightNum = nums[rightIdx];
        const potentialSum = leftNum + rightNum;

        if (potentialSum === target) {
            return true;
        } else if (potentialSum > target) {
            rightIdx--;
        } else if (potentialSum < target) {
            leftIdx++;
        }
    }
    return false;
}

console.log(twoSumHash(test1, 17)); //true
console.log(twoSum(test1, 17)); //true
console.log(twoSum(test2, 27)); //false
console.log(twoSumHash(test2, 27)); //false
console.log(twoSum(test2, 26)); // true