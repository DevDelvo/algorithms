// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

const isAnagramWithSorting = (s, t) => {
    const sSorted = s.split('').sort().join('');
    const tSorted = t.split('').sort().join('');
    return sSorted === tSorted;    
}

console.log(isAnagramWithSorting("anagram", "nagaram")) // true
console.log(isAnagramWithSorting("rat", "car")); // false

const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;
    const letterMap = {};
    for (let i = 0; i < s.length; i++) {
        if (letterMap[s[i]]) {
            letterMap[s[i]]++;
        } else {
            letterMap[s[i]] = 1;
        } 
    }
    for (let j = 0; j < t.length; j++) {
        const letter = t[j];
        if (!letterMap[letter]) {
            return false;
        }
        letterMap[letter]--;
        if (letterMap[letter] < 0) {
            return false;
        }
    }
    return true;
}

console.log(isAnagram("anagram", "nagaram")) // true
console.log(isAnagram("rat", "car")); // false