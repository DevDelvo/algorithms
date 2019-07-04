// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:
// Input: J = "aA", S = "aAAbbbb"
// Output: 3

// Example 2:
// Input: J = "z", S = "ZZ"
// Output: 0

// Note:
// S and J will consist of letters and have length at most 50.
// The characters in J are distinct.

var numJewelsInStones = function(J, S) {
    let count = 0;
    // const jewels = j.split("");
    const jewelsObj = {}
    J.split("").forEach(el => jewelsObj[el] = true);
    for (const stone of S) {
        if (jewelsObj[stone]) count++;
    }
    return count;
};

const J1 = "aA", S1 = "aAAbbbb";
const J2 = "z", S2 = "ZZ";
console.log(numJewelsInStones(J1, S1)); // 3
console.log(numJewelsInStones(J2, S2)); // 0