// Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water. Count the number of islands in the given 2D array.

// For Example:
            
// const matrix = [
//     [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//     [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
//     [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
// ];

// Output:
// => 6

const test1 = [
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
  ];

const largestIsland = matrix => {
  const seen = {};
  let maxSize = 0;
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      maxSize = Math.max(calculateSizeOfIsland(r, c, matrix, seen), maxSize);
    }
  }
  return maxSize;
}

const calculateSizeOfIsland = (r, c, matrix, seen) => {
  if (
    seen[[r,c]] || // already seen
    r < 0 || // r is out of bounds
    r >= matrix.length || // r is out of bounds
    c < 0 || // c is out of bounds
    c >= matrix[r].length || // c is out of bounds
    matrix[r][c] === 0 // not in an island
  ) {
    return 0;
  }
  seen[[r,c]] = true;

  return (
    1 +
    calculateSizeOfIsland(r + 1, c, matrix, seen) +
    calculateSizeOfIsland(r -1, c, matrix, seen) +
    calculateSizeOfIsland(r, c + 1, matrix, seen) +
    calculateSizeOfIsland(r, c - 1, matrix, seen)
  )
}

console.log(largestIsland(test1)); // 6s