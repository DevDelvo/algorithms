// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.


// Approach 1: Categorize by sorted string
// Intuition
// Two strings are anagrams if and only if their sorted strings are equal.

// Algorithm
// Maintain a map ans : {String -> List} where each key \text{K}K is a sorted string, and each value is the list of strings from the initial input that when sorted, are equal to \text{K}K.
// In Java, we will store the key as a string, eg. code. In Python, we will store the key as a hashable tuple, eg. ('c', 'o', 'd', 'e').

function groupAnagrams1(words) {
    if (!words.length) return [];

    const map = new Map();
    const res = [];
    for (const word of words) {
        let chars = word.split('').sort().join("");
        if (!map.has(chars)) {
            map.set(chars, [word]);
        } else {
            const newArr = map.get(chars);
            newArr.push(word);
            map.set(chars, newArr)
        }
    }

    map.forEach(el => res.push(el));
    return res;
}

// console.log(groupAnagrams1(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["ate", "eat", "tea"], ["nat", "tan"], ["bat"]]

// Complexity Analysis

// Time Complexity: O(NK\logK), where N is the length of strs, and K is the maximum length of a string in strs. The outer loop has complexity O(N) as we iterate through each string.
// Then, we sort each string in O(K\log K) time.
// Space Complexity: O(NK)), the total information content stored in ans.


// Approach 2: Categorize by count
// Intuition
// Two strings are anagrams if and only if their character counts (respective number of occurrences of each character) are the same.

// Algorithm
// We can transform each string \text{s}s into a character count, \text{count}count, consisting of 26 non-negative integers representing the number of \text{a}a's, \text{b}b's, \text{c}c's, etc.
// We use these counts as the basis for our hash map.

// In Java, the hashable representation of our count will be a string delimited with '#' characters. For example, abbccc will be #1#2#3#0#0#0...#0 where there are 26 entries total.
// In python, the representation will be a tuple of the counts. For example, abbccc will be (1, 2, 3, 0, 0, ..., 0), where again there are 26 entries total.

function groupAnagrams2(words) {
    if (!words.length) return [];
    const map = new Map();
    const letters = "abcdefghijklmnopqrstuvwxyz".split("");
    let count = new Array(26);
    const res = [];

    for (const word of words) {

        // count how many of the letters are in the word
        count.fill(0)
        for (const c of word.split("")) {
            count[letters.indexOf(c)]++;
        }
        // make string delimited with # and set the counts
        let sb = "";
        for (let i = 0; i < 26; i++) {
            sb += "#";
            sb += count[i];
        }

        // see if the map has the same delimited string which means it is an anagram
        if (!map.has(sb)) {
            map.set(sb, [word])
        } else {
            let newArr = map.get(sb);
            newArr.push(word);
            map.set(sb, newArr)
        }
    }
    map.forEach(el => res.push(el));
    return res;
}

console.log(groupAnagrams2(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["ate", "eat", "tea"], ["nat", "tan"], ["bat"]]