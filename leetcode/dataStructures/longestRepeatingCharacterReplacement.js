// Given a string s that consists of only uppercase English letters, you can perform at most k operations on that string.

// In one operation, you can choose any character of the string and change it to any other uppercase English character.

// Find the length of the longest sub-string containing all repeating letters you can get after performing the above operations.

// Note:
// Both the string's length and k will not exceed 104.

// Example 1:

// Input:
// s = "ABAB", k = 2

// Output:
// 4

// Explanation:
// Replace the two 'A's with two 'B's or vice versa.


// Example 2:

// Input:
// s = "AABABBA", k = 1

// Output:
// 4

// Explanation:
// Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.

function characterReplacement(str, k) {
    const map = {};
    let start = 0;
    let repeatedChars = 0; // keeps track of consecutive characters.
    let longest = 0;
    for (let i = 0; i < str.length; i++) {
        // incremen count of the letter (expand the window)
        const char = str[i];
        map[char] = map[char] || 0;
        map[char]++;
        console.log('char => ', char)
        console.log('char count => ', map[char])
        // Number of the most frequent letter in the window
        repeatedChars = Math.max(repeatedChars, map[char]);
        console.log('repeated chars => ', repeatedChars)

        // Window length - number of most frequent letter gives us
        // number of letters that need to be replaced. If that's
        // greater than k, we need to shrink the window
        console.log('number of letters we need to replace => ', (i - start + 1) - repeatedChars)
        if ((i - start + 1) - repeatedChars > k) {
            console.log('window => ', map[str[start]], '\n')
            map[str[start]]--;
            start++;
        }
        // See if current window is longer than current longest
        longest = Math.max(longest, (i - start + 1));
    }
    // console.log(map)
    return longest;
}

// console.log(characterReplacement("ABAB", 2)); // 4
console.log(characterReplacement("AABABBA", 1)); // 4
// console.log(characterReplacement("ABCABBADGGFGGG", 1)) // 6

// Time Complexity: O(n);
// Space Complexity: O(n);