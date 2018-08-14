// Given a target sum and an array of positive integers, 
// return true if any combination of numbers in the array can add to the target. 
// Each number in the array may only be used once. 
// Return false if the numbers cannot be used to add to the target sum.

// Solution 1 with Set() 
// "bottom-up" approach
// O(n*m) time where n is the target numbers and m is the size of the array of possible numbers to choose from
//  O(n*m) space
// function subsetSum(target, nums) {
//     const possibleSums = new Set([0]) //initialize possible sums with a set containing 0
//     for (const num of nums) {
//         const currentPossibleSums = new Set(possibleSums) //copy the current set of numbers so that we loop down it without the set changing 
//         for (const sum of currentPossibleSums) {
//             const newSum = sum + num; //ad each possible sum to each number in the original array of numbers
//             if (newSum === target) return true; //if we find a match, return true.
//             if (newSum < target) possibleSums.add(newSum); //add number to set if it is less than the target 
//         }
//     }
//     return false;
// }

// Solution 2 with array
function subsetSum(target, nums) {
    let sums = [0];
    for (let i = 0; i < nums.length; i++) {
        // let sumsCopy = [...sums];
        let sumsCopy = Array.prototype.slice.call(sums)
        for (let j = 0; j < sumsCopy.length; j++) {
            let newSum = sumsCopy[j] + nums[i];
            if (newSum === target) return true;
            if (newSum < target) sums.push(newSum);
        }
    }
    return false;
}

// Solution 3 top-down approach with recursion
// O(2^n) because  for each possibility, we consider two more possibilities, etc. 
// This generates a tree of possibilities with 2^n nodes. On the other hand, many of the nodes in this tree are identical.
// function subsetSum(target, nums, idx = 0) {
//     if (target === 0) return true; //base case
//     if (target < 0 || idx === nums.length) return false; //if target is negative or if youve reached the end of the array, return false;
//     const num = nums[idx];
   
//     const whenExcluded = subsetSum(target, nums, idx + 1); // capture boolean result for possiblilty of *excluding* the current number from the sum
//     const whenIncluded = subsetSum(target - num, nums, idx + 1); //  recursively try with the same target, but continue onto the next index
//     return whenExcluded || whenIncluded;
// }

// Solution 4 with memoization
// O(n*m) time || O(n*m) space
// function subsetSum(target, nums, idx = 0, memo ={}) {
//     if (memo.hasOwnProperty(target)) return memo[target]; //if it's already in the memo, return it.
//     if (target === 0) return true; //base case
//     if (target < 0 || idx === nums.length) return false;
//     const num = nums[idx]
//     const whenExcluded = subsetSum(target, nums, idx + 1, memo);
//     const whenIncluded = subsetSum(target - num, nums, idx + 1, memo);
//     const result = whenExcluded || whenIncluded;
//     memo[target] = result; //cache answer, associating it with this particular target
//     return result;
// }

const test1 = subsetSum(2, [1,10,5,3]); // false
const test2 = subsetSum(10, [1,10,5,3]); // true
const test3 = subsetSum(9, [1,10,5,3]); // true
const test4 = subsetSum(19, [1,10,5,3]); // true
const test5 = subsetSum(17, [1,10,5,3]); // false
console.log(test3);