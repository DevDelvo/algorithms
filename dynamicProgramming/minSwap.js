// We have two integer sequences A and B of the same non-zero length.
// We are allowed to swap elements A[i] and B[i].  
// Note that both elements are in the same index position in their respective sequences.
// At the end of some number of swaps, A and B are both strictly increasing.  
// (A sequence is strictly increasing if and only if A[0] < A[1] < A[2] < ... < A[A.length - 1].)
// Given A and B, return the minimum number of swaps to make both sequences strictly increasing.
// It is guaranteed that the given input always makes it possible.

// Example:
// Input: A = [1,3,5,4], B = [1,2,3,7]
// Output: 1
// Explanation:
// Swap A[3] and B[3].  Then the sequences are:
// A = [1, 3, 5, 7] and B = [1, 2, 3, 4]
// which are both strictly increasing.

// Note:
// A, B are arrays with the same length, and that length will be in the range [1, 1000].
// A[i], B[i] are integer values in the range [0, 2000].


// O(n) time | O(1) space
const minSwap = function(a, b) {
    let n1 = 0;
    let s1 = 1;
    for (let i = 1; i < a.length; i++) {
        let n2 = Infinity;
        let s2 = Infinity;
        if (a[i - 1] < a[i] && b[i - 1] < b[i]) {
            n2 = Math.min(n2, n1);
            s2 = Math.min(s2, s1 + 1);
        }
        if (a[i - 1] < b[i] && b[i - 1] < a[i]) {
            n2 = Math.min(n2, s1);
            s2 = Math.min(s2, n1 + 1);
        }
        n1 = n2;
        s1 = s2;
    }
    return Math.min(n1, s1);
}

const a = [1, 3, 5, 4];
const b = [1, 2, 3, 7];

console.log(minSwap(a, b)); // 1 

// Approach #1: Dynamic Programming [Accepted]
// Intuition

// The cost of making both sequences increasing up to the first i columns can be expressed in terms of the cost of making both sequences increasing up to the first i-1 columns. 
// This is because the only thing that matters to the ith column is whether the previous column was swapped or not. 
// This makes dynamic programming an ideal choice.

// Let's remember n1 (natural1), 
// the cost of making the first i-1 columns increasing and not swapping the i-1th column; and s1 (swapped1), 
// the cost of making the first i-1 columns increasing and swapping the i-1th column.

// Now we want candidates n2 (and s2), 
// the costs of making the first i columns increasing if we do not swap (or swap, respectively) the ith column.

// Algorithm
// For convenience, say a1 = A[i-1], b1 = B[i-1] and a2 = A[i], b2 = B[i].

// Now, if a1 < a2 and b1 < b2, 
    // then it is allowed to have both of these columns natural (unswapped), or both of these columns swapped. 
    // This possibility leads to n2 = min(n2, n1) and s2 = min(s2, s1 + 1).

// Another, (not exclusive) possibility is that a1 < b2 and b1 < a2. 
    // This means that it is allowed to have exactly one of these columns swapped. 
    // This possibility leads to n2 = min(n2, s1) or s2 = min(s2, n1 + 1).

// Note that it is important to use two if statements separately, because both of the above possibilities might be possible.

// At the end, the optimal solution must leave the last column either natural or swapped, 
// so we take the minimum number of swaps between the two possibilities.
