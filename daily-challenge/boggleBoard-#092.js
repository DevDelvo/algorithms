// Write a function that determines whether a string is a valid guess in a Boggle board, as per the rules of Boggle. A Boggle board is a 2D array of individual characters, e.g.:

// [ ["I","L","A","W"],
// ["B","N","G","E"],
// ["I","U","A","O"],
// ["A","S","R","L"] ]

// Valid guesses are strings that can be formed by connecting adjacent cells (horizontally, vertically, or diagonally) without re-using any previously used cells.

// For example, in the above board BINGO, LINGO, and ILNBIA would all be valid guesses, while BUNGIE, BINS, and SINUS would not.

// Your function should take two arguments (a 2D array and a string) and return true or false depending on whether the string is found in the array as per Boggle rules.

// Test cases will provide various array and string sizes (squared arrays up to 150x150 and strings up to 150 uppercase letters). You do not have to check whether the string is a real word or not, only if it's a valid guess.

function boggleBoard(board, guess) {
    const rowLength = board.length;
    const guessLength = guess.length;
    // create copy of board to track if visited or not
    const visited = board.map((row) => row.map((letter => ({ letter, visited: false }))))
    // find cells that contain the first letter of the guess
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
    // const startingPositions = visited.flatMap((row) => row.filter(({ letter }) => letter === guess[0]))
    const startingPositions = visited.reduce((acc, el) => acc.concat(el.filter(({ letter }) => letter === guess[0])), [])

    // implement search algorithm
    const dfs = (start, index) => {
        if (index === guessLength - 1) return true;
        // search neighbors that haven't been visited.
        const availableNeighbors = start.neighbors.filter(({ visited, letter }) => !visited && letter === guess[index + 1])
        // mark this cell so we don't visit it.
        start.visited = true;
        // continue traversing to the next letter
        const result = availableNeighbors.some((neighbor) => dfs(neighbor, index + 1))
        // mark cell available again
        start.visited = false;
        return result;
    }
    // compute neighboring cells
    for (let y = 0; y < rowLength; y++) {
        for (let x = 0; x < rowLength; x++) {
            const currentLetter = visited[y][x];
            currentLetter.neighbors =
                // Generate coordinaates of all possible neighboring cells
                [-1, 0, 1].map((a) => [-1, 0, 1].map((b) => [y + a, x + b]))
            currentLetter.neighbors = flatMap(currentLetter.neighbors);
            // filter coordinates only to those within matrix bounds and not pointing to self
            currentLetter.neighbors.filter(([a, b]) => a >= 0 && a < rowLength && b >= 0 && b < rowLength && !(a === y && b === x))
                // map coordinates to the matrix cells
                .map(([a, b]) => visited[a][b])
        }
    }
    console.log(visited[0][0])
    return startingPositions.some((start) => dfs(start, 0))
}

function flatMap(arr) {
    return arr.reduce((acc, val) => acc.concat(val), [])
}

// function flatDeep(arr) {
//     return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val) : val), [])
// }

const board = [
    ["I", "L", "A", "W"],
    ["B", "N", "G", "E"],
    ["I", "U", "A", "O"],
    ["A", "S", "R", "L"]
];



console.log(boggleBoard(board, 'BINGO')) // TRUE
// console.log(boggleBoard(board, 'BUNGIE')) // FALSE
// console.log(boggleBoard(board, 'LINGO')) // TRUE
// console.log(boggleBoard(board, 'ILNBIA')) // TRUE
// console.log(boggleBoard(board, 'SINUS')) // FALSE
// console.log(boggleBoard(board, 'BINS')) // FALSE
