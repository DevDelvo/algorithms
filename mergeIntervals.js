// Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

function merge(intervals) {
    if (!intervals.length) return [];

    const sorted = intervals.sort((a, b) => a[0] - b[0]);

    let temp = [...sorted[0]];
    const res = [];
    for (let i = 0; i < sorted.length; i++) {
        console.log('step: ', i)
        console.log('temp: ', temp);
        console.log('current: ', sorted[i])
        // If at the end, push what is in the temp array.
        if (i + 1 === sorted.length) {
            console.log('i + 1 === sorted.length: ', temp)
            res.push(temp);
            break;
        }
        // Check to see if end of temp array is greater than start of next array
        // if it is, then update the temp array with the max 2nd value
        if (temp[1] >= sorted[i + 1][0]) {
            console.log('temp[1] >= sorted[i + 1][0] prev: ', temp[1])
            temp[1] = Math.max(temp[1], sorted[i + 1][1]);
            console.log('temp[1] >= sorted[i + 1][0] new: ', temp[1])
        } else { // if no merge possible, then push merged arrays into final array
            if (temp.length) {
                res.push(temp);
                console.log('temp.length => res.push(temp)', res)
            } else {
                res.push(sorted[i]);
                console.log(temp.length, '!temp.length => res.push(temp)', res)

            }
            // repopulate temp with next array to merge
            temp = [...sorted[i + 1]];
            console.log('temp = [...sorted[i + 1]]: ', temp)
        }
    }
    return res;
}

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]])) // [[1,6],[8,10],[15,18]]
// console.log(merge([[1, 4], [4, 5]])) // [[1,5]]