// Given m children and n steps and a game where you constantly eliminate the nth child, 
// write a function that return the child who wins

// const josephus = (players, steps) => {
//     const arr = new Array(players).fill(1).map((x, i) => i + 1);
//     let i = 0;
//     while (arr.length > 1) {
//       i = (i + steps) % arr.length;
//     //   console.log(i);
//       arr.splice(i - 1, 1);
//     }
//     return arr[0];
//   };

// O(n) Time | O(n) space
function josephus(players, steps) {
    if (players === 1) {
        return 1;
    } else {
        console.log('players', players)
        return (josephus(players - 1, steps) + steps - 1) % players + 1;
    }
}
// call stack players = 6 steps = 2

console.log((1 + 2 - 1) % 2 + 1); // players = 2 returns 1
console.log((1 + 2 - 1) % 3 + 1); // players = 3 returns 3 
console.log((3 + 2 - 1) % 4 + 1); // players = 4 returns 1 
console.log((1 + 2 - 1) % 5 + 1); // players = 5 returns 3

//special case for steps = 2
// In the first round, all even positioned players are removed.
// If n is even: For example n = 8. In first round, player 2 is killed followedby 6 and 8. 
// In the second round, we have 1, 3, 5, 7 in positions 1st, 2nd, 3rd and 4th respectively.

// If n is odd: Ex: n = 7. First round, player 2, 4, and 6 are removed. Then we have 3, 5, 7 in the 1st, 2nd, and 3rd positions.

// If n is even and a person is in position x in current round, then the person was in 2x - 1 in the previous round.
// 2nd person was 3. (2 * 2 - 1)
// 3rd person was 5. (3 * 2 - 1)

// If n is odd and a person is in position x in the current round, then the person was in 2x + 1 in the previous round.
// 2nd person was 5. (2 * 2 + 1)
// 3rd person was 7. (3 * 2 + 1)

//From those 2 facts, we can recursively define the formula for finding the position of the survivor.
// n is even: f(n) = 2f(n/2) - 1
// n is odd: f(n) = 2f((n-1)/2) + 1

// solution of above recurrence 
// f(n) = 2(n - 2^(floor(Log2n))) + 1
//      = 2n - 2^(1 + floor(Log2n)) + 1

// O(log n) Time | O(1) Space
function josephus2(players) {
    let p = 1;
    while (p <= players) {
        p *= 2;
    }
    return (2 * players) - p + 1;
}

console.log(josephus(5, 2)); // 3
// josephus(14,2); // 13
// josephus2(14) // 13
// josephus2(16) // 1

//Source: geeksforgeeks.org