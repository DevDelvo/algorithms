// Given a set of time intervals in any order, 
// merge all overlapping intervals into one and output 
// the result which should have only mutually exclusive intervals.
// Let the intervals be represented as pairs of integers for simplicity.

// For example, let the given set of intervals be 
// { { 1, 3 }, { 2, 4 }, { 5, 7 }, { 6, 8 } }.
// The intervals { 1, 3 } and { 2, 4 } overlap with each other, 
// so they should be merged and become { 1, 4 }.Similarly { 5, 7 } 
// and { 6, 8 } should be merged and become { 5, 8 }
//  [1,3] [2, 6], [4,5]
//  [1,6] [4,5]
const test1  = [[1,3], [2, 4], [3, 4], [5,7], [6,8]]

function mergeIntervals(arr) {
  arr = arr.sort((a, b) => a[0] - b[0]);
  
  const stack = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    const stackEnd = stack[stack.length - 1]
    if (stackEnd[1] < current[0]) {
      stack.push(current);
    } else {
      stackEnd[1] = Math.max(stackEnd[1], current[1]);
    }
  }
  return stack;
}

console.log(mergeIntervals(test1)); // [[1, 4],[5, 8]]