// Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent,
// the "Pacific ocean" touches the left and top edges of the matrix and
// the "Atlantic ocean" touches the right and bottom edges.

// Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.

// Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.

// Note:

// The order of returned grid coordinates does not matter.
// Both m and n are less than 150.


// Example:

// Given the following 5x5 matrix:

//   Pacific ~   ~   ~   ~   ~
//        ~  1   2   2   3  (5) *
//        ~  3   2   3  (4) (4) *
//        ~  2   4  (5)  3   1  *
//        ~ (6) (7)  1   4   5  *
//        ~ (5)  1   1   2   4  *
//           *   *   *   *   * Atlantic

// Return:

// [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix).

function pacificAtlantic(grid) {
    let res = [];
    if (!grid || !grid.length || !grid[0].length) return res;

    let row = grid.length - 1; // y-axis
    let col = grid[0].length - 1; // x-axis
    const pacific = [];
    const atlantic = [];
    for (let y = 0; y <= row; y++) {
        const rowPacific = [];
        const rowAtlantic = [];
        for (let x = 0; x <= col; x++) {
            rowPacific.push(false);
            rowAtlantic.push(false);
        }
        pacific.push(rowPacific);
        atlantic.push(rowAtlantic);
    }

    for (let y = 0; y <= row; y++) {
        dfs(0, y, grid, pacific, -1);
        dfs(col, y, grid, atlantic, -1);
    }

    for (let x = 0; x <= col; x++) {
        dfs(x, 0, grid, pacific, -1);
        dfs(x, row, grid, atlantic, -1);
    }

    for (let y = 0; y <= row; y++) {
        for (let x = 0; x <= col; x++) {
            if (pacific[y][x] && atlantic[y][x]) {
                res.push([y, x]);
            }
        }
    }
    return res;
}

function dfs(x, y, grid, visited, height) {
    if (x < 0 || x >= grid[0].length || y < 0 || y >= grid.length || visited[y][x] || grid[y][x] < height) return;
    visited[y][x] = true;
    dfs(x + 1, y, grid, visited, grid[y][x]);
    dfs(x - 1, y, grid, visited, grid[y][x]);
    dfs(x, y + 1, grid, visited, grid[y][x]);
    dfs(x, y - 1, grid, visited, grid[y][x]);
}

const grid1 = [
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4]
]

const grid2 = [
    [1, 1],
    [1, 1],
    [1, 1]
]

console.log(pacificAtlantic(grid1)) // [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]
console.log(pacificAtlantic(grid2)) // [[0,0],[0,1],[1,0],[1,1],[2,0],[2,1]]