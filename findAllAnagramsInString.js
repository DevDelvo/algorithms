// Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

// Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

// The order of output does not matter.

// Example 1:

// Input:
// s: "cbaebabacd" p: "abc"

// Output:
// [0, 6]

// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input:
// s: "abab" p: "ab"

// Output:
// [0, 1, 2]

// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

const findAllAnagramsInString = (str, p) => {
    const map = new Map();
    let count = 0, start = 0, end = 0;
    const res = [];
    // make map of number of instances of each letter
    p.split('').forEach(val => {
        !map.has(val) ? map.set(val, 1) : map.set(val, map.get(val) + 1)
    });
    count = map.size;
    while (end < str.length) {
        let endChr = str[end];
        if (map.has(endChr)) {
            map.set(endChr, map.get(endChr) - 1);
            if (map.get(endChr) === 0) count--;
        }
        end++;
        while (count === 0) {
            let startChar = str[start];
            if (map.has(startChar)) {
                map.set(startChar, map.get(startChar) + 1);
                if (map.get(startChar) > 0) count++
            }
            if (end - start === p.length) res.push(start);
            start++;
        }
    }
    return res;
}

console.log(findAllAnagramsInString("cbaebabacd", "abc"))
console.log(findAllAnagramsInString("abab", "ab"))

module.exports = findAllAnagramsInString;