// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
// You may assume all four edges of the grid are all surrounded by water.

// Example 1:
// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1

// Example 2:
// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3

function numIslands(grid) {
    if (!grid.length) return 0;
    const COL = grid[0].length;
    const ROW = grid.length;

    console.log('ROW: ', ROW, 'COL: ', COL);

    function isSafe(M, row, col, visited) {
        if ((row >= 0) && (row < ROW) && (col >= 0) && (col < COL)) console.log('isSafe is true: ', 'row => ', row, 'col => ', col, 'neighbor => ', M[row][col], M[row][col] === '1')
        return ((row >= 0) && (row < ROW) && (col >= 0) && (col < COL) && (M[row][col] === '1' && !visited[row][col]))
    }

    function DFS(M, row, col, visited) {
        // DIAGONALS
        // let rowNbr = [-1, -1, -1, 0, 0, 1, 1, 1];
        // let colNbr = [-1, 0, 1, -1, 1, -1, 0, 1];

        // visited[row][col] = true;

        // for (let k = 0; k < 8; k++) {
        //     if (isSafe(M, row + rowNbr[k], col + colNbr[k], visited)) { // if you can visit this cell, ie, it isn't -1 or more than the row length;
        //         DFS(M, row + rowNbr[k], col + colNbr[k], visited);
        //     }
        // }

        // JUST UP AND DOWN
        let rowNbr = [-1, 0, 1, 0];
        let colNbr = [0, 1, 0, -1];

        console.log('line 52: ', row, col, 'visited DFS => ', visited)
        visited[row][col] = true;
        console.log('row => ', row, 'col => ', col, 'visited =>', M[row][col], visited[row][col])
        console.log('line 55: ', 'visited DFS => ', visited)

        for (let k = 0; k < 4; k++) {
            if (isSafe(M, row + rowNbr[k], col + colNbr[k], visited)) { // if you can visit this cell, ie, it isn't -1 or more than the row length;
                console.log('recursive DFS hit')
                DFS(M, row + rowNbr[k], col + colNbr[k], visited);
            }
        }
    }

    let visited = new Array(ROW).fill(new Array(COL).fill(false));
    console.log('initial visited => ', visited)
    let count = 0;
    for (let i = 0; i < ROW; i++) {
        // console.log('ROW => ', i);
        for (let j = 0; j < COL; j++) {
            // console.log('COL => ', j)
            if (grid[i][j] === '1' && !visited[i][j]) {
                // if a cell with 1 i not visited yet, then new island found.
                // visit all cells in this island and increment island count.
                console.log(i, j, 'cell visited=> ', grid[i][j])
                DFS(grid, i, j, visited);
                console.log(visited)

                count++;
            }
            console.log(i, j, 'cell => ', grid[i][j])
        }
    }
    // console.log('grid => ', grid);
    // console.log('visited => ', visited)
    return count;
}




// console.log(numIslands([
//     ['1', '1', '1', '1', '0'],
//     ['1', '1', '0', '1', '0'],
//     ['1', '1', '0', '0', '0'],
//     ['0', '0', '0', '0', '0']
// ])); // 1

// console.log(numIslands([
//     ['1', '1', '0', '0', '0'],
//     ['1', '1', '0', '0', '0'],
//     ['0', '0', '1', '0', '0'],
//     ['0', '0', '0', '1', '1']
// ])); // 3

// console.log(numIslands([
//     ["1", "1", "1", "1", "0"],
//     ["1", "1", "0", "1", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "0", "0", "0"]
// ])) // 1

// console.log(numIslands([
//     ["1"], ["1"]
// ])) // 1

// console.log(numIslands([])) // 0

// console.log(numIslands([["1", "1"]])) // 1

// console.log(numIslands([
//     ["1", "1", "0", "0", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "1", "0", "0"],
//     ["0", "0", "0", "1", "1"]
// ])) // 3

// console.log(numIslands([["1"]])) // 1

console.log(numIslands(
    [["0", "1", "0"],
    ["1", "0", "1"],
    ["0", "1", "0"]]
)) // 4