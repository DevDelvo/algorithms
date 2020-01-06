// Given an arbitrary ransom note string and another string containing letters from all the magazines,
// write a function that will return true if the ransom note can be constructed from the magazines; 
// otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

// Note:
// You may assume that both strings contain only lowercase letters.
// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true

const canConstruct = function(ransomNote, magazine) {
    const magazineMap = {};
    
    for (const char of magazine) {
        if (magazineMap[char]) {
            magazineMap[char]++;
        } else {
            magazineMap[char] = 1;
        }
    }
    
    for (const char of ransomNote) {
        if (magazineMap[char] > 0) {
            magazineMap[char]--;
            continue;
        }
        return false;
    }
    return true;
};

console.log(canConstruct("a", "b")) // -> false
console.log(canConstruct("aa", "ab")) // -> false
console.log(canConstruct("aa", "aab")) // -> true