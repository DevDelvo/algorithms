// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 
// n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
// Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.
 
// The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
// In this case, the max area of water (blue section) the container can contain is 49.

// Example:
// Input: [1,8,6,2,5,4,8,3,7]
// Output: 49


// Brute force
// Time O(n^2) | Space O(1)
function maxArea(height) {
    let max = 0;
    for (let i = 0; i < height.length; i++) {
        for (j = i + 1; j < height.length; j++) {
            // highest between the max and the lowest between height[i] or height[j] multiplied by j - i
            max = Math.max(max, Math.min(height[i], height[j]) * (j - i));
        }
    }
    return max;
 }

console.log(maxArea([1,8,6,2,5,4,8,3,7])) // 49


// Two Pointer Approach
// Time O(n) | Space O(1)
// The intuition behind this approach is that the area formed between the lines will always be limited by the height of the shorter line. 
// Further, the farther the lines, the more will be the area obtained.

// We take two pointers, one at the beginning and one at the end of the array constituting the length of the lines. 
// Further, we maintain a variable \text{maxarea}maxarea to store the maximum area obtained till now. 
// At every step, we find out the area formed between them, 
// update maxarea and move the pointer pointing to the shorter line towards the other end by one step.
function maxArea2(height) {
    let max = 0;
    let leftPointer = 0;
    let rightPointer = height.length -1;

    while (leftPointer < rightPointer) {
        // we use Math.min because we have to use the smallest of the two points to find the area. rightPointer - leftPointer gives us the width of our square
        max = Math.max(max, Math.min(height[leftPointer], height[rightPointer]) * (rightPointer - leftPointer))
        if (height[leftPointer] < height[rightPointer]) {
            leftPointer++;
        } else {
            rightPointer--;
        }
    }

    return max;
}

console.log(maxArea2([1,8,6,2,5,4,8,3,7])) // 49