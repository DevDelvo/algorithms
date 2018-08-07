// Given m children and n steps and a game where you constantly eliminate the nth child, 
// write a function that return the child who wins

// O(n) Time | O(n) space
function josephus(players, steps) {
    if (players === 1) {
        return 1;
    } else {
        console.log((josephus(players - 1, steps) + steps - 1) % players + 1);
        return (josephus(players - 1, steps) + steps - 1) % players + 1;
    }
}

//special case for steps = 2
// In the first round, all even positioned players are removed.
// If n is even: For example n = 8. In first round, player 2 is killed followedby 6 and 8. 
// In the second round, we have 1, 3, 5, 7 in positions 1st, 2nd, 3rd and 4th respectively.

// If n is odd: Ex: n = 7. First round, player 2, 4, and 6 are removed. Then we have 3, 5, 7 in the 1st, 2nd, and 3rd positions.

// If n is even and a person is in position x in current round, then the person was in 2x - 1 in the previous round.
// 2nd person was 3. (2 * 2 - 1)
// 3rd person was 5. (3 * 2 - 1)

// If n is odd and a person is in positioon x in the current round, then the person was in 2x + 1 in the pervious round.
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

josephus(5, 2); // 1
josephus(14,2); // 13
josephus2(14) // 13
josephus2(16) // 1

//Source: geeksforgeeks.org