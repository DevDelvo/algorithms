// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

// Approach 1: Left and Right product lists
// It's much easier to build an intuition for solving this problem without division once you visualize how the different products except self look like for each of the elements.
// So, let's take a look at an example array and the different products.
// Input Array                 Products
// 4 [ 5 1 8 2 10 6 ]           4800
// [ 4 ] 5 [ 1 8 2 10 6 ]       3840
// [4 5] 1 [ 8 2 10 6 ]         19200
// [4 5 1] 8 [ 2 10 6 ]         2400
// [4 5 1 8] 2 [10 6]           9600
// [4 5 1 8 2] 10 [6 ]          1920
// [4 5 1 8 2 10 ] 6            3200

// Looking at the figure about we can figure another way of computing those different product values.

// Instead of dividing the product of all the numbers in the array by the number at a given index to get the corresponding product,
// we can make use of the product of all the numbers to the left and all the numbers to the right of the index.
// Multiplying these two individual products would give us the desired result as well.

// For every given index, i, we will make use of the product of all the numbers to the left of it and multiply it by the product of all the numbers to the right.
// This will give us the product of all the numbers except the one at the given index ii.Let's look at a formal algorithm describing this idea more concretely.

// Algorithm

// 1. Initialize two empty arrays, L and R where for a given index i, L[i] would contain the product of all the numbers to the left of i and R[i] would contain the product of all the numbers to the right of i.

// 2. We would need two different loops to fill in values for the two arrays.

// For the array L, L[0]L[0] would be 1 since there are no elements to the left of the first element. For the rest of the elements, we simply use L[i] = L[i - 1] * nums[i - 1]L[i]=L[i−1]∗nums[i−1].
// Remember that L[i] represents product of all the elements to the left of element at index i.

// 3. For the other array, we do the same thing but in reverse i.e. we start with the initial value of 1 in R[length - 1]R[length−1] where length is the number of elements in the array, and keep updating R[i] in reverse.
// Essentially, R[i] = R[i + 1] * nums[i + 1]R[i]=R[i+1]∗nums[i+1]. Remember that R[i] represents product of all the elements to the right of element at index i.

// 4. Once we have the two arrays set up properly, we simply iterate over the input array one element at a time, and for each element at index i, we find the product except self as L[i] * R[i]L[i]∗R[i].

// Let's go over a simple run of the algorithm that clearly depicts the construction of the two intermediate arrays and finally the answer array.


function productExceptSelf(arr) {
    // 1. Initialize two empty arrays, L and R where for a given index i, L[i] would contain the product of all the numbers to the left of i and R[i] would contain the product of all the numbers to the right of i.
    const L = new Array(arr.length);
    const R = new Array(arr.length);
    const res = [];
    L[0] = 1; // there are no products to the left for the first element, so we just set L[0] to 1;
    R[R.length - 1] = 1; // same with there being no products to the right of the final element.
    // 2. We would need two different loops to fill in values for the two arrays.
    // For the array L, L[0]L[0] would be 1 since there are no elements to the left of the first element. For the rest of the elements, we simply use L[i] = L[i - 1] * nums[i - 1]L[i]=L[i−1]∗nums[i−1].
    // Remember that L[i] represents product of all the elements to the left of element at index i.
    for (let i = 1; i < L.length; i++) {
        L[i] = arr[i - 1] * L[i - 1];
    }
    // console.log(L)
    for (let j = R.length - 2; j >= 0; j--) {
        R[j] = arr[j + 1] * R[j + 1];
    }

    for (let k = 0; k < arr.length; k++) {
        res[k] = L[k] * R[k];
    }
    // console.log(R)
    return res;
}

// Complexity analysis

// Time complexity : O(N)) where N represents the number of elements in the input array. We use one iteration to construct the array L,
// one to construct the array R and one last to construct the answer array using L and R.
// Space complexity : O(N) used up by the two intermediate arrays that we constructed to keep track of product of elements to the left and right.

console.log('[1, 2, 3, 4] => ', productExceptSelf([1, 2, 3, 4])) // [24, 12, 8, 6]
console.log('[4, 5, 1, 8, 2, 10, 6] => ', productExceptSelf([4, 5, 1, 8, 2, 10, 6])) // [ 4800, 3840, 19200, 2400, 9600, 1920, 3200 ]

// Approach 2: O(1) space approach
// Although the above solution is good enough to solve the problem since we are not using division anymore, there's a follow-up component as well which asks us to solve this using constant space.
// Understandably so, the output array does not count towards the space complexity. This approach is essentially an extension of the approach above.
// Basically, we will be using the output array as one of L or R and we will be constructing the other one on the fly.
// Let's look at the algorithm based on this idea.

// Algorithm
// Initialize the empty answer array where for a given index i, answer[i] would contain the product of all the numbers to the left of i.
// We construct the answer array the same way we constructed the L array in the previous approach. These two algorithms are exactly the same except that we are trying to save up on space.
// The only change in this approach is that we don't explicitly build the R array from before.
// Instead, we simply use a variable to keep track of the running product of elements to the right and we keep updating the answer array by doing answer[i] = answer[i] * Ranswer[i]=answer[i]∗R. For a given index i,
// answer[i] contains the product of all the elements to the left and R would contain product of all the elements to the right.
// We then update R as R = R * nums[i]R=R∗nums[i]

function productExceptSelf2(arr) {
    const res = new Array(arr.length);
    res[0] = 1;
    // find products of elements to the left
    // nums[i-1] * res[i-1] gives the product of all elements to the left
    for (let i = 1; i < arr.length; i++) {
        res[i] = arr[i - 1] * res[i - 1];
    }

    // R is the product of all elements to the right.
    // at length - 1, the product of all elementes to the right (R) is 1;
    let R = 1;
    for (let j = arr.length - 1; j >= 0; j--) {
        res[j] = res[j] * R;
        R *= arr[j]
    }
    return res;
}


console.log('in place solution [1, 2, 3, 4] => ', productExceptSelf2([1, 2, 3, 4])) // [24, 12, 8, 6]
console.log('in place solution [4, 5, 1, 8, 2, 10, 6] => ', productExceptSelf2([4, 5, 1, 8, 2, 10, 6])) // [ 4800, 3840, 19200, 2400, 9600, 1920, 3200 ]

// Time complexity : O(N) where N represents the number of elements in the input array. We use one iteration to construct the array L, one to update the array answer.
// Space complexity : O(1) since don't use any additional array for our computations. The problem statement mentions that using the answer array doesn't add to the space complexity.