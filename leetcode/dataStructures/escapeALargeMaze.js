// In a 1 million by 1 million grid, the coordinates of each grid square are (x, y) with 0 <= x, y < 10^6.
// We start at the source square and want to reach the target square.
// Each move, we can walk to a 4-directionally adjacent square in the grid that isn't in the given list of blocked squares.

// Return true if and only if it is possible to reach the target square through a sequence of moves.

// Example 1:
// Input: blocked = [[0,1],[1,0]], source = [0,0], target = [0,2]
// Output: false
// Explanation:
// The target square is inaccessible starting from the source square, because we can't walk outside the grid.

// Example 2:
// Input: blocked = [], source = [0,0], target = [999999,999999]
// Output: true
// Explanation:
// Because there are no blocked cells, it's possible to reach the target square.

// Note:
// 0 <= blocked.length <= 200
// blocked[i].length == 2
// 0 <= blocked[i][j] < 10^6
// source.length == target.length == 2
// 0 <= source[i][j], target[i][j] < 10^6
// source != target

const gridLength = 1000000
const gridWidth = gridLength;
const moves = [[0, 1], [0, -1], [1, 0], [-1, 0]];

const isEscapePossible = function (blocked, source, target) {
  if (!blocked.length) return true;
  const blockedDict = buildBlockedDict(blocked);

  return dfs(blockedDict, source, target, {}) && dfs(blockedDict, target, source, {});
}

const buildBlockedDict = blocked => {
  const dict = {};
  for (let [x, y] of blocked) {
    dict[x] = dict[x] || {};
    dict[x][y] = true;
  }
  return dict;
}

const dfs = (blockedDict, start, target, visited) => {
  const stack = [start];
  while (stack.length) {
    const current = stack.pop();
    const [x, y] = current;

    // If the position has been visited, we do not add its adjacent positions to the stack
    if (visited[x] && visited[x][y]) continue;

    // We have reached the target
    if (x === target[0] && y === target[1]) return true;

    // The distance travelled is greater than the maximum length of a border created from blocked squares.
    if (Math.abs(x - start[0] >= 200) || Math.abs(y - start[1]) >= 200) {
      return true;
    }

    // Add current position to visited object.
    visited[x] = visited[x] || {}
    visited[x][y] = true;

    for (let move of moves) {
      const nextMove = [x + move[0], y + move[1]];
      // Add adjacent cells to the stack if they are valid.
      if (isValid(blockedDict, nextMove, visited)) {
        stack.push(nextMove);
      }
    }
  }
  // if we are unable to find the target square and are not able to traverse past the length of blocked squares.
  return false;
}

const isValid = (blockedDict, current, visited) => {
  const [x, y] = current;
  // If move out of bounds
  if (x < 0 || y < 0 || y > gridLength || x > gridWidth) return false;

  // If move is a blocked square
  if (blockedDict[x] && blockedDict[x][y]) return false;
  // If square has been visited
  if (visited[x] && visited[x][y]) return false;

  return true;
}

console.log(isEscapePossible([[0, 1], [1, 0]], [0, 0], [0, 2])); // false
console.log(isEscapePossible([], [0, 0], [999999, 999999])); // true
console.log(isEscapePossible([[100059, 100063], [100060, 100064], [100061, 100065], [100062, 100066], [100063, 100067], [100064, 100068], [100065, 100069], [100066, 100070], [100067, 100071], [100068, 100072], [100069, 100073], [100070, 100074], [100071, 100075], [100072, 100076], [100073, 100077], [100074, 100078], [100075, 100079], [100076, 100080], [100077, 100081], [100078, 100082], [100079, 100083], [100080, 100082], [100081, 100081], [100082, 100080], [100083, 100079], [100084, 100078], [100085, 100077], [100086, 100076], [100087, 100075], [100088, 100074], [100089, 100073], [100090, 100072], [100091, 100071], [100092, 100070], [100093, 100069], [100094, 100068], [100095, 100067], [100096, 100066], [100097, 100065], [100098, 100064], [100099, 100063], [100098, 100062], [100097, 100061], [100096, 100060], [100095, 100059], [100094, 100058], [100093, 100057], [100092, 100056], [100091, 100055], [100090, 100054], [100089, 100053], [100088, 100052], [100087, 100051], [100086, 100050], [100085, 100049], [100084, 100048], [100083, 100047], [100082, 100046], [100081, 100045], [100080, 100044], [100079, 100043], [100078, 100044], [100077, 100045], [100076, 100046], [100075, 100047], [100074, 100048], [100073, 100049], [100072, 100050], [100071, 100051], [100070, 100052], [100069, 100053], [100068, 100054], [100067, 100055], [100066, 100056], [100065, 100057], [100064, 100058], [100063, 100059], [100062, 100060], [100061, 100061], [100060, 100062]],
  [100079, 100063],
  [999948, 999967])) // false
console.log(isEscapePossible(
  [[100059, 100063], [100060, 100064], [100061, 100065], [100062, 100066], [100063, 100067], [100064, 100068], [100065, 100069], [100066, 100070], [100067, 100071], [100068, 100072], [100069, 100073], [100070, 100074], [100071, 100075], [100072, 100076], [100073, 100077], [100074, 100078], [100075, 100079], [100076, 100080], [100077, 100081], [100078, 100082], [100079, 100083], [100080, 100082], [100081, 100081], [100082, 100080], [100083, 100079], [100084, 100078], [100085, 100077], [100086, 100076], [100087, 100075], [100088, 100074], [100089, 100073], [100090, 100072], [100091, 100071], [100092, 100070], [100093, 100069], [100094, 100068], [100095, 100067], [100096, 100066], [100097, 100065], [100098, 100064], [100099, 100063], [100098, 100062], [100097, 100061], [100096, 100060], [100095, 100059], [100094, 100058], [100093, 100057], [100092, 100056], [100091, 100055], [100090, 100054], [100089, 100053], [100088, 100052], [100087, 100051], [100086, 100050], [100085, 100049], [100084, 100048], [100083, 100047], [100082, 100046], [100081, 100045], [100080, 100044], [100079, 100043], [100078, 100044], [100077, 100045], [100076, 100046], [100075, 100047], [100074, 100048], [100073, 100049], [100072, 100050], [100071, 100051], [100070, 100052], [100069, 100053], [100068, 100054], [100067, 100055], [100066, 100056], [100065, 100057], [100064, 100058], [100063, 100059], [100062, 100060], [100061, 100061], [100060, 100062]],
  [100079, 100063],
  [999948, 999967]
)) // false