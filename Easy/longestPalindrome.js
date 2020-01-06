// Given a string which consists of lowercase or uppercase letters,
// find the length of the longest palindromes that can be built with those letters.
// This is case sensitive, for example "Aa" is not considered a palindrome here.

// Note:
// Assume the length of given string will not exceed 1,010.
// Example:
// Input:
// "abccccdd"
// Output:
// 7

// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.

const test1 = "abccccdd"; 

const longestPalindrome = (str) => {
    if (!str.length) return 0;
    if (str.length === 1) return 1;
    let longestCount = 0; 
    const strMap = {};
    for (const char of str) {
        if (strMap[char]) {
            strMap[char]++;
        } else {
            strMap[char] = 1;
        }
    }
    for (const key in strMap) {
        longestCount += Math.floor(strMap[key] / 2) * 2;
        if (longestCount % 2 === 0 && strMap[key] % 2 === 1) {
            longestCount++;
        }
    }
    return longestCount;
}

console.log(longestPalindrome(test1)); // 7
// console.log(longestPalindrome(test2)); // 7