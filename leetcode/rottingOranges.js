// In a given grid, each cell can have one of three values:
// the value 0 representing an empty cell;
// the value 1 representing a fresh orange;
// the value 2 representing a rotten orange.
// Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

// Example 1:
// Input: [[2,1,1],
// [1,1,0],
// [0,1,1]]
// Output: 4

// Example 2:
// Input: [[2,1,1],
// [0,1,1],
// [1,0,1]]
// Output: -1
// Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

// Example 3:
// Input: [[0,2]]
// Output: 0
// Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.

// Note:
// 1 <= grid.length <= 10
// 1 <= grid[0].length <= 10
// grid[i][j] is only 0, 1, or 2.

function rottingOranges(oranges) {
    let q = []
    let numFresh = 0;
    let minutes = 0;

    for (let i = 0; i < oranges.length; i++) {
        let row = oranges[i];
        for (let j = 0; j < row.length; j++) {
            let current = row[j];
            if (current === 2) {
                q.push([i, j]);
            } else if (current === 1) {
                numFresh++;
            }
        }
    }
    while (q.length && numFresh) {
        let newQ = [];
        while (q.length) {
            let badOrange = q.shift();
            let infected = infectOthers(oranges, badOrange[0], badOrange[1], newQ);
            numFresh -= infected;
        }
        minutes++;
        q = newQ
    }
    if (numFresh !== 0) return -1;
    return minutes;
}

function infectOthers(grid, i, j, q) {
    let infected = 0;
    if (i > 0 && grid[i - 1][j] === 1) { // left orange
        grid[i - 1][j]++;
        infected++;
        q.push([i - 1, j]);
    }
    if (j > 0 && grid[i][j - 1] === 1) {
        grid[i][j - 1]++;
        infected++;
        q.push([i, j - 1])
    }
    if (i < grid.length - 1 && grid[i + 1][j] === 1) {
        grid[i + 1][j]++;
        infected++;
        q.push([i + 1, j]);
    }
    if (j < grid[i].length - 1 && grid[i][j + 1] === 1) {
        grid[i][j + 1]++;
        infected++;
        q.push([i, j + 1])
    }
    return infected;
}

const test1 = [[2, 1, 1], [1, 1, 0], [0, 1, 1]]; // 4
const test2 = [[2, 1, 1], [0, 1, 1], [1, 0, 1]]; // -1
const test3 = [[0, 2]]; // 0
const test4 = [[2, 1, 0, 2]] // 1

console.log(rottingOranges(test1));
console.log(rottingOranges(test2));
console.log(rottingOranges(test3));
console.log(rottingOranges(test4));