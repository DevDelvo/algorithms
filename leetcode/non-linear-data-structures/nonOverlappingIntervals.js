// Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

 

// Example 1:

// Input: [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of intervals are non-overlapping.
// Example 2:

// Input: [[1,2],[1,2],[1,2]]
// Output: 2
// Explanation: You need to remove two [1,2] to make the rest of intervals non-overlapping.
// Example 3:

// Input: [[1,2],[2,3]]
// Output: 0
// Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
 

// Note:

// You may assume the interval's end point is always bigger than its start point.
// Intervals like [1,2] and [2,3] have borders "touching" but they don't overlap each other.

function eraseOverlapIntervals(arr) {
        if (!arr.length) return 0;
        if (arr.length === 1) return 0;
        // For non-overlapping intervals, the start time should be larger than or equal to previous end time.
        // Thus we sort the interval based on end time,
        let sorted = arr.sort((a, b) => {
            if(a[1] !== b[1]) {
                return a[1] - b[1]
            } else {
                return a[0] - b[0]
            }
        });
        // initialize and end time as -Infinity that will change as we traverse the array.
        let res = 0, end = -Infinity;
        for (const interval of sorted) {
            // After that, compare each interval's start time with the end time. 
            // If the start time is not smaller than "end time", we update the end time, this will be the latest time for all non-overlapping intervals. 
            if (end <= interval[0]) {
                end = interval[1];
            } else { // If the start time is smaller than the end time, we increment result, this is the interval we need to remove. 
                res++;
            }
        }
        return res;
}

// O(nlogn) time because of the sorting and then traversing the array  | O(n) space for the new sorted array. 

const arr1 = [ [1,2], [2,3], [3,4], [1,3] ]
const arr2 = [ [1,2], [1,2], [1,2] ]
const arr3 = [ [1,2], [2,3] ]

console.log('first solution => ', eraseOverlapIntervals(arr1)) // 1
console.log('first solution => ', eraseOverlapIntervals(arr2)) // 2
console.log('first solution => ', eraseOverlapIntervals(arr3)) // 0

function eraseOverlapIntervals2(arr) {
    if (!arr.length) return 0;

    arr.sort((a, b) => a[1] - b[1]) 
    let counter = 1;
    let end = arr[0][1];
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        if (end <= current[0]) {
            counter++;
            end = current[1];
        }
    }
    return arr.length - counter;
}

// Optimized. 
// O(nlogn) time because of the sorting and then traversing the array  | O(n) space for the new sorted array. 

console.log('second solution => ', eraseOverlapIntervals2(arr1)) // 1
console.log('second solution => ', eraseOverlapIntervals2(arr2)) // 2
console.log('second solution => ', eraseOverlapIntervals2(arr3)) // 0